import type { checkUserProductStatus } from "@/core/product";

export type CheckUserProductStatusQuery = Awaited<ReturnType<
  typeof checkUserProductStatus
>>;
