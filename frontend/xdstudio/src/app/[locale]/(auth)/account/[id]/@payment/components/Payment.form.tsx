"use client";

import { Form } from "@/libs/shadcn/ui/form";
import { useForm } from "react-hook-form";

export const PaymentForm = () => {
  const method = useForm();

  return (
    <Form {...method}>
      <form>xxx</form>
    </Form>
  );
};
