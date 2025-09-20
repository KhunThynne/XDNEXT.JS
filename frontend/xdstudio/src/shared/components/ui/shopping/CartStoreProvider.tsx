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
export default function CartStoreProvider({
  cart,
}: {
  cart: Maybe<Cart> | undefined;
}) {
  const { setCart } = useCartStore();

  const { setCartItem } = useCartItemStore();
  useLayoutEffect(() => {
    if (cart) {
      setCart(cart);
      console.log(cart.items);
      setCartItem(cart?.items || []);
    }
  }, [cart, setCart, setCartItem]);
  return null;
}
