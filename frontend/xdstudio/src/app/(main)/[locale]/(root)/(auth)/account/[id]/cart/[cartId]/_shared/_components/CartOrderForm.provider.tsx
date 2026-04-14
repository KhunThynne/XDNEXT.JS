"use client";
import type { CartFormProps } from "../cartOrder.type";
import { useAppForm } from "@/shared/hooks/useAppForm";
import { formCartsOptions } from "../formOptions";
import { useMemo, useState } from "react";
import type { CartItem, User } from "@/payload-types";
import { CartItemsContext } from "../hooks/useCartItemsContext";
import type { SortingState } from "@tanstack/react-table";
import { useCartItemsManager } from "@/core/cart";
import { LoadingDots } from "@/shared/components/LoadingComponent";
import { useUserManager } from "@/core/user";
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
  const { iInfiniteQuery } = useCartItemsManager({
    cartId,
    userId,
  });
  const { data: userCreditData } = useUserManager({ userId }).credit;
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
      <form.AppForm>
        <form
         className="contents"
          onSubmit={async (e) => {
            e.preventDefault();
            console.log("HI");
            // await form.handleSubmit();
          }}
        >
          {children}
        </form>
      </form.AppForm>
    </CartItemsContext.Provider>
  );
};

export default CartOrderFormProvider;
