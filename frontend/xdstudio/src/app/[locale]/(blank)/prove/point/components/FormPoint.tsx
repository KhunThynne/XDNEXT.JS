"use client";
import { Button } from "@/libs/shadcn/ui/button";
import { Form, FormMessage } from "@/libs/shadcn/ui/form";
import { ButtonGrupe } from "@/shared/components/ui";
import { SelectForm } from "@/shared/components/ui/form/SelectForm";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

import {
  FormPointAndChooseMethod,
  TypePointMethodSchema,
} from "./FormPointAndChooseMethod";

export type TypeFormPoint = TypePointMethodSchema;
export const FormPoint = () => {
  const method = useForm<TypeFormPoint>({
    // resolver: zodResolver(SelectPointSchema),
    defaultValues: { point: "" },
  });

  return (
    <Form {...method}>
      <section className="space-y-5">
        <FormPointAndChooseMethod />
      </section>
    </Form>
  );
};
