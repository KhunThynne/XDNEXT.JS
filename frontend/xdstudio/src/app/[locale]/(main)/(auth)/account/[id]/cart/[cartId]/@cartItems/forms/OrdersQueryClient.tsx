"use client";
import { OrdersForm } from "./OrdersForm";
import type { CartItem } from "@/libs/graphql/generates/graphql";
import { EmptyCart } from "@/shared/components/ui/shopping/CartShopping.form";
import _ from "lodash";
import { useFormContext } from "react-hook-form";
import type { CartFormProps } from "../../_components/cartOrder.type";
import { useCartInfinite } from "@/shared/hooks/useCartInfiniteQuery";
import { useMemo } from "react";

export const OrdersQueryClient = () => {
  const { watch, setValue } = useFormContext<CartFormProps>();
  const { cartId, userId } = watch();

  const { query, invalidate } = useCartInfinite({
    cartId,
    userId,
  });
  const { data, status } = query;

  const flatData = useMemo(
    () => data?.pages?.[0]?.data?.cart?.items?.flatMap((page) => page) ?? [],
    [data]
  );

  const cartItems = flatData;
  const navigation = `/account/cart/${cartId}`;
  const itemsCount = data?.pages?.[0]?.data.cart?.itemsCount ?? 0;

  if (status === "success")
    return itemsCount > 0 ? (
      <OrdersForm
        invalidateCartAction={invalidate}
        setValueCart={setValue}
        cartItems={cartItems as CartItem[]}
        filter={""}
      />
    ) : (
      <aside className="h-full place-content-center">
        <EmptyCart />
      </aside>
    );
};
