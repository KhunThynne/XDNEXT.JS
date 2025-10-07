"use client";
import { Form } from "@/libs/shadcn/ui/form";
import { useForm } from "react-hook-form";
import type { CartFormProps } from "../cartOrder.type";
import { Cart, User } from "@/libs/graphql/generates/graphql";
import { Session } from "next-auth";

export const CartOrderForm = ({
  children,
  cartId,
  userId,
  session,
}: WithChildren & Omit<CartFormProps, "cartItems">) => {
  const method = useForm<CartFormProps>({
    defaultValues: { cartId, userId, session },
  });
  return <Form {...method}>{children}</Form>;
};
