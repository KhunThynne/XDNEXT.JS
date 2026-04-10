"use client";
import { OrdersForm } from "./OrdersForm";

import { EmptyCart } from "@/shared/components/ui/shopping/CartShopping.form";
import { useTypedAppFormContext } from "@/shared/hooks/useAppForm";
import { useCartInfinite } from "@/shared/hooks/useCartInfiniteQuery";
import { useStore } from "@tanstack/react-form";
import { useMemo } from "react";
import type { CartItem } from "@/libs/graphql/generates/graphql";

export const OrdersQueryClient = () => {
  const form = useTypedAppFormContext();
  const { cartId, userId } = useStore(form.store, (state: CartFormProps) => state.values);

  const { query, invalidate } = useCartInfinite({
    cartId,
    userId,
  });
  const { data, status } = query;

  const flatData = useMemo(
    () => data?.pages?.flatMap((page) => page?.docs ?? []) ?? [],
    [data]
  );

  const cartItems = flatData;
  const itemsCount = 0;

  if (status === "success")
    return itemsCount > 0 ? (
      <OrdersForm
        invalidateCartAction={invalidate}
        setValueCart={form.setFieldValue}
        cartItems={cartItems as CartItem[]}
        filter={""}
      />
    ) : (
      <aside className="h-full place-content-center">
        <EmptyCart />
      </aside>
    );
};
