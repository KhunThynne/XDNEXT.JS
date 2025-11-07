"use client";
import React, { useState } from "react";
import { useForm } from "@tanstack/react-form";

import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe } from "@stripe/react-stripe-js";
import { env } from "@/env";
import { useAppForm } from "@/libs/shadcn/libs/tanstack-react-form";
import { Button } from "@/libs/shadcn/ui/button";

// โหลด Stripe.js ด้วย Public Key ของคุณ
const stripePromise = loadStripe(env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// นี่คือฟอร์มหลักของเรา
export function CheckoutForm() {
  const [qrCodeData, setQrCodeData] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("idle");
  const [clientSecret, setClientSecret] = useState(null);
  const stripe = useStripe(); // เอาไว้ใช้ตรวจสอบสถานะ

  // 1. สร้าง Form Instance ด้วย TanStack Form
  const form = useAppForm({
    defaultValues: {
      amount: 100, // 100 บาท
      email: "",
    },
    // 2. นิยาม 'onSubmit'
    onSubmit: async ({ value }) => {
      setPaymentStatus("loading");
      setQrCodeData(null);

      // 3. เรียก API ที่เราสร้างไว้ในส่วนที่ 1
      try {
        const response = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: value.amount * 100,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          // 4. ได้ข้อมูล QR Code มาแล้ว!
          setQrCodeData(data.qrCodeData);
          setClientSecret(data.clientSecret);
          setPaymentStatus("waiting"); // เปลี่ยนสถานะเป็น "รอสแกน"
        } else {
          throw new Error(data.message || "Failed to create payment");
        }
      } catch (error) {
        console.error(error);
        setPaymentStatus("error");
      }
    },
  });

  // ฟังก์ชันสำหรับเช็คสถานะ (เผื่อผู้ใช้กดยืนยันเอง)
  // แต่ปกติเราจะใช้ Webhook เป็นหลัก
  const checkPaymentStatus = async () => {
    if (!stripe || !clientSecret) return;

    const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);
    if (paymentIntent?.status === "succeeded") {
      setPaymentStatus("success");
      setQrCodeData(null); // ซ่อน QR Code เมื่อจ่ายสำเร็จ
    }
  };

  return (
    <div>
      {!qrCodeData && paymentStatus !== "success" && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          {/* ฟิลด์ของ TanStack Form */}
          <form.AppField name="amount" children={(field) => <field.Input />} />
          <Button type="submit" disabled={paymentStatus === "loading"}>
            {paymentStatus === "loading" ? "กำลังสร้าง QR..." : "ชำระเงิน"}
          </Button>
        </form>
      )}

      {/* 5. แสดงผลลัพธ์ */}
      {paymentStatus === "waiting" && qrCodeData && (
        <div>
          <h3>สแกน QR Code นี้เพื่อชำระเงิน</h3>
          {/* <QRCode value={qrCodeData} size={256} /> */}

          <p>สถานะ: รอดำเนินการ</p>
          <button onClick={checkPaymentStatus}>ฉันจ่ายแล้ว (ตรวจสอบ)</button>
        </div>
      )}

      {paymentStatus === "success" && <h3>ขอบคุณครับ! การชำระเงินสำเร็จ</h3>}

      {paymentStatus === "error" && (
        <p style={{ color: "red" }}>เกิดข้อผิดพลาด</p>
      )}
    </div>
  );
}

export const StripeProvider = ({ children }: WithChildren) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};
