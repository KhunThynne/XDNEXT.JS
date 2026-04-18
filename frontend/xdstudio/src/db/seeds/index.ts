import { getPayload } from "@/shared/libs/payload/getPayload";
import type { Payload } from "payload";
import { seedProducts } from "./products/products";
import { seedUserItems } from "./userItems/userItems";
import { seedCartItems } from "./cartItems/cartItems";
import { seedOrderItems } from "./orderItems/orderItems";
import { env } from "@/env";

const register = async (payload: Payload) => {
  await seedProducts(payload);
  await seedUserItems(payload);
  await seedCartItems(payload);
  await seedOrderItems(payload);
};
export const script = async () => {
  const payload = await getPayload();
  try {
    // if (env.NODE_ENV === "development") {
    //   await register(payload);
    // }
    await register(payload);
    payload.logger.info("Seed Success!");
  } catch (err) {
    payload.logger.error("Seed Failed");
    console.error(err);
  }
  process.exit(0);
};
