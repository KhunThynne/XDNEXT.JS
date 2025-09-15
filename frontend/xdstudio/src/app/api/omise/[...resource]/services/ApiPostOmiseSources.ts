import { env } from "@/env";
import z from "zod";

export const SourcesSchema = z.object({
  amount: z.number({ message: "amount is requirement" }),
  type: z.enum(["promptpay"]).default("promptpay").optional(),
  currency: z.enum(["THB"]).default("THB").optional(),
});

export type ApiPostOmiseSourcesType = z.infer<typeof SourcesSchema>;

export const ApiPostOmiseSources = async (
  url: string | null,
  arg: ApiPostOmiseSourcesType
) => {
  const validated = await SourcesSchema.parseAsync(arg);
  const response = await fetch(
    `${url ?? env.NEXT_PUBLIC_BASE_URL}/api/omise/sources `,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validated),
    }
  );
  return response;
};
