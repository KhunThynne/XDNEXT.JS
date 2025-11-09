import { env } from "@/env";
import Stripe from "stripe";
import { NextResponse } from "next/server";

// ✅ ใช้ Key ของ Platform (บัญชีแม่) ถูกต้อง
const stripe = new Stripe(env.STRIPE_SECRET_KEY);

// ✅ นี่คือ ID ของ "บัญชีลูก" ที่เราต้องการตรวจสอบ
const connectedAccountId = "acct_1SAJnkR6pBZXc81Y";
// ✅ นี่คือ "ความสามารถ" ที่เราอยากรู้
const capabilityId = "promptpay_payments";

/**
 * Handler สำหรับ HTTP GET
 * เพื่อตรวจสอบ Capability ของ "บัญชีลูก"
 */
export async function GET(req: Request) {
  try {
    // ✅ ถูกต้อง: ดึง "ความสามารถ" ของ "บัญชีลูก"
    const capability = await stripe.accounts.retrieveCapability(
      connectedAccountId,
      capabilityId
    );

    // เราจะ log ดู capability ทั้งหมดใน Terminal
    console.log("CONNECTED ACCOUNT CAPABILITY:", capability);

    return NextResponse.json({
      connected_account_id: capability.account,
      capability_name: capability.id,
      capability_status: capability.status, // <-- ‼️ เราอยากรู้ค่านี้
    });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "An unknown error occurred";
    console.error("Error checking connected capability:", errorMessage);

    // ถ้าเกิด Error (เช่น Key ไม่มีสิทธิ์) มันจะบอกเราตรงนี้
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
