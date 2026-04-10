import { formOptions } from "@tanstack/react-form";
import type { CartFormProps } from "../cartOrder.type";

export const formCartsOptions = formOptions({
  defaultValues: {
    cartId: "",
    userId: "",
    credit: 0,
    session: undefined,
    availablePoint: 0,
    grandTotal: 0,
    remainingpointPayment: 0,
    cartItems: [],
  } as CartFormProps,
});
