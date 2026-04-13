"use server";

import { getPayload } from "@/shared/libs/payload/getPayload";
import type { PayloadArgsWithoutCollection } from "@/shared/libs/payload/types";

export const getUser = async (
  arg: PayloadArgsWithoutCollection<"findByID", "users">
) => {
  const payload = await getPayload();
  try {
    return await payload.findByID({ ...arg, collection: "users" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error creating post: ${error.message}`);
    }
    throw new Error(`Error creating post: ${error}`);
  }
};

export const getUserItems = async (
  arg: PayloadArgsWithoutCollection<"find", "user-items">
) => {
  const payload = await getPayload();
  try {
    return await payload.find({
      collection: "user-items",
      ...arg,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error creating post: ${error.message}`);
    }
    throw new Error(`Error creating post: ${error}`);
  }
};

