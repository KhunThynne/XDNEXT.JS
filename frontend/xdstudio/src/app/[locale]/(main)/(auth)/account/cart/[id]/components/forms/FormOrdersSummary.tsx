"use client";

import { Button } from "@/libs/shadcn/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { useFormContext, useWatch } from "react-hook-form";

import { useCallback, useMemo } from "react";
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
import clsx from "clsx";
import _ from "lodash";
import type { DialogInstanceProps } from "@/libs/dialog/index.type";

export function FormOrdersSummary({ className, children }: WithlDefaultProps) {
  const method = useFormContext<CartFormProps>();
  const formatter = useFormatter();
  const { control } = method;
  const cartItems = useWatch({ control, name: "cartItems" });
  const cartId = useWatch({ control, name: "cartId" });
  const userId = useWatch({ control, name: "userId" });
  const remainingpointPayment = useWatch({
    control,
    name: "remainingpointPayment",
  });

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
  const handleSubmit = useCallback(
    async (form: CartFormProps) => {
      // Dialog for when points are insufficient
      const PointNotEnough = {
        title: "Not Enough Points",
        content: <p>You do not have enough points to complete this order.</p>,
        footer: (
          <>
            <Button onClick={closeDialog}>Ok</Button>
          </>
        ),
      } satisfies DialogInstanceProps;

      // Dialog for confirming the order (when points are sufficient)
      const SuccessDialog = {
        title: "Proceed to Checkout",
        content: <p>Are you sure you want to proceed with your order?</p>,
        footer: (
          <DialogFooterAction
            buttonConfirm={{ className: clsx(``) }}
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
                  // Note: Using toast.success for an error might be a typo.
                  // You might want to use toast.error() here.
                  toast.error(<>Failed to create order! {error.message}</>, {});
                  closeDialog();
                },
              });
            }}
          />
        ),
      } satisfies DialogInstanceProps;

      // Open the corFrect dialog based on the condition
      openDialog(
        _.lt(remainingpointPayment, 0) ? PointNotEnough : SuccessDialog
      );
    },
    [
      closeDialog,
      createOrdersAndUserItems,
      invalidate,
      openDialog,
      remainingpointPayment,
    ]
  );
  return (
    <form onSubmit={method.handleSubmit(handleSubmit)} className="contents">
      {children}
    </form>
  );
}
