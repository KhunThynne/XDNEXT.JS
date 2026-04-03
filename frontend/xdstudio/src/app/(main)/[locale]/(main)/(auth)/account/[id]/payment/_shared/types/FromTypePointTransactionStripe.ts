import type { PointTransactionFieldFragment } from "@/libs/graphql/generates/graphql";
import type Stripe from "stripe";

export interface FromTypePointTransactionStripe extends PointTransactionFieldFragment {
  metaData: Stripe.PaymentIntent;
}
