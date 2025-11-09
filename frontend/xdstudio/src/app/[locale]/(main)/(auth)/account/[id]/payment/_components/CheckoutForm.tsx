"use client";

import { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import type {
  Appearance,
  StripePaymentElementOptions,
} from "@stripe/stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { env } from "@/env";
import { useTheme } from "next-themes";
import { Button } from "@/libs/shadcn/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/libs/shadcn/ui/card";
import { useAppForm } from "@/libs/shadcn/libs/tanstack-react-form";
import { useStore } from "@tanstack/react-form";
import type { Session } from "next-auth";
import { Separator } from "@/libs/shadcn/ui/separator";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(env?.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/success",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error?.message ?? "");
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: "accordion",
    fields: { billingDetails: { email: "auto" } },
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="space-y-3">
      <PaymentElement
        id="payment-element"
        options={paymentElementOptions}
        className=""
      />
      <Button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </Button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}

export const CardFormSelectMoneyRate = ({
  children,
  session,
}: Partial<WithChildren> & { session: Session }) => {
  const form = useAppForm({
    defaultValues: {
      point: "",
      email: session.user.email ?? "",
      username: session.user.username ?? "",
    },
  });

  const store = useStore(form.store, (state) => state);
  const nonPersistentIsDirty = store.isDefaultValue;
  return (
    <Card>
      <CardHeader>
        <CardTitle> Add Points to Your Account </CardTitle>
        <CardDescription>
          Choose a package and complete your payment
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <form.AppForm>
          <form.AppField
            name="point"
            children={(field) => {
              return (
                <field.Select
                  placeholder="Choose a package"
                  label="Select Point Package"
                  classNames={{ selectTriger: "max-w-50" }}
                  options={[{ value: 500, label: "500 bath" }]}
                />
              );
            }}
          />
          <Separator />
          <section className="flex gap-3">
            <form.AppField
              name="username"
              children={(field) => {
                return (
                  <field.Input className="flex-1" disabled label="Username" />
                );
              }}
            />
            <form.AppField
              name="email"
              children={(field) => {
                return (
                  <field.Input className="flex-2" disabled label="Email" />
                );
              }}
            />
          </section>
        </form.AppForm>
        <CardAction>
          <form.AppForm>
            <Button disabled={nonPersistentIsDirty}>ตกลง</Button>
          </form.AppForm>
        </CardAction>
      </CardContent>

      {children}
    </Card>
  );
};

const MainForm = ({ session }: { session: Session }) => {
  return (
    <>
      <CardFormSelectMoneyRate session={session} />
    </>
  );
};
export default function PaymentForm({
  clientSecret,
  session,
}: {
  clientSecret: string;
  session: Session;
}) {
  const { theme } = useTheme();
  const appearance: Appearance = {
    variables: {
      colorBackground: theme === "dark" ? "#171717 " : ``,
      borderRadius: "0.6rem",
    },

    theme: theme === "dark" ? "night" : "stripe",
  };
  return (
    <section className="max-w-lg space-y-4">
      <MainForm session={session} />
      <Elements stripe={stripePromise} options={{ appearance, clientSecret }}>
        <CheckoutForm />
      </Elements>
    </section>
  );
}
