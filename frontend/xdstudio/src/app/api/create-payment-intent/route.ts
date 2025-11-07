import { env } from "@/env"; // <-- ใช้ T3 Env ที่ถูกต้อง
import Stripe from "stripe";
import { NextResponse } from "next/server";

// ✅ ถูกต้อง 100%:
// ใช้ env.STRIPE_SECRET_KEY (ที่ไม่มี NEXT_PUBLIC_)
// ซึ่งตอนนี้เรารู้แล้วว่ามัน "active"
const stripe = new Stripe(env.STRIPE_SECRET_KEY);
// const connectedAccountId = "acct_1SAJnkR6pBZXc81Y";
/**
 * Handler สำหรับ HTTP POST
 * @param req - The incoming Request object
 */
const connectedAccountId = "acct_1SAJnkR6pBZXc81Y";
export async function POST(req: Request) {
  try {
    // 1. อ่าน body จาก req.json()
    const { amount } = await req.json(); // amount ต้องเป็น 'สตางค์'

    // 2. ตรวจสอบขั้นต่ำ
    if (!amount || amount < 2000) {
      // Stripe มีขั้นต่ำ (เช่น ~20 บาท)
      return NextResponse.json(
        { message: "Amount must be at least 2000 (20 THB)" },
        { status: 400 }
      );
    }

    // 3. สร้าง Payment Intent กับ Stripe
    const paymentIntent = await stripe.paymentIntents.create(
      {
        amount: amount, // ✅ แก้ไข Bug: ใช้ตัวแปร amount ที่รับมา
        currency: "thb",
        payment_method_types: ["promptpay"],
      },
      {
        stripeAccount: connectedAccountId,
      }
    );

    // 4. ดึงข้อมูล QR Code จาก Payment Intent
    // (ตอนนี้มันต้องทำงานได้แล้ว เพราะ Capability ของคุณ "active")
    // const qrCodeData =
    //   paymentIntent.next_action?.promptpay_display_qr_code?.data;
    // const clientSecret = paymentIntent.client_secret;

    // 5. ตรวจสอบว่าได้ QR Code จริงๆ
    // if (!qrCodeData) {
    //   // ถ้ายังไม่ได้อีก แสดงว่ามีปัญหาอื่น (ซึ่งไม่น่าเป็นไปได้แล้ว)
    //   console.error("PaymentIntent result:", paymentIntent); // Log ไว้ดู
    //   throw new Error(
    //     "Could not retrieve QR code data, even though capability is active."
    //   );
    // }

    // 6. ส่งข้อมูลกลับ
    return NextResponse.json({
      ...paymentIntent,
    });
  } catch (err) {
    // 7. จัดการ Error
    const errorMessage =
      err instanceof Error ? err.message : "An unknown error occurred";
    console.error("Stripe Payment Intent Error:", errorMessage);
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
