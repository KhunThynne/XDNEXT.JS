"use client";

import { Button } from "@/libs/shadcn/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { useFormContext } from "react-hook-form";

import { useMemo } from "react";
import { Link } from "@navigation";
import { Form } from "@/libs/shadcn/ui/form";

import { useFormatter } from "next-intl";
import PointDiamon from "@/shared/components/PointDiamod";
import {
  ButtonGroup,
  DialogFooterAction,
  useDialogGlobal,
} from "@/shared/components/ui";
import type { CartFormProps } from "../cartOrder.type";
import { useMutationCreateOrdersAndUserItems } from "@/shared/services/tanstack/mutations/oredersAndUserItems";
import {
  UpdateCartDocument,
  type CreateOrderAndUserItemsMutationVariables,
} from "@/libs/graphql/generates/graphql";
import { toast } from "sonner";
import { useMutationUpdateCart } from "@/shared/services/tanstack/mutations/cart";
import { execute } from "@/libs/graphql/execute";
import { useCartInfinite } from "@/shared/hooks/useCartInfiniteQuery";

export function FormOrdersSummary({ className, children }: WithlDefaultProps) {
  const method = useFormContext<CartFormProps>();
  const formatter = useFormatter();
  const { watch } = method;
  const { cartItems, cartId, userId } = watch();
  const { invalidate } = useCartInfinite({
    cartId,
    userId,
  });
  const { openDialog, closeDialog } = useDialogGlobal();
  const subtotal = useMemo(
    () =>
      cartItems?.reduce(
        (total, item) =>
          total + (item?.product?.price?.price ?? 0) * (item?.quantity ?? 0),
        0
      ),
    [cartItems]
  );
  const tax = subtotal * 0.07;
  const total = subtotal + tax;
  const createOrdersAndUserItems = useMutationCreateOrdersAndUserItems();

  const handleSubmit = async (form: CartFormProps) => {
    openDialog({
      title: "Proceed to Checkout",
      content: <p>Are you sure you want to proceed with your order? </p>,
      footer: (
        <DialogFooterAction
          onCancel={closeDialog}
          onConfirm={async () => {
            const variables = {
              data: {
                user: { connect: { id: form.userId } },
                items: {
                  create: form.cartItems.map((item) => {
                    return {
                      unitPrice: item.product?.price?.price ?? 0,
                      product: { connect: { id: item.product?.id } },
                      userItem: {
                        create: { user: { connect: { id: form.userId } } },
                      },
                    };
                  }),
                },
              },
            } satisfies CreateOrderAndUserItemsMutationVariables;
            createOrdersAndUserItems.mutate(variables, {
              onSuccess: async ({ data }) => {
                const ResetCart = async () => {
                  await execute(UpdateCartDocument, {
                    where: { id: form.cartId },
                    data: {
                      status: "SAVED",
                      updateAt: new Date().toISOString(),
                      items: {
                        disconnect: form?.cartItems?.map((item) => {
                          return { id: item.id };
                        }),
                      },
                    },
                  });
                };
                await ResetCart();
                invalidate();
                toast.success(<>Order created successfully!</>, {});
                closeDialog();
              },
              onError: (error) => {
                toast.success(<>Failed to create order! {error}</>, {});
                closeDialog();
              },
            });
          }}
        />
      ),
    });
  };
  return (
    <form onSubmit={method.handleSubmit(handleSubmit)} className="contents">
      {children}
    </form>
  );
}
