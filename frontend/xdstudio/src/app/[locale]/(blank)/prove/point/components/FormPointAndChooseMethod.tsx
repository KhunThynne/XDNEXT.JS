"use client";
import { Button } from "@/libs/shadcn/ui/button";
import { Form, FormMessage } from "@/libs/shadcn/ui/form";
import { ButtonGroup } from "@/shared/components/ui";
import type { SelectionFormOptionsType } from "@/shared/components/ui/form/SelectForm";
import {
  SelectForm,
  SelectFormProps,
} from "@/shared/components/ui/form/SelectForm";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import z from "zod";

import type { RadioFormItemsType } from "@/shared/components/ui/form/RadioForm";
import { RadioForm } from "@/shared/components/ui/form/RadioForm";
import { createPaymentQrCode } from "@/shared/services/graphql/restApi/omise";
import { ButtonForm } from "@/shared/components/ui/form/ButtonForm";
import { ZSourcesSchema } from "@/app/api/omise/[...resource]/services/shared/ZSchema";
import _ from "lodash";
import type { TypeFormPoint } from "./FormPointProvider";
import { usePathname, useRouter } from "@navigation";

const PointMethodSchema = z.object({
  method: ZSourcesSchema.shape.type,
  point: z.string().min(1, { message: "กรุณาเลือกแต้ม" }),
});

const className = "dark:bg-input/30 border p-5 rounded-lg max-w-xs";
const methodItem = {
  items: [
    {
      label: "PromptpayQrcode",
      value: "promptpay",
      description:
        "Pay via PromptPay by scanning this QR Code from your banking app",
      classNames: { container: className },
    },
  ],
} satisfies RadioFormItemsType;

const selectOptions = [
  { label: "100", value: "100" },
  { label: "500", value: "500" },
  { label: "1000", value: "1000" },
] satisfies SelectionFormOptionsType;

export type TypePointMethodSchema = z.infer<typeof PointMethodSchema>;
export const FormPointAndChooseMethod = () => {
  const formPoint = useFormContext<TypeFormPoint>();
  const method = useForm({
    resolver: zodResolver(PointMethodSchema),
    defaultValues: {
      method: "promptpay",
      point: "",
    },
  });
  const pathname = usePathname();
  const router = useRouter();
  if (!_.isEmpty(formPoint.watch())) {
    return null;
  }
  return (
    <Form {...method}>
      <form
        className="space-y-5"
        onSubmit={method.handleSubmit(async (form) => {
          const res = await createPaymentQrCode({
            amount: parseInt(form?.point) * 100,
            // Change satang unit to bath
          });
          // const res = await apiOmise.sources.ApiPostOmiseSources(null, {
          //   amount: parseInt(form.point),
          //   type: form?.method,
          // });

          if (res?._attributes.id) {
            router.replace(pathname + `/${res?._attributes.id}`);
          }
          // await new Promise((resolve) => setTimeout(resolve, 2000));
        })}
      >
        <SelectForm
          label="Select your point"
          control={method.control}
          name="point"
          options={selectOptions}
        />
        <RadioForm
          className="max-w-md"
          name="method"
          control={method.control}
          label="Select method"
          defaultValue="s"
          items={methodItem.items}
        />
        <ButtonGroup>
          <ButtonForm type="button" variant={"outline"}>
            Clear
          </ButtonForm>
          <ButtonForm>Next</ButtonForm>
        </ButtonGroup>
      </form>
    </Form>
  );
};
