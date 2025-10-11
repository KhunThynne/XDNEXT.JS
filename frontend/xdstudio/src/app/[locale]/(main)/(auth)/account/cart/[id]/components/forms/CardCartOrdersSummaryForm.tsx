"use client";

import { Button } from "@/libs/shadcn/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { useFormContext } from "react-hook-form";

import { useMemo } from "react";
import { Link } from "@navigation";
import { Form } from "@/libs/shadcn/ui/form";

import { useFormatter } from "next-intl";
import PointDiamon from "@/shared/components/PointDiamod";
import { ButtonGroup } from "@/shared/components/ui";
import type { CartFormProps } from "../cartOrder.type";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/libs/shadcn/ui/card";
import clsx from "clsx";

export function CardCartOrdersSummaryForm({
  className,
  children,
}: WithlDefaultProps) {
  const method = useFormContext<CartFormProps>();
  const formatter = useFormatter();
  const { watch } = method;
  const { cartItems } = watch();
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

  return (
    <Card className={clsx(className)}>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="flex h-full flex-col gap-4">
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
      </CardContent>
      {children}
    </Card>
  );
}
