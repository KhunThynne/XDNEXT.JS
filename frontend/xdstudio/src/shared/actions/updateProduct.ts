import { updateTag } from "next/cache";

export const updateProductTag = async () => {
  "use server";
  updateTag("products");
};
