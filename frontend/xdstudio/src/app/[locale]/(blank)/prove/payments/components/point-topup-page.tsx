"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import QRCode from "qrcode";
import { motion } from "framer-motion";

import { Copy, Download, RefreshCcw } from "lucide-react";
import { Card, CardContent } from "@/libs/shadcn/ui/card";
import { Button } from "@/libs/shadcn/ui/button";
import { Input } from "@/libs/shadcn/ui/input";
import { Label } from "@radix-ui/react-label";
import { Tabs, TabsList, TabsTrigger } from "@/libs/shadcn/ui/tabs";

/**
 * Single-file demo page for generating Thai PromptPay QR (EMVCo) in Next.js.
 *
 * ✅ Supports account types: mobile, national ID (tax ID), and e-wallet.
 * ✅ Optional: amount (THB), bill number, Ref1, Ref2.
 * ✅ Dynamic QR (POI method 12) when any dynamic field is present; otherwise static (11).
 * ✅ Client-side generation using the `qrcode` package.
 *
 * Drop this file into `app/promptpay/page.tsx` and ensure shadcn/ui + Tailwind are set up.
 */

// -----------------------------
// EMV/PromptPay payload builder
// -----------------------------

type AccountType = "mobile" | "nationalId" | "ewallet";

function toTag(id: string, value: string): string {
  const len = value.length.toString().padStart(2, "0");
  return `${id}${len}${value}`;
}

// CRC16-CCITT (poly 0x1021) per EMVCo, initial 0xFFFF, no xorout
function crc16(data: string): string {
  let crc = 0xffff;
  for (let i = 0; i < data.length; i++) {
    crc ^= data.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if (crc & 0x8000) crc = (crc << 1) ^ 0x1021;
      else crc <<= 1;
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

function normalizeMobile(msisdn: string): string {
  // Convert Thai mobile formats to PromptPay (country code 66, drop leading 0)
  const digits = msisdn.replace(/\D/g, "");
  if (digits.startsWith("66")) return digits;
  if (digits.startsWith("0")) return `66${digits.slice(1)}`;
  return `66${digits}`;
}

function buildPromptPayPayload(opts: {
  accountType: AccountType;
  account: string; // mobile(10), nationalId(13), ewallet(15)
  amount?: string | number;
  billNumber?: string;
  ref1?: string;
  ref2?: string;
  merchantName?: string; // 59 (optional but recommended for dynamic)
  merchantCity?: string; // 60 (optional)
}): string {
  const {
    accountType,
    amount,
    billNumber,
    ref1,
    ref2,
    merchantName = "MERCHANT",
    merchantCity = "BANGKOK",
  } = opts;

  let acct = opts.account.trim();
  let subtype: string; // 01 mobile, 02 national ID, 03 e-wallet

  if (accountType === "mobile") {
    acct = normalizeMobile(acct);
    subtype = "01";
  } else if (accountType === "nationalId") {
    acct = acct.replace(/\D/g, "");
    subtype = "02";
  } else {
    acct = acct.replace(/\D/g, "");
    subtype = "03";
  }

  // 00: Payload Format Indicator (always 01)
  const tag00 = toTag("00", "01");

  // 01: POI Method - 11 (static), 12 (dynamic)
  const isDynamic = Boolean(amount || billNumber || ref1 || ref2);
  const tag01 = toTag("01", isDynamic ? "12" : "11");

  // 29: Merchant Account Information (PromptPay AID)
  // Sub-tags:
  // 00: AID = A000000677010111 (PromptPay)
  // 01/02/03: account identifiers
  const mai = [toTag("00", "A000000677010111"), toTag(subtype, acct)].join("");
  const tag29 = toTag("29", mai);

  // 52: Merchant Category Code (0000 when not specified)
  const tag52 = toTag("52", "0000");
  // 53: Transaction Currency (764 = THB)
  const tag53 = toTag("53", "764");
  // 54: Amount (optional, decimal allowed)
  const tag54 = amount ? toTag("54", String(amount)) : "";
  // 58: Country Code
  const tag58 = toTag("58", "TH");
  // 59/60: Merchant Name/City
  const tag59 = toTag("59", merchantName.slice(0, 25) || "-");
  const tag60 = toTag("60", merchantCity.slice(0, 15) || "-");

  // 62: Additional Data Field Template (optional)
  const adf: string[] = [];
  if (billNumber) adf.push(toTag("01", billNumber.slice(0, 25)));
  if (ref1) adf.push(toTag("05", ref1.slice(0, 25)));
  if (ref2) adf.push(toTag("06", ref2.slice(0, 25)));
  const tag62 = adf.length ? toTag("62", adf.join("")) : "";

  // Assemble without CRC (63) first
  const payloadNoCRC = [
    tag00,
    tag01,
    tag29,
    tag52,
    tag53,
    tag54,
    tag58,
    tag59,
    tag60,
    tag62,
    "63", // CRC tag id only; length+value appended after computing
    "04",
  ].join("");

  const crc = crc16(payloadNoCRC);
  return payloadNoCRC + crc;
}

// -----------------------------
// UI
// -----------------------------
