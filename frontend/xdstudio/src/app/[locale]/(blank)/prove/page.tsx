"use client";
import { Form } from "@/libs/shadcn/ui/form";
import { TextForm } from "./test/TESTForm";

import { useForm } from "react-hook-form";
import { Button } from "@/libs/shadcn/ui/button";
import { useCallback } from "react";

export default function PageCart() {
  const method = useForm<any>({
    defaultValues: {
      grandTotal: 0,
    },
  });
  const { formState } = method;
  const resetForm = () => method.reset({ grandTotal: 50 });
  return (
    <Form {...method}>
      <article className="flex flex-col">
        <Button onClick={() => method.setValue("grandTotal", 50)}>TEst</Button>

        <Button onClick={resetForm}>Reset</Button>
        {formState.isDirty.toString()}
        <TextForm />
      </article>
    </Form>
  );
}
