"use client";
import { User } from "next-auth";

import { useCartDocument } from "@/shared/hooks/useCartDocument";
import { Cart } from "@/libs/graphql/generates/graphql";
import { EmptyCart } from "@/shared/components/ui/shopping/CartShopping.form";
import { notFound } from "next/navigation";
import _ from "lodash";
import { useFormContext } from "react-hook-form";
import type { CartFormProps } from "../../components/cartOrder.type";

import React, { useEffect, useMemo } from "react";
import { CartItemsDatableProvider } from "./CartItemsDatableProvider";
import { DataTableCartInfiniteScroll } from "./DataTableInfiniteScroll";
import { useCartInfinite } from "@/shared/hooks/useCartInfiniteQuery";
import { LoadingDots } from "@/shared/components/ui/Loading";

export const CartItemsClient = () => {
  const { watch, setValue } = useFormContext<CartFormProps>();
  const { cartId, userId } = watch();
  const { query, invalidate } = useCartInfinite({
    cartId,
    userId,
  });
  const { data, status } = query;

  const flatData = useMemo(
    () => data?.pages.flatMap((page) => page?.data?.cart?.items ?? []) ?? [],
    [data?.pages]
  );

  const cartItems = flatData;
  const navigation = `/account/cart/${cartId}`;
  const itemsCount = data?.pages?.[0]?.data.cart?.itemsCount ?? 0;
  if (status === "pending")
    return (
      <section className="size-full place-content-center place-items-center">
        <LoadingDots />
      </section>
    );
  if (status === "success")
    return itemsCount > 0 ? (
      <CartItemsDatableProvider
        cartItems={cartItems}
        itemsCount={itemsCount}
        invalidateCartAction={invalidate}
      >
        <DataTableCartInfiniteScroll setValue={setValue} cartQuery={query} />
      </CartItemsDatableProvider>
    ) : (
      <aside className="h-full place-content-center">
        <EmptyCart />
      </aside>
    );
};
