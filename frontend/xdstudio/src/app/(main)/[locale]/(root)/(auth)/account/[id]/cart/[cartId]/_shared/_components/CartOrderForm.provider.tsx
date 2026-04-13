"use client";
import type { CartFormProps } from "../cartOrder.type";
import { useAppForm } from "@/shared/hooks/useAppForm";
import { formCartsOptions } from "../formOptions";
import { useMemo, useState } from "react";
import type { CartItem, User } from "@/payload-types";
import { CartItemsContext } from "../hooks/useCartItemsContext";
import type { SortingState } from "@tanstack/react-table";
import { useCartItems } from "@/shared/core/cart";
import { LoadingDots } from "@/shared/components/LoadingComponent";
import { useUserCredit } from "@/shared/core/user";
import { useStore } from "@tanstack/react-form";

const CartOrderFormProvider = ({
  children,
  ...props
}: WithChildren &
  Omit<
    CartFormProps,
    | "selectedCartItemsId"
    | "grandTotal"
    | "remainingCredit"
    | "availableCredit"
    | "filter"
  >) => {
  const { cartId, userId } = props;
  const form = useAppForm({
    ...formCartsOptions,
    defaultValues: {
      ...formCartsOptions.defaultValues,
      ...props,
    },
  });
  const { iInfiniteQuery } = useCartItems({
    cartId,
    userId,
  });
  const {
    query: { data: userCreditData },
  } = useUserCredit({ id: userId });
  const { data, status } = iInfiniteQuery;
  const filter = useStore(form.store, (state) => state.values.filter);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
  const cartItemsData = useMemo(() => {
    const res = data?.pages?.flatMap((page) => page?.docs ?? []) ?? [];
    return res;
  }, [data]);
  const selectedCartItems = useMemo(() => {
    return cartItemsData.filter((item) => rowSelection[item.id]);
  }, [cartItemsData, rowSelection]);
  const value = useMemo(
    () => ({
      status,
      userCredit: userCreditData?.credit ?? 0,
      selectedCartItems,
      cartItemsData,
      itemsCount: 0,
      filter,
      sorting,
      setSorting,
      rowSelection,
      setRowSelection,
      cartQuery: iInfiniteQuery,
    }),
    [
      status,
      userCreditData,
      selectedCartItems,
      cartItemsData,
      filter,
      sorting,
      rowSelection,
      iInfiniteQuery,
    ]
  );
  if (status === "pending")
    return (
      <section className="size-full place-content-center place-items-center">
        <LoadingDots />
      </section>
    );
  return (
    <CartItemsContext.Provider value={value}>
      <form.AppForm>{children}</form.AppForm>
    </CartItemsContext.Provider>
  );
};

export default CartOrderFormProvider;
