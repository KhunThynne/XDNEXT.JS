"use server";

import { revalidateTag } from "next/cache";

export const revalidateClient = async (tag: string) => {
  return revalidateTag(tag, "max");
};
