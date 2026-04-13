import type { checkUserProductStatus } from "@/shared/core/product";

export type CheckUserProductStatusQuery = Awaited<ReturnType<
  typeof checkUserProductStatus
>>;
