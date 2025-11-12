import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/libs/stripe/stripe";
import { env } from "@/env";
import type Stripe from "stripe";
import { revalidatePath, revalidateTag } from "next/cache";
import { updatePointPaymentTransaction } from "@/app/[locale]/(main)/(auth)/account/[id]/payment/_actions/pointPaymentTransaction";

export async function POST(req: Request) {
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      await req.text(),
      (await headers()).get("stripe-signature") ?? "",
      env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err: unknown) {
    let errorMessage = "Unknown webhook error";
    const stripeError = (await import("stripe")).default.errors;
    if (err instanceof stripeError.StripeError) {
      errorMessage = `Stripe Error: ${err.message}`;
    } else if (err instanceof Error) {
      errorMessage = err.message;
    }
    if (err) console.log(err);
    console.log(`Error message: ${errorMessage}`);
    return NextResponse.json(
      { message: `Webhook Error: ${errorMessage}` },
      { status: 400 }
    );
  }

  const permittedEvents = ["payment_intent.succeeded"];

  if (permittedEvents.includes(event.type)) {
    let data;

    try {
      switch (event.type) {
        case "payment_intent.succeeded":
          data = event.data.object as Stripe.PaymentIntent;
          console.log(`Payment status: ${JSON.stringify(data.metadata)}`);
          console.log(`Payment status: ${data.status}`);
          const test = await updatePointPaymentTransaction({
            where: { id: data.metadata.pointTransactionId },
            data: { status: data.status, updateAt: new Date().toISOString() },
          });
          console.log(
            test,
            `point-transaction-${data.metadata.pointTransactionId}`
          );
          revalidateTag(
            `point-transaction-${data.metadata.pointTransactionId}`,
            { expire: 0 }
          );

          break;
        default:
          throw new Error(`Unhandled event: ${event.type}`);
      }
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { message: "Webhook handler failed" },
        { status: 500 }
      );
    }
  }
  // Return a response to acknowledge receipt of the event.
  return NextResponse.json({ message: "Received" }, { status: 200 });
}
