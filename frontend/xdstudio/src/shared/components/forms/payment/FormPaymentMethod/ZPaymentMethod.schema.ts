import z from "zod";

export const ZPaymentMethodSchema = z.object({
  paymentMethod: z.enum(["promptpay", "banking"]),
});

export type PaymentMethodType = z.infer<typeof ZPaymentMethodSchema>;
