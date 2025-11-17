import { createHookStore } from "@/libs/zustand/createHookStore";
import type Stripe from "stripe";

export const usePaymentStore = createHookStore<
  Partial<Stripe.Response<Stripe.PaymentIntent>>
>({ initial: {} });
