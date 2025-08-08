import { Cart } from "@/libs/graphql/generates/graphql";
import { createHookStore } from "@/libs/zustand/createHookStore";

export const useCartsStore = createHookStore<Cart | object, "cart">({
  key: "cart",
  initial: {},
});
