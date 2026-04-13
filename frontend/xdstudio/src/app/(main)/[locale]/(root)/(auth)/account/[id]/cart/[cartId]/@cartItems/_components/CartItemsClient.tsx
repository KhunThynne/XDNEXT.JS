"use client";

import { LoadingDots } from "@/shared/components/LoadingComponent";
import type { CartItem } from "@/payload-types";
import { DataTableCartInfiniteScroll } from "./DataTableInfiniteScroll";
import { useMemo } from "react";
import { useCartItems } from "@/shared/core/cart";
import { useCartItemsContext } from "../../_shared/hooks/useCartItemsContext";

export const CartItemsClient = ({
  cartId,
  userId,
}: {
  cartId: string;
  userId: string;
}) => {
  const { cartItemsData, cartQuery } = useCartItemsContext();
  const cartItems = cartItemsData;
  const itemsCount = cartItemsData?.length ?? 0;
  return (
    <DataTableCartInfiniteScroll
      cartItems={cartItems as CartItem[]}
      itemsCount={itemsCount}
      cartQuery={cartQuery}
    />
  );
};
