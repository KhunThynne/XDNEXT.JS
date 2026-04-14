
import { createHookStore } from "@/shared/libs/zustand/createHookStore";
import type { Cart } from "@/payload-types";

export const useCartsStore = createHookStore<Cart | object, "cart">({
  key: "cart",
  initial: {},
});
