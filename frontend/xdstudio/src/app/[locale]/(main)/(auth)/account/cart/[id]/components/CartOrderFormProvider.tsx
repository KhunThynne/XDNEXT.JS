"use client";
import { Form } from "@/libs/shadcn/ui/form";
import { useForm } from "react-hook-form";
import type { CartFormProps } from "./cartOrder.type";

const CartOrderFormProvider = ({
  children,
  cartId,
  userId,
  session,
  point,
}: WithChildren & Omit<CartFormProps, "cartItems">) => {
  const method = useForm<CartFormProps>({
    defaultValues: { cartId, userId, point, session },
  });
  return <Form {...method}>{children}</Form>;
};

export default CartOrderFormProvider;
