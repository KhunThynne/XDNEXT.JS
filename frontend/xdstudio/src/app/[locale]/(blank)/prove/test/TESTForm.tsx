"use client";

import { Button } from "@/libs/shadcn/ui/button";
import { useFormContext, useFormState, useWatch } from "react-hook-form";

export const TextForm = () => {
  const { watch, setValue, control } = useFormContext<any>();
  const grandTotal = useWatch({ control, name: "grandTotal" });
  const { isDirty } = useFormState({ control });
  return (
    <>
      {watch("grandTotal")}
      {isDirty.toString()}
      <Button
        type="button"
        onClick={() => setValue("grandTotal", watch("grandTotal") + 5)}
      >
        TEst
      </Button>
    </>
  );
};
