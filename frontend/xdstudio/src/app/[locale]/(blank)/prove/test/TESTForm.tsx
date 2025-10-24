"use client";
import type { CartFormProps } from "@/app/[locale]/(main)/(auth)/account/cart/[id]/components/cartOrder.type";
import { Button } from "@/libs/shadcn/ui/button";
import { useFormContext, useWatch } from "react-hook-form";

export const TextForm = () => {
  const { watch, setValue, control } = useFormContext<any>();
  const grandTotal = useWatch({ control, name: "grandTotal" });
  return (
    <>
      {watch("grandTotal")}
      <Button
        type="button"
        onClick={() => setValue("grandTotal", watch("grandTotal") + 5)}
      >
        TEst
      </Button>
    </>
  );
};
