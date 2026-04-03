"use server";

import { revalidateTag, updateTag } from "next/cache";

export const updateTagClient = async (tag: string) => {
  return updateTag(tag);
};

export const revalidateTagClient = async (tag: string) => {
  return revalidateTag(tag, { expire: 0 });
};
