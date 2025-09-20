"use client";
import { Form } from "@/libs/shadcn/ui/form";
import { useForm } from "react-hook-form";
import { CartOrderFormProps } from "../cartOrder.type";
import { Cart, User } from "@/libs/graphql/generates/graphql";
import { Session } from "next-auth";

export const CartOrderForm = ({
  children,
  cartId,
  userId,
  session,
}: WithChildren & Omit<CartOrderFormProps, "cartsOrderItem">) => {
  const method = useForm<CartOrderFormProps>({
    defaultValues: { cartId, userId, session },
  });
  return <Form {...method}>{children}</Form>;
};
