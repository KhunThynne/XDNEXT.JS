"use client";
import { Form } from "@/libs/shadcn/ui/form";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "@/libs/shadcn/ui/card";

export const CardOrderPointForm = ({
  children,
  className,
}: WithlDefaultProps) => {
  const method = useForm();
  return (
    <Form {...method}>
      <Card className={className}>
        <CardContent>{children}</CardContent>
      </Card>
    </Form>
  );
};
