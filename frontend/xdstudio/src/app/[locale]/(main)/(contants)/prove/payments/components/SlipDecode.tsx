"use client";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { BrowserQRCodeReader } from "@zxing/browser";

// ------------------------------------------------------------
// EMV / PromptPay TLV parser
// ------------------------------------------------------------

type TLV = { tag: string; len: number; value: string };

function parseTLV(payload: string): TLV[] {
  const tlvs: TLV[] = [];
  let i = 0;
  while (i + 4 <= payload.length) {
    const tag = payload.slice(i, i + 2);
    const lenStr = payload.slice(i + 2, i + 4);
    const len = Number.parseInt(lenStr, 10);
    if (Number.isNaN(len) || len <= 0) break;
    const start = i + 4;
    const end = start + len;
    const value = payload.slice(start, end);
    tlvs.push({ tag, len, value });
    i = end;
  }
  return tlvs;
}

function findTLV(tlvs: TLV[], tag: string): TLV | undefined {
  return tlvs.find((t) => t.tag === tag);
}

function parseNestedTLV(value: string): TLV[] {
  return parseTLV(value);
}

// Human-friendly extraction from EMV payload
function extractEMVFields(payload: string) {
  const tlvs = parseTLV(payload);
  const result: Record<string, any> = { raw: payload };

  const pfi = findTLV(tlvs, "00"); // Payload Format Indicator
  const poi = findTLV(tlvs, "01"); // Point of Initiation Method (11=static, 12=dynamic)
  const merchantAccountCandidates = tlvs.filter((t) => {
    const n = Number.parseInt(t.tag, 10);
    return n >= 26 && n <= 51; // Merchant Account Information templates
  });
  const txnCurrency = findTLV(tlvs, "53");
  const txnAmount = findTLV(tlvs, "54");
  const country = findTLV(tlvs, "58");
  const merchantName = findTLV(tlvs, "59");
  const merchantCity = findTLV(tlvs, "60");
  const additionalData = findTLV(tlvs, "62"); // contains refs (01/02/03)
  const crc = findTLV(tlvs, "63");

  result.payloadFormatIndicator = pfi?.value;
  result.pointOfInitiationMethod = poi?.value; // 11 static, 12 dynamic (common convention)

  // Parse merchant account templates
  result.merchantAccounts = merchantAccountCandidates.map((t) => ({
    tag: t.tag,
    ...Object.fromEntries(
      parseNestedTLV(t.value).map((nt) => [nt.tag, nt.value])
    ),
  }));

  // Additional data: references
  if (additionalData) {
    const nested = parseNestedTLV(additionalData.value);
    const ref1 = findTLV(nested, "01");
    const ref2 = findTLV(nested, "02");
    const ref3 = findTLV(nested, "03");
    result.additionalData = Object.fromEntries(
      nested.map((n) => [n.tag, n.value])
    );
    result.ref1 = ref1?.value;
    result.ref2 = ref2?.value;
    result.ref3 = ref3?.value;
  }

  result.transactionCurrency = txnCurrency?.value;
  result.amount = txnAmount?.value;
  result.countryCode = country?.value;
  result.merchantName = merchantName?.value;
  result.merchantCity = merchantCity?.value;
  result.crc = crc?.value;

  return { tlvs, result };
}

// Pretty-print helper
function TLVTable({ tlvs }: { tlvs: TLV[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left">
            <th className="p-2">Tag</th>
            <th className="p-2">Length</th>
            <th className="p-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {tlvs.map((t, i) => (
            <tr key={i} className="border-t">
              <td className="p-2 font-mono">{t.tag}</td>
              <td className="p-2">{t.len}</td>
              <td className="break-all p-2 font-mono">{t.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ------------------------------------------------------------
// Main React component (drop/paste/upload image OR paste raw payload)
// ------------------------------------------------------------

export default function QRPaymentDecoderDemo() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [rawPayload, setRawPayload] = useState("");
  const [decodedText, setDecodedText] = useState<string | null>(null);
  const [emv, setEmv] = useState<{
    tlvs: TLV[];
    result: Record<string, any>;
  } | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cameraOn, setCameraOn] = useState(false);
  const codeReaderRef = useRef<BrowserQRCodeReader | null>(null);

  const handleDecodeText = useCallback((text: string) => {
    setDecodedText(text);
    setError(null);
    try {
      const parsed = extractEMVFields(text);
      console.log("test", text);
      setEmv(parsed);
    } catch (e: any) {
      setEmv(null);
      setError("Decoded text is not valid EMV/PromptPay TLV or parse failed.");
    }
  }, []);

  const onPickFile = useCallback(() => fileInputRef.current?.click(), []);

  const onFileChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      setBusy(true);
      setError(null);
      try {
        const objectUrl = URL.createObjectURL(file);
        const reader = new BrowserQRCodeReader();
        const res = await reader.decodeFromImageUrl(objectUrl);
        handleDecodeText(res.getText());
        URL.revokeObjectURL(objectUrl);
      } catch (err: any) {
        setError("Cannot decode QR from image. Try a clearer crop of the QR.");
      } finally {
        setBusy(false);
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    },
    [handleDecodeText]
  );

  const onDrop: React.DragEventHandler<HTMLDivElement> = async (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    setBusy(true);
    setError(null);
    try {
      const objectUrl = URL.createObjectURL(file);
      const reader = new BrowserQRCodeReader();
      const res = await reader.decodeFromImageUrl(objectUrl);
      handleDecodeText(res.getText());
      URL.revokeObjectURL(objectUrl);
    } catch (err) {
      setError("Cannot decode QR from dropped image.");
    } finally {
      setBusy(false);
    }
  };

  const startCamera = useCallback(async () => {
    if (cameraOn) return;
    setError(null);
    try {
      if (!codeReaderRef.current) {
        codeReaderRef.current = new BrowserQRCodeReader();
      }
      const codeReader = codeReaderRef.current;
      const video = videoRef.current!;

      // จะเปิดกล้อง + decode QR ครั้งแรกที่เจอ แล้ว resolve ทันที
      const result = await codeReader.decodeOnceFromVideoDevice(
        undefined,
        video
      );

      handleDecodeText(result.getText());
      setCameraOn(true);
    } catch (e: any) {
      setError("Could not access camera or decode QR.");
    }
  }, [cameraOn, handleDecodeText]);

  const stopCamera = useCallback(() => {
    try {
      const video = videoRef.current;
      if (video && video.srcObject) {
        const stream = video.srcObject as MediaStream;
        stream.getTracks().forEach((t) => t.stop());
        video.srcObject = null;
      }
      setCameraOn(false);
    } catch {}
  }, []);

  const onPasteRaw = useCallback(() => {
    if (rawPayload.trim()) {
      handleDecodeText(rawPayload.trim());
    }
  }, [rawPayload, handleDecodeText]);

  const merchantSummary = useMemo(() => {
    if (!emv?.result)
      return [] as Array<{ label: string; value: string | undefined }>;
    const r = emv.result;
    return [
      { label: "Point of Initiation", value: r.pointOfInitiationMethod },
      { label: "Amount", value: r.amount },
      { label: "Currency", value: r.transactionCurrency },
      { label: "Country", value: r.countryCode },
      { label: "Merchant Name", value: r.merchantName },
      { label: "Merchant City", value: r.merchantCity },
      { label: "Ref1", value: r.ref1 },
      { label: "Ref2", value: r.ref2 },
      { label: "Ref3", value: r.ref3 },
    ];
  }, [emv]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto max-w-4xl p-6">
        <h1 className="mb-2 text-2xl font-bold">
          QR Payment Decoder (EMV / PromptPay)
        </h1>
        <p className="mb-6 text-sm">
          อัปโหลดรูปสลิปที่มี QR, ลองสแกนด้วยกล้อง, หรือวาง (paste) payload ดิบ
          แล้วระบบจะถอดรหัส TLV และดึงข้อมูลสำคัญ เช่น Amount / Ref1-3
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Upload / Drop */}
          <div className="rounded-2xl bg-white p-4 shadow">
            <h2 className="mb-2 font-semibold">อัปโหลดรูปสลิป / QR</h2>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={onFileChange}
              className="hidden"
            />
            <div
              onDrop={onDrop}
              onDragOver={(e) => e.preventDefault()}
              className="cursor-pointer rounded-xl border-2 border-dashed p-6 text-center"
              onClick={onPickFile}
            >
              <p className="text-sm">ลากรูปมาวาง หรือคลิกเพื่อเลือกไฟล์</p>
            </div>
            {busy && <p className="mt-2 text-xs">กำลังถอดรหัส…</p>}
          </div>

          {/* Camera */}
          <div className="rounded-2xl bg-white p-4 shadow">
            <h2 className="mb-2 font-semibold">สแกนด้วยกล้อง</h2>
            <div className="mb-2 space-x-2">
              <button
                onClick={async () => {
                  setCameraOn(true);
                  await startCamera();
                }}
                className="rounded-xl bg-black px-3 py-1.5 text-white"
              >
                เริ่มกล้อง
              </button>
              <button
                onClick={stopCamera}
                className="rounded-xl bg-gray-200 px-3 py-1.5"
              >
                หยุดกล้อง
              </button>
            </div>
            <video
              ref={videoRef}
              className="w-full rounded-xl"
              muted
              playsInline
            />
          </div>
        </div>

        {/* Paste raw payload */}
        <div className="mt-4 rounded-2xl bg-white p-4 shadow">
          <h2 className="mb-2 font-semibold">วาง (Paste) payload ดิบ</h2>
          <div className="flex gap-2">
            <input
              className="flex-1 rounded-xl border px-3 py-2 font-mono text-sm"
              placeholder="เช่น 00020101021226..."
              value={rawPayload}
              onChange={(e) => setRawPayload(e.target.value)}
            />
            <button
              onClick={onPasteRaw}
              className="rounded-xl bg-black px-3 py-2 text-white"
            >
              ถอดรหัส
            </button>
          </div>
          <p className="mt-2 text-xs">
            ตัวอย่างจากคุณ:{" "}
            <span className="font-mono">
              0041000600000101030040220015234193921AQR093425102TH910494D3
            </span>
          </p>
        </div>

        {error && (
          <div className="mt-4 rounded-xl bg-red-50 p-3 text-red-700">
            {error}
          </div>
        )}

        {decodedText && (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-4 shadow">
              <h3 className="mb-2 font-semibold">Decoded Text</h3>
              <pre className="whitespace-pre-wrap break-all text-xs">
                {decodedText}
              </pre>
            </div>

            {emv && (
              <div className="rounded-2xl bg-white p-4 shadow">
                <h3 className="mb-2 font-semibold">สรุปข้อมูลสำคัญ</h3>
                <ul className="space-y-1 text-sm">
                  {merchantSummary.map((item, idx) => (
                    <li key={idx} className="flex justify-between gap-4">
                      <span className="text-gray-500">{item.label}</span>
                      <span className="break-all font-mono">
                        {item.value ?? "-"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {emv && (
          <div className="mt-4 rounded-2xl bg-white p-4 shadow">
            <h3 className="mb-2 font-semibold">TLV (EMV/PromptPay) ทั้งหมด</h3>
            <TLVTable tlvs={emv.tlvs} />
            {emv.result?.merchantAccounts?.length ? (
              <div className="mt-4">
                <h4 className="mb-2 font-semibold">
                  Merchant Account Templates (26–51)
                </h4>
                <div className="space-y-2">
                  {emv.result.merchantAccounts.map((ma: any, idx: number) => (
                    <div key={idx} className="rounded-xl border p-3 text-sm">
                      <div className="mb-1 text-xs text-gray-500">
                        Tag: {ma.tag}
                      </div>
                      <div className="grid gap-2 md:grid-cols-3">
                        {Object.entries(ma)
                          .filter(([k]) => k !== "tag")
                          .map(([k, v]) => (
                            <div key={k} className="flex justify-between gap-4">
                              <span className="text-gray-500">{k}</span>
                              <span className="break-all font-mono">
                                {String(v)}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        )}

        <div className="mt-8 text-xs text-gray-500">
          หมายเหตุ: โครงสร้าง EMV อาจต่างกันตามธนาคาร/เกตเวย์
          บางสลิปอาจไม่ใส่จำนวนเงินไว้ใน QR และ Reference อาจอยู่ใน Additional
          Data (62: 01/02/03) หรืออยู่ใน Merchant Account Template (26–51)
          แล้วแต่ระบบที่ออก QR
        </div>
      </div>
    </div>
  );
}
