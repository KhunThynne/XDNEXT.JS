"use client";

import { useTypedAppFormContext } from "@/shared/hooks/useAppForm";
import { LoadingDots } from "@/shared/components/LoadingComponent";
import type { CartItem } from "@/payload-types";
import { CartItemsDatableProvider } from "./CartItemsDatableProvider";
import { DataTableCartInfiniteScroll } from "./DataTableInfiniteScroll";
import { useMemo } from "react";
import { useCartItems } from "@/shared/hooks/useCartItems";

export const CartItemsClient = ({
  cartId,
  userId,
}: {
  cartId: string;
  userId: string;
}) => {
  const { iInfiniteQuery, invalidate } = useCartItems({
    cartId,
    userId,
  });
  const { data, status } = iInfiniteQuery;
  const form = useTypedAppFormContext({});
  const flatData = useMemo(
    () => data?.pages?.flatMap((page) => page?.docs ?? []) ?? [],
    [data]
  );

  const cartItems = flatData;
  const itemsCount = data?.pages?.[0]?.totalDocs ?? 0;
  if (status === "pending")
    return (
      <section className="size-full place-content-center place-items-center">
        <LoadingDots />
      </section>
    );
  return (
    <CartItemsDatableProvider
      cartItems={cartItems as CartItem[]}
      itemsCount={itemsCount}
      invalidateCartAction={invalidate}
    >
      <DataTableCartInfiniteScroll setValue={form.setFieldValue} cartQuery={iInfiniteQuery} />
    </CartItemsDatableProvider>
  );
};
