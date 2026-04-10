"use client";
import type { CartFormProps } from "./cartOrder.type";
import { useAppForm } from "@/shared/hooks/useAppForm";
import { formCartsOptions } from "./forms/formOptions";

const CartOrderFormProvider = ({
  children,
  ...formOptions
}: WithChildren & Omit<CartFormProps, "cartItems">) => {
  const form = useAppForm({
    ...formCartsOptions,
    defaultValues: {
      ...formCartsOptions.defaultValues,
      ...formOptions,
    },
  });
  return <form.AppForm>{children}</form.AppForm>;
};

export default CartOrderFormProvider;
