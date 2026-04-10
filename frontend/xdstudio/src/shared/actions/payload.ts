"use server";

import { getPayload } from "@/libs/payload/getPayload";
import type { PayloadArgs, PayloadMethods } from "@/libs/payload/types";
import type { Config } from "@/payload-types";

export const payloadActions = async <
  M extends PayloadMethods,
  C extends keyof Config["collections"],
>(
  method: M,
  args: PayloadArgs<M, C>
) => {
  const payload = await getPayload();
  const action = payload[method] as any;
  try {
    return await action(args);
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    throw new Error(`Payload Error [${method} on ${args.collection}]: ${msg}`);
  }
};
