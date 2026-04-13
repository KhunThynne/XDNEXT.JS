import { formOptions } from "@tanstack/react-form";
import { cartFormSchema, type CartFormProps } from "./cartOrder.type";

export const formCartsOptions = formOptions({
  defaultValues: {
    cartId: "",
    userId: "",
    availableCredit: 0,
    grandTotal: 0,
    remainingCredit: 0,
    selectedCartItemsId: {},
    filter: "",
  } satisfies CartFormProps,

  validators: {
    onChange: cartFormSchema,
    onSubmit: cartFormSchema,
    onMount: cartFormSchema,
  },
});
