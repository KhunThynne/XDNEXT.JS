"use server";

import { execute } from "@/libs/graphql/execute";
import type { PointTransactionFieldFragment } from "@/libs/graphql/generates/graphql";
import { CreatePointTransactionDocument } from "@/libs/graphql/generates/graphql";
import { stripe } from "@/libs/stripe/stripe";
import type Stripe from "stripe";

export const createPaymentIntents = async (
  params: Partial<Stripe.PaymentIntentCreateParams>,
  options?: Stripe.RequestOptions
) => {
  // 🧩 Default configuration
  try {
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
    // create point trancation data
    const transaction = await execute(CreatePointTransactionDocument, {
      data: {
        ...(params?.metadata?.userId
          ? { user: { connect: { id: params.metadata.userId as string } } }
          : {}),
        amount: params.amount,
        status: paymentIntent.status,
        type: "earn",
        metaData: { ...params.metadata, ...paymentIntent },
      },
    });
    console.log(transaction);
    const updatedIntent = await stripe.paymentIntents.update(paymentIntent.id, {
      metadata: {
        ...paymentIntent.metadata,
        test: 5,
        pointTransactionId: (
          transaction?.data
            .createPointTransaction as PointTransactionFieldFragment
        ).id,
      },
    });
    // console.log("test", updatedIntent);
    // const freshIntent = await stripe.paymentIntents.retrieve(paymentIntent.id);
    // console.log("metadata after update:", freshIntent.metadata);
    return { ...updatedIntent };
  } catch (err) {
    console.log(err);
    return false;
  }
};
