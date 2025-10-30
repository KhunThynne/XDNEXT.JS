"use server";

import { updateTag } from "next/cache";

export const updateTagClient = async (tag: string) => {
  return updateTag(tag);
};
