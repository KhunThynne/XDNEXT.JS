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
import { Card, CardContent, CardHeader } from "@/libs/shadcn/ui/card";
import clsx from "clsx";

export function FormOrdersSummary({ className, children }: WithlDefaultProps) {
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
  return (
    <form onSubmit={method.handleSubmit(handleSubmit)} className="contents">
      {children}
 
    </form>
  );
}
