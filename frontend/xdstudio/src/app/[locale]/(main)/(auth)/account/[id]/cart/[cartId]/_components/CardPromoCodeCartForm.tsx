"use client";
import { Button } from "@/libs/shadcn/ui/button";
import { Card, CardContent, CardHeader } from "@/libs/shadcn/ui/card";

import { InputForm } from "@/shared/components/ui/form/InputForm";

import clsx from "clsx";
import { useFormContext } from "react-hook-form";

export const CardPromoCodeCartForm = ({
  children,
  className,
}: WithlDefaultProps) => {
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
          <p className="text-success">Point to be earned</p>
        </section>
      </CardContent>
      {children}
    </Card>
  );
};
