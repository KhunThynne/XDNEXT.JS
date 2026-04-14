// src/db/seed/products.ts

import type { Product } from "@/payload-types";
import type { Payload } from "payload";
import { MOCK_PRODUCTS } from "./mock";

export const seedProducts = async (payload: Payload) => {
  try {
    for (const product of MOCK_PRODUCTS) {
      //   const existing = await payload.find({
      //     collection: "products",
      //     where: {
      //       name: { equals: product.name },
      //     },
      //   });
      await payload.create({
        collection: "products",
        data: product as Product,
      });
      payload.logger.info(`${product.name} `);
    }
  } catch (error) {
    payload.logger.error(`Seed Product Failed : ${error}`);
  }
};
