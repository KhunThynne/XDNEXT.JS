"use client";

import { Button } from "@/libs/shadcn/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { useFormContext } from "react-hook-form";
import { CartFormProps } from "./cartOrder.type";
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

export function CartOrdersSummaryForm() {
  const method = useFormContext<CartFormProps>();
  const formatter = useFormatter();
  const { watch } = method;
  const { cartItems } = watch();
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
  const handleSubmit = async (form: CartFormProps) => {
    openDialog({
      title: "Proceed to Checkout",
      content: <p>Are you sure you want to proceed with your order?</p>,
      footer: (
        <DialogFooterAction
          onCancel={closeDialog}
          onConfirm={() => {
            closeDialog();
          }}
        />
      ),
    });
  };

  return cartItems ? (
    <Form {...method}>
      <form
        onSubmit={method.handleSubmit(handleSubmit)}
        className="flex h-full flex-col gap-4"
      >
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span className="flex gap-1">
            <PointDiamon /> {formatter.number(subtotal)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Tax (7%)</span>
          <span className="flex gap-1">
            <PointDiamon /> {formatter.number(tax)}
          </span>
        </div>
        <Separator />
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span className="flex gap-1">
            <PointDiamon /> {formatter.number(total)}
          </span>
        </div>
        <ButtonGroup className="mt-auto flex-col">
          <Button
            className="mt-4 w-full cursor-pointer"
            disabled={cartItems?.length < 1}
          >
            Proceed to Checkout
          </Button>
          <Button
            variant="secondary"
            className="mt-2 w-full cursor-pointer text-sm"
            asChild
            type="button"
          >
            <Link href={"/products"}>Continue Shopping</Link>
          </Button>
        </ButtonGroup>
      </form>
    </Form>
  ) : (
    <></>
  );
}
