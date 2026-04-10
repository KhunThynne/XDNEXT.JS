"use client";
import { Form } from "@/libs/shadcn/ui/form";

import type { CartFormProps } from "./cartOrder.type";
import { useAppForm } from "@/libs/tanstack-react-form";
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
