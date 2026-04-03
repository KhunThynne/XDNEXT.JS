"use client";
import { Form } from "@/libs/shadcn/ui/form";
import { useForm } from "react-hook-form";

export const CartOrderFormProviderTest = ({
  grandTotal,
  children,
}: {
  grandTotal: number;
} & WithChildren) => {
  const method = useForm<any>({
    defaultValues: {
      grandTotal,
    },
  });
  return <Form {...method}>{children}</Form>;
};
