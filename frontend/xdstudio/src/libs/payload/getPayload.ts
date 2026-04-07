"use server";
import type { BasePayload } from "payload";
import { getPayload as getPayloadInstance } from "payload";
import config from "@/payload.config";

let cachedPayload: BasePayload | null = (global as any).payload || null;

export const getPayload = async (): Promise<BasePayload> => {
  if (cachedPayload) {
    return cachedPayload;
  }

  cachedPayload = await getPayloadInstance({ config });

  if (process.env.NODE_ENV !== "production") {
    (global as any).payload = cachedPayload;
  }

  return cachedPayload;
};
