import type { Cart } from "@/shared/libs/graphql/generates/graphql";
import { createHookStore } from "@/shared/libs/zustand/createHookStore";

export const useCartsStore = createHookStore<Cart | object, "cart">({
  key: "cart",
  initial: {},
});
