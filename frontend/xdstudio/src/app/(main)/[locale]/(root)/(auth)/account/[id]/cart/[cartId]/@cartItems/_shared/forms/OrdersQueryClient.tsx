"use client";
import { OrdersForm } from "./OrdersForm";

import { EmptyCart } from "@/shared/components/cart/CartShopping.form";
import { useTypedAppFormContext } from "@/shared/hooks/useAppForm";
import { useCartItemsManager } from "@/shared/core/cart";
import { useMemo } from "react";
import type { Cart, CartItem, User } from "@/payload-types";
import { formCartsOptions } from "../../../_shared/formOptions";

export const OrdersQueryClient = ({
  cartId,
  userId,
}: {
  cartId: Cart["id"];
  userId: User["id"];
}) => {
  const form = useTypedAppFormContext({ ...formCartsOptions });

  const { iInfiniteQuery, invalidate } = useCartItemsManager({
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
