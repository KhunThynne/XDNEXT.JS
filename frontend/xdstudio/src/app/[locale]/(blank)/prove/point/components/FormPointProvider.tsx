"use client";
import { Button } from "@/libs/shadcn/ui/button";
import { Form, FormMessage } from "@/libs/shadcn/ui/form";
import { ButtonGroup } from "@/shared/components/ui";
import { SelectForm } from "@/shared/components/ui/form/SelectForm";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

import {
  FormPointAndChooseMethod,
  TypePointMethodSchema,
} from "./FormPointAndChooseMethod";
import { OmiseChargeResponse } from "@/app/api/omise/[...resource]/services/ApiPostOmiseCharge";
import { FormPaymentQrCode } from "./FormPaymentQrCode";

export type TypeFormPoint = OmiseChargeResponse;
export const FormPointProvider = ({ children }: WithChildren) => {
  const method = useForm<TypeFormPoint>({
    // resolver: zodResolver(SelectPointSchema),
  });
  return (
    <Form {...method}>
      <section className="space-y-5">{children}</section>
    </Form>
  );
};
