"use server";

import { getPayload } from "@/libs/payload/getPayload";
import type { User } from "@/payload-types";

export const getUser = async (id: string) => {
  const payload = await getPayload();
  try {
    return await payload.findByID({
      collection: "users",
      id,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error creating post: ${error.message}`);
    }
    throw new Error(`Error creating post: ${error}`);
  }
};

export const getUserItems = async (id: User["id"]) => {
  const payload = await getPayload();
  try {
    return await payload.find({
      collection: "user-items",
      where: {
        user: {
          equals: id,
        },
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error creating post: ${error.message}`);
    }
    throw new Error(`Error creating post: ${error}`);
  }
};
