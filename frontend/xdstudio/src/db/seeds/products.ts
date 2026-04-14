// src/db/seed/products.ts

import type { Product } from "@/payload-types";
import type { Payload } from "payload";
export const MOCK_PRODUCTS: Partial<Product>[] = [
  {
    name: "Espresso Maker Pro",
    status: "published",
    description: "เครื่องชงกาแฟระดับมืออาชีพ ดีไซน์ทันสมัย",
    version: "1.0.2",
    averageScore: 4.8,
    price: 15900 as any, // ใส่เป็นเลขหรือ ID ของ Price collection
    stock: 50 as any, // ใส่เป็นเลขหรือ ID ของ Stock collection
    media: [
      {
        blockType: "externalMedia",
        url: "https://images.unsplash.com/photo-1513267766416-3c07f45a1b2e",
      },
      {
        blockType: "internalMedia",
        file: "media_id_123" as any, // สมมติ ID ของไฟล์ที่อัปโหลดแล้ว
      },
    ],
    details: {
      root: {
        type: "root",
        format: "",
        indent: 0,
        version: 1,
        direction: "ltr",
        children: [
          {
            type: "paragraph",
            version: 1,
            children: [{ text: "รายละเอียดสินค้าแบบจัดเต็ม...", type: "text" }],
          },
        ],
      },
    },
  },
  {
    name: "Classic Coffee Beans (Dark Roast)",
    status: "published",
    description: "เมล็ดกาแฟคั่วเข้ม หอมกรุ่นจากดอยสูง",
    averageScore: 4.5,
    price: 450 as any,
    stock: 100 as any,
    tags: [] as any,
    media: [
      {
        blockType: "externalMedia",
        url: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e",
      },
    ],
  },
];
export const seedProducts = async (payload: Payload) => {
  payload.logger.info("🌱 กำลังเริ่ม Seed ข้อมูล Products...");

  try {
    for (const product of MOCK_PRODUCTS) {
      // เช็คก่อนว่ามีสินค้าชื่อนี้หรือยัง (ป้องกันการ Seed ซ้ำ)
      const existing = await payload.find({
        collection: "products",
        where: {
          name: { equals: product.name },
        },
      });

      if (existing.docs.length === 0) {
        await payload.create({
          collection: "products",
          data: product as Product,
          draft: false,
        });
        payload.logger.info(`✅ สร้างสินค้า: ${product.name} สำเร็จ`);
      } else {
        payload.logger.info(`⏩ ข้ามสินค้า: ${product.name} (มีอยู่แล้ว)`);
      }
    }
    payload.logger.info("✨ Seed Products เสร็จสมบูรณ์!");
  } catch (error) {
    payload.logger.error("❌ เกิดข้อผิดพลาดในการ Seed Products:");
    payload.logger.error(error);
  }
};
