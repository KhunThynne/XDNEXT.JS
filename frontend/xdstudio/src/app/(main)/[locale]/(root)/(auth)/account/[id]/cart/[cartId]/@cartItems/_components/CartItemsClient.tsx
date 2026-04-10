"use client";

import _ from "lodash";
import { useFormContext } from "react-hook-form";
import type { CartFormProps } from "../../_shared/_components/cartOrder.type";
import { useEffect, useMemo } from "react";
import { CartItemsDatableProvider } from "./CartItemsDatableProvider";
import { DataTableCartInfiniteScroll } from "./DataTableInfiniteScroll";
import { useCartInfinite } from "@/shared/hooks/useCartInfiniteQuery";
import { LoadingDots } from "@/shared/components/LoadingComponent";
import type { CartItem } from "@/libs/graphql/generates/graphql";

export const CartItemsClient = ({
  cartId,
  userId,
}: {
  cartId: string;
  userId: string;
}) => {
  const { query, invalidate } = useCartInfinite({
    cartId,
    userId,
  });
  const { data, status } = query;
  // useEffect(() => {
  //   console.log(watch());
  // }, [watch()]);
  // const flatData = useMemo(
  //   () => data?.pages.flatMap((page) => page?.data?.cart?.items ?? []) ?? [],
  //   [data?.pages]
  // );

  // const cartItems = flatData;
  // const navigation = `/account/cart/${cartId}`;
  // const itemsCount = data?.pages?.[0]?.data.cart?.itemsCount ?? 0;
  if (status === "pending")
    return (
      <section className="size-full place-content-center place-items-center">
        <LoadingDots />
      </section>
    );
  if (status === "success") return null;
  // return (
  //   <CartItemsDatableProvider
  //     cartItems={cartItems as CartItem[]}
  //     itemsCount={0}
  //     invalidateCartAction={invalidate}
  //   >
  //     <DataTableCartInfiniteScroll setValue={setValue} cartQuery={query} />
  //   </CartItemsDatableProvider>
  // );
};
