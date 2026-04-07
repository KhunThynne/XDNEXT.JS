"use server";

import { revalidatePath, revalidateTag, updateTag } from "next/cache";

export const updateTagClient = async (tag: string) => {
  return updateTag(tag);
};

export const revalidateTagClient = async (tag: string) => {
  return revalidateTag(tag, { expire: 0 });
};

export const revalidatePathClient = async (
  ...args: Parameters<typeof revalidatePath>
) => {
  return revalidatePath(...args);
};
