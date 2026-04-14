"use server";

import type { User } from "@/payload-types";
import { getPayload } from "@/shared/libs/payload/getPayload";
import type { PayloadArgsWithoutCollection } from "@/shared/libs/payload/types";
import { cacheLife, cacheTag } from "next/cache";
import { keys } from "./keys";

export const getUser = async (
  arg: PayloadArgsWithoutCollection<"findByID", "users">
) => {
  const payload = await getPayload();
  try {
    return await payload.findByID({ ...arg, collection: "users" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error creating getUser: ${error.message}`);
    }
    throw new Error(`Error creating getUser: ${error}`);
  }
};

export const getUserCache = async (
  arg: PayloadArgsWithoutCollection<"findByID", "users">
) => {
  "use cache";
  const userId = arg.id;
  cacheLife("max");
  cacheTag(`user-${userId}`);
  return await getUser(arg);
};

export const getUserCreditCache = async (
  id: User["id"]
): Promise<Pick<User, "id" | "credit">> => {
  "use cache";
  cacheLife("max");
  cacheTag(...keys.credit(id).tag);
  return await getUser({ id, select: { credit: true } });
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
      throw new Error(`Error creating getUserItems: ${error.message}`);
    }
    throw new Error(`Error creating getUserItems: ${error}`);
  }
};
