// src/app/api/discord/route.ts
import { NextResponse } from "next/server";

// App Router จะไม่แคชผลลัพธ์ของ Route Handler โดยอัตโนมัติ
// แต่เพื่อความมั่นใจว่าได้ข้อมูลล่าสุดเสมอ เราสามารถใส่บรรทัดนี้ได้
export const dynamic = "force-dynamic";

// สร้างฟังก์ชันสำหรับ HTTP GET method
export async function GET() {
  try {
    // ยิง Request ไปยัง API ของบอทที่รันแยกไว้
    const response = await fetch("http://localhost:3001/api/members");

    if (!response.ok) {
      // ถ้าบอทไม่ตอบสนอง ให้โยน Error
      throw new Error(`Bot API responded with status ${response.status}`);
    }

    const members = await response.json();

    // ส่งข้อมูลกลับไปในรูปแบบ JSON โดยใช้ NextResponse
    return NextResponse.json(members);
  } catch (error) {
    console.error("[API_ROUTE_ERROR]", error);
    // กรณีเกิด Error ให้ส่ง status 500 กลับไปพร้อมข้อความ
    return NextResponse.json(
      { error: "Failed to fetch members from bot" },
      { status: 500 }
    );
  }
}
