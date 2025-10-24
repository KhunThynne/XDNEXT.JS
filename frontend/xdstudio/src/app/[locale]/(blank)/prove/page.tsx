"use client";
import { TextForm } from "./test/TESTForm";

import { FormProvider, useForm } from "react-hook-form";

export default function PageCart() {
  const method = useForm<any>({
    defaultValues: {
      grandTotal: 0,
    },
  });
  return (
    <FormProvider {...method}>
      <TextForm />
    </FormProvider>
  );
}
