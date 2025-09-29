"use client";

import { Cart, CartItem, Maybe } from "@/libs/graphql/generates/graphql";
import { createHookStore } from "@/libs/zustand/createHookStore";
import { useLayoutEffect } from "react";

export const useCartStore = createHookStore<Cart, "cart">({
  key: "cart",
  initial: { id: "", items: [] },
});

export const useCartItemStore = createHookStore<
  Maybe<CartItem[]> | undefined,
  "cartItem"
>({
  key: "cartItem",
  initial: [],
});
export default function CartStoreProvider() {
  return null;
}
