"use server";
import type { BasePayload, InitOptions, Payload } from "payload";
import { getPayload as getPayloadInstance } from "payload";
import config from "@/payload.config";

let cachedPayload: BasePayload | null;
export const getPayload = async (
  options?: {
    key?: string;
  } & Omit<InitOptions, "config">
): Promise<Payload> => {
  if (!cachedPayload) {
    cachedPayload = await getPayloadInstance({ config, ...options });
  }
  return cachedPayload;
};
