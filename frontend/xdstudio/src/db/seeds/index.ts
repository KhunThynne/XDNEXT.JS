import { getPayload } from "@/shared/libs/payload/getPayload";
import type { Payload } from "payload";
import { seedProducts } from "./products/products";

const runSeed = async (payload: Payload) => {
  await seedProducts(payload);
};
export const script = async () => {
  const payload = await getPayload();
  try {
    await runSeed(payload);
    payload.logger.info("Seed Success!");
  } catch (err) {
    payload.logger.error("❌ Seed Failed");
    console.error(err);
  }
  process.exit(0);
};
