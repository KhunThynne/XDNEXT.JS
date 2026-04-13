"use client";
import { OrdersForm } from "./OrdersForm";

import { EmptyCart } from "@/shared/components/ui/cart/CartShopping.form";
import { useTypedAppFormContext } from "@/shared/hooks/useAppForm";
import { useCartItems } from "@/shared/hooks/useCartItems";
import { useStore } from "@tanstack/react-form";
import { useMemo } from "react";
import type { CartItem } from "@/payload-types";
import type { CartFormProps } from "../../_shared/_components/cartOrder.type";
import { formCartsOptions } from "../../_shared/_components/forms/formOptions";

export const OrdersQueryClient = () => {
  const form = useTypedAppFormContext({ ...formCartsOptions });
  const { cartId, userId } = useStore(
    form.store,
    (state: CartFormProps) => state.values
  );

  const { iInfiniteQuery, invalidate } = useCartItems({
    cartId,
    userId,
  });
  const { data, status } = iInfiniteQuery;

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
