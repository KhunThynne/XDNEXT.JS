"use server";
import { stripe } from "@/libs/stripe/stripe";

export const createPaymentIntents = async ({ amount }: { amount: number }) => {
  const res = await stripe.paymentIntents.create({
    amount,
    currency: "thb",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    // automatic_payment_methods: {
    //   enabled: true,
    // },
    payment_method_types: ["promptpay"],
  });
  return { ...res };
};


