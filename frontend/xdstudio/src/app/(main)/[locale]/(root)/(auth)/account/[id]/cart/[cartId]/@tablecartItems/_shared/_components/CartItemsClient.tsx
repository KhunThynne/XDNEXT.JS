"use client";

import type { CartItem } from "@/payload-types";
import { DataTableCartInfiniteScroll } from "./DataTableInfiniteScroll";

import { useCartItemsContext } from "../../../_shared/hooks/useCartItemsContext";

export const CartItemsClient = ({
  cartId,
  userId,
}: {
  cartId: string;
  userId: string;
}) => {
  const { cartItemsData, cartQuery, itemsCount } = useCartItemsContext();
  const cartItems = cartItemsData;

  return (
    <DataTableCartInfiniteScroll
      cartItems={cartItems as CartItem[]}
      cartQuery={cartQuery}
      itemsCount={itemsCount}
    />
  );
};
