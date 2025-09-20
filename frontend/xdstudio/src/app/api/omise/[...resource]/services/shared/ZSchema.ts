import z from "zod";

export const ZCurrencySchema = z.enum(["THB"]).default("THB");
export const ZChargeSchema = z.object({
  amount: z.number({ message: "amount is required" }),
  currency: ZCurrencySchema.optional(),
  source: z.string({ message: "source_id is required" }),
});

export const ZSourcesSchema = z.object({
  amount: z.number({ message: "amount is requirement" }),
  type: z.enum(["promptpay"]).default("promptpay").optional(),
  currency: ZCurrencySchema.optional(),
});
