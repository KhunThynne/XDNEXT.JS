"use server";
import { stripe } from "@/libs/stripe/stripe";
import type Stripe from "stripe";

export const createPaymentIntents = async (
  params: Partial<Stripe.PaymentIntentCreateParams>,
  options?: Stripe.RequestOptions
) => {
  // 🧩 Default configuration
  const defaultConfig: Stripe.PaymentIntentCreateParams = {
    amount: 500,
    currency: "thb",
    confirm: true,
    payment_method_data: {
      type: "promptpay",
      billing_details: {
        email: "example@email.com",
      },
    },
    payment_method_types: ["promptpay"],
  };

  const mergedConfig: Stripe.PaymentIntentCreateParams = {
    ...defaultConfig,
    ...params,
  };

  const paymentIntent = await stripe.paymentIntents.create(
    mergedConfig,
    options
  );
  return { ...paymentIntent };
};
