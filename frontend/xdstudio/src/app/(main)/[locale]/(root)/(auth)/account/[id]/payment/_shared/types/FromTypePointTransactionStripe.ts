import type { PointTransactionFieldFragment } from "@/shared/libs/graphql/generates/graphql";
import type Stripe from "stripe";

export interface FromTypePointTransactionStripe extends PointTransactionFieldFragment {
  metaData: Stripe.PaymentIntent;
}
