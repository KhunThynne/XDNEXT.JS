"use client";

import { useCallback, useState } from "react";
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
import { createHookStore } from "@/libs/zustand/createHookStore";
import { createPaymentIntents } from "../_actions/createPaymentIntents";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(env?.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function CheckoutForm({ session }: { session: Session }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dataStore } = usePaymentStore();
  const clientSecret = dataStore.clientSecret;
  // --- 1. เพิ่ม State สำหรับเก็บ QR Code ---
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!stripe || !elements || !clientSecret) {
        return;
      }

      setIsLoading(true);
      setMessage(null); // เคลียร์ข้อความเก่า
      setQrCodeUrl(null); // เคลียร์ QR Code เก่า

      const res = await stripe.confirmPayment({
        // clientSecret,
        elements,
        // clientSecret,
        redirect: "if_required",
        confirmParams: {
          payment_method_data: {
            billing_details: {
              email: session.user.email,
            },
          },
        },
      });

      const { error, paymentIntent } = res;
      console.log("test", res);
      // --- 3. แก้ไขการจัดการผลลัพธ์ ---
      if (error) {
        if (error.type === "card_error" || error.type === "validation_error") {
          setMessage(error.message ?? "An unexpected error occurred.");
        } else {
          setMessage("An unexpected error occurred.");
        }
      } else if (paymentIntent) {
        // จัดการสถานะของ PaymentIntent
        switch (paymentIntent.status) {
          case "succeeded":
            setMessage("Payment succeeded!");
            break;
          case "processing":
            setMessage("Your payment is processing.");
            break;
          case "requires_payment_method":
            setMessage("Your payment was not successful, please try again.");
            break;
          case "requires_action":
            if (
              paymentIntent.next_action?.type === "promptpay_display_qr_code"
            ) {
              const qrCodeData =
                paymentIntent.next_action?.promptpay_display_qr_code
                  .image_url_svg;
              console.log(qrCodeData);
              if (qrCodeData) {
                setQrCodeUrl(qrCodeData); // หรือ .image_url_svg
                setMessage("Please scan the QR code to complete the payment.");
              } else {
                setMessage("An unexpected step is required.");
              }
            }

            break;
          default:
            setMessage("Something went wrong.");
            break;
        }
      }

      setIsLoading(false);
    },
    [stripe, elements, clientSecret, session.user.email]
  );
  const paymentElementOptions: StripePaymentElementOptions = {
    layout: "accordion",
    fields: { billingDetails: { email: "never" } },
    // defaultValues: {
    //   billingDetails: { email: session.user.email ?? "" },
    // },
  };

  return (
    <div>
      {/* --- 4. แสดง QR Code ถ้ามี --- */}
      {clientSecret}
      {qrCodeUrl ? (
        <div className="qr-code-container text-center">
          <h3>Scan to Pay</h3>
          <img
            src={qrCodeUrl}
            alt="PromptPay QR Code"
            style={{ margin: "20px auto" }}
          />
          {message && <div id="payment-message">{message}</div>}
        </div>
      ) : (
        // ถ้าไม่มี QR Code ก็แสดงฟอร์มปกติ
        <form id="payment-form" onSubmit={handleSubmit} className="space-y-3">
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
          />
          <button disabled={isLoading || !stripe || !elements} id="submit">
            <span id="button-text">
              {isLoading ? (
                <div className="spinner" id="spinner"></div>
              ) : (
                "Pay now"
              )}
            </span>
          </button>
          {/* Show any error messages */}
          {message && <div id="payment-message">{message}</div>}
        </form>
      )}
    </div>
  );
}

export const CardFormSelectMoneyRate = ({
  children,
  session,
}: Partial<WithChildren> & { session: Session }) => {
  const { setData } = usePaymentStore();
  const form = useAppForm({
    defaultValues: {
      point: "",
      email: session.user.email ?? "",
      username: session.user.username ?? "",
    },
    onSubmit: async ({ value }) => {
      const res = await createPaymentIntents({
        amount: Number(value.point) * 100,
      });
      console.log(res);
      if (res.client_secret) {
        setData({ clientSecret: res.client_secret });
      }
    },
  });

  const store = useStore(form.store, (state) => state);
  const nonPersistentIsDirty = store.isDefaultValue;
  return (
    <form
      className="contents"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
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
                    options={[{ value: "500", label: "500 bath" }]}
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
    </form>
  );
};

const MainForm = ({ session }: { session: Session }) => {
  return (
    <>
      <CardFormSelectMoneyRate session={session} />
    </>
  );
};
const usePaymentStore = createHookStore<{ clientSecret: string }>({
  initial: { clientSecret: "" },
});
export default function PaymentForm({ session }: { session: Session }) {
  const { theme } = useTheme();
  const { dataStore } = usePaymentStore();
  const clientSecret = dataStore.clientSecret;
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
      {clientSecret && (
        <Elements
          key={clientSecret}
          stripe={stripePromise}
          options={{ appearance, clientSecret }}
        >
          <CheckoutForm session={session} />
        </Elements>
      )}
    </section>
  );
}
