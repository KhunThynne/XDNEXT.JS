"use server";

import { revalidatePath } from "next/cache";

export const revalidatePathAction = async (
  ...args: Parameters<typeof revalidatePath>
) => {
  revalidatePath(...args);
};
