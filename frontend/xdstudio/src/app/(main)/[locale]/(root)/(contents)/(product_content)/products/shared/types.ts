import type { checkUserProductStatus } from "@/shared/actions/products";

export type CheckUserProductStatusQuery = Awaited<ReturnType<
  typeof checkUserProductStatus
>>;
