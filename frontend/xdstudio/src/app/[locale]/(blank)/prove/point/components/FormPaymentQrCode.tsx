"use client";
import { Button } from "@/libs/shadcn/ui/button";
import { Form, FormMessage } from "@/libs/shadcn/ui/form";
import { ButtonGrupe } from "@/shared/components/ui";
import {
  SelectForm,
  SelectFormProps,
  SelectionFormOptionsType,
} from "@/shared/components/ui/form/SelectForm";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import z from "zod";

import {
  RadioForm,
  RadioFormItemsType,
} from "@/shared/components/ui/form/RadioForm";
import { createPaymentQrCode } from "@/shared/services/graphql/restApi/omise";
import { ButtonForm } from "@/shared/components/ui/form/ButtonForm";
import { ZSourcesSchema } from "@/app/api/omise/[...resource]/services/shared/ZSchema";
import Image from "next/image";
import _ from "lodash";
import { Card, CardContent } from "@/libs/shadcn/ui/card";
import { useFormatter } from "next-intl";
import { Loader, Loader2, LoaderIcon, Timer } from "lucide-react";
import { CountdownTimer } from "@/shared/components/CountdownTimer";
import { use, useMemo, useState } from "react";
import { TypeFormPoint } from "./FormPointProvider";
import { OmiseChargeResponse } from "@/app/api/omise/[...resource]/services/ApiPostOmiseCharge";

export const FormPaymentQrCode = (
  charges: OmiseChargeResponse["_attributes"]
) => {
  const formPoint = useFormContext<TypeFormPoint>();
  const method = useForm({
    defaultValues: charges,
  });
  const { watch } = method;
  const formater = useFormatter();
  const imgUrl = `${watch("source")?.scannable_code?.image?.download_uri}`;
  const expiresAt = watch("expires_at");
  const countdownMs = useMemo(() => {
    if (expiresAt) {
      const targetTime = new Date(expiresAt).getTime();
      const now = Date.now();
      const diff = targetTime - now;
      return diff > 0 ? diff : 0;
    }
  }, [expiresAt]);
  const [imgLoaded, setImgLoaded] = useState(false);
  if (_.isEmpty(watch())) {
    return null;
  }
  return (
    <Form {...method}>
      <form
        className="relative flex flex-col justify-center gap-y-5"
        onSubmit={method.handleSubmit(async (form) => {
          // const res = await apiOmise.sources.ApiPostOmiseSources(null, {
          //   amount: parseInt(form.point),
          //   type: form?.method,
          // });
          // await new Promise((resolve) => setTimeout(resolve, 2000));
        })}
      >
        <div className="relative h-80 overflow-hidden">
          {!imgLoaded && (
            <Loader className="size-50 mx-auto animate-spin opacity-10" />
          )}
          <Image
            fill
            className="mx-auto h-full w-fit -translate-y-24"
            alt="payment"
            onLoadingComplete={() => setImgLoaded(true)}
            src={imgUrl}
            unoptimized
          />
        </div>
        <section className="absolute bottom-5 w-full text-center">
          <h1 className="font-bold">
            <span className="font-semibold">THB </span> {formater.number(1000)}
          </h1>
          <p className="flex justify-center gap-2">
            <Timer /> {countdownMs && <CountdownTimer count={countdownMs} />}
          </p>
        </section>
      </form>
    </Form>
  );
};
