"use client";

import { Card, CardContent, CardHeader } from "@/libs/shadcn/ui/card";
import { Button } from "@/libs/shadcn/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { useFormContext } from "react-hook-form";
import { CartOrderFormProps } from "./cartOrder.type";
import { useMemo } from "react";
import { Link } from "@navigation";
import { Form } from "@/libs/shadcn/ui/form";
import { DialogFooterAction, useDialogGlobal } from "./useDialogGlobal";
import { useFormatter } from "next-intl";
import PointDiamon from "@/shared/components/PointDiamod";

export function CartOrdersSummaryForm() {
  const method = useFormContext<CartOrderFormProps>();
  const formatter = useFormatter();
  const { watch } = method;
  const { cartsOrderItem } = watch();
  const { openDialog, closeDialog } = useDialogGlobal();
  const subtotal = useMemo(
    () =>
      cartsOrderItem?.reduce(
        (total, item) =>
          total + (item?.product?.price?.price ?? 0) * (item?.quantity ?? 0),
        0
      ),
    [cartsOrderItem]
  );
  const tax = subtotal * 0.07;
  const total = subtotal + tax;
  const handleSubmit = async (form: CartOrderFormProps) => {
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

  return (
    <Card className="h-fit">
      <CardHeader className="text-lg font-semibold">Order Summary</CardHeader>
      <CardContent>
        {cartsOrderItem ? (
          <Form {...method}>
            <form
              onSubmit={method.handleSubmit(handleSubmit)}
              className="space-y-4"
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
              <Button
                className="mt-4 w-full cursor-pointer"
                disabled={cartsOrderItem?.length < 1}
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
              </Button>{" "}
            </form>
          </Form>
        ) : (
          <></>
        )}
      </CardContent>
    </Card>
  );
}
