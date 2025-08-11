"use client";
import { User } from "next-auth";
import { OrdersForm } from "./OrdersForm";
import { useCartDocument } from "@/shared/hooks/useCartDocument";
import { Cart } from "@/libs/graphql/generates/graphql";
import { EmptyCart } from "@/shared/components/ui/shopping/CartShopping.form";
import { notFound } from "next/navigation";
import _ from "lodash";
import { useFormContext } from "react-hook-form";
import { CartOrderFormProps } from "../../components/cartOrder.type";

export const OrdersQueryClient = () => {
  const { watch, setValue } = useFormContext<CartOrderFormProps>();
  const { cartId, userId } = watch();

  const { query, invalidate } = useCartDocument({
    cartId,
    userId,
  });
  const { data, status } = query;
  const cartItems = data?.data?.cart?.items || [];
  const navigation = `/account/cart/${cartId}`;
  const count = Number(data?.data?.cart?.items?.length);

  if (status === "success")
    return count > 0 ? (
      <OrdersForm
        invalidateCart={invalidate}
        setValueCart={setValue}
        cartItems={cartItems}
      />
    ) : (
      <aside className="h-full place-content-center">
        <EmptyCart />
      </aside>
    );
};
