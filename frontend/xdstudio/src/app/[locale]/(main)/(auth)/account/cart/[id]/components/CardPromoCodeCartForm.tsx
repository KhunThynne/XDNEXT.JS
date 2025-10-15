"use client";
import { Button } from "@/libs/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/libs/shadcn/ui/card";
import { Form } from "@/libs/shadcn/ui/form";
import { Separator } from "@/libs/shadcn/ui/separator";
import { InputForm } from "@/shared/components/ui/form/InputForm";
import { CartSummary } from "@/shared/components/ui/shopping/CartShopping.form";
import clsx from "clsx";
import { useForm, useFormContext } from "react-hook-form";

export const CardPromoCodeCartForm = ({
  children,
  className,
}: WithlDefaultProps) => {
  const methodMain = useFormContext();

  return (
    <Card className={clsx(className)}>
      <CardHeader>
        <section className="flex gap-3">
          <InputForm
            name=""
            className="grow"
            placeholder="Promo Code"
            maxLength={50}
          />
          <Button>Apply</Button>
        </section>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between">
          <span>Discount</span>
          <span>0 </span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>0 </span>
        </div>
        <div className="border border-dashed" />
        <section>
          <h2>1000</h2>
          <p className="text-green-500">Point to be earned</p>
        </section>
      </CardContent>
      {children}
    </Card>
  );
};
