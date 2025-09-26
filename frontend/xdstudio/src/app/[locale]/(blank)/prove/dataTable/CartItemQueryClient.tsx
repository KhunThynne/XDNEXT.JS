"use client";
import { CartOrderFormProps } from "@/app/[locale]/(main)/(auth)/account/cart/[id]/components/cartOrder.type";
import { EmptyCart } from "@/shared/components/ui/shopping/CartShopping.form";
import {
  useCartDocument,
  useCartInfinite,
} from "@/shared/hooks/useCartDocument";
import { useFormContext } from "react-hook-form";
import { DataTableCartInfiniteScroll } from "./DataTableInfiniteScroll";
import React from "react";

export const CartItemQueryClient = () => {
  const { watch, setValue } = useFormContext<CartOrderFormProps>();
  const { cartId, userId } = watch();
  const { query, invalidate } = useCartInfinite({
    cartId,
    userId,
  });

  const { data, status } = query;
  const flatData = React.useMemo(
    () => data?.pages?.[0]?.data?.cart?.items?.flatMap((page) => page) ?? [],
    [data]
  );
  const cartItems = flatData;
  const itemsCount = data?.pages?.[0]?.data.cart?.itemsCount ?? 0;
  const navigation = `/account/cart/${cartId}`;

  if (status === "success")
    return (
      <DataTableCartInfiniteScroll
        query={query}
        total={itemsCount}
        invalidateCart={invalidate}
        setValueCart={setValue}
        cartItems={cartItems}
        filter={""}
      />
    );
};
