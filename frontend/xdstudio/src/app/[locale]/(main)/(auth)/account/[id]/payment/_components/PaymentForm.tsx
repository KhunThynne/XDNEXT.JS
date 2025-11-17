"use client";

import { Fragment, useCallback, useEffect, useState } from "react";
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
import { createPaymentIntents } from "../_actions/paymentIntents";
import { createDialog } from "@/libs/dialog/createDialog";
import { DialogFooterAction, useDialogGlobal } from "@/shared/components/ui";
import { useRouter } from "@navigation";
import { useParams } from "next/navigation";
import { usePaymentStore } from "../_stores/usePaymentStore";
import _ from "lodash";
import Image from "next/image";
import { CardCollapsible } from "@/shared/components/ui/CardCollapsible";
import Translations from "@/libs/i18n/Translations";
import Loading, { LoadingDots } from "@/shared/components/ui/Loading";
import { Spinner } from "@/libs/shadcn/ui/spinner";
import { stripe } from "@/libs/stripe/stripe";
import { useQueryClient } from "@tanstack/react-query";
import { QrCodePreview } from "./QrCodePreview";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.

export const FormSelectMoneyRate = ({
  children,
  session,
}: Partial<WithChildren> & { session: Session }) => {
  const { setData } = usePaymentStore();
  const router = useRouter();
  const { stripeId } = useParams() as { locale: string; stripeId: string };
  const queryClient = useQueryClient();

  const form = useAppForm({
    defaultValues: {
      point: "",
      email: session.user.email ?? "",
      username: session.user.username ?? "",
    },
    onSubmit: async ({ value }) => {
      const res = await createPaymentIntents({
        amount: Number(value.point) * 100,
        metadata: { userId: session.user.id },
      });

      if (res && res.client_secret) {
        const queryKey = [`point-transaction-${session.user.id}`];
        await queryClient.invalidateQueries({ queryKey });
        setData({ ...res });
      }
    },
  });

  const store = useStore(form.store, (state) => state);
  const nonPersistentIsDirty = store.isDefaultValue;
  return (
    <CardCollapsible
      defaultOpen={true}
      title="Add Points to Your Account"
      description="Choose a package and complete your payment"
    >
      <form
        className="contents space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <form.AppForm>
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
          <form.AppField
            name="point"
            children={(field) => {
              const items = [
                {
                  value: "100",
                  title: "100 Points",
                  description: "เหมาะสำหรับผู้เริ่มต้น 🪙",
                },
                {
                  value: "500",
                  title: "500 Points",
                  description: "แพ็กเล็กยอดนิยม ✨",
                },
                {
                  value: "1000",
                  title: "1,000 Points",
                  description: "ยอดนิยมสำหรับผู้ใช้ประจำ 💫",
                },
                {
                  value: "5000",
                  title: "5,000 Points",
                  description: "คุ้มค่าสำหรับสายเติมบ่อย ⚡",
                },
                {
                  value: "10000",
                  title: "10,000 Points",
                  description: "แพ็กใหญ่สุด คุ้มค่าระดับโปร 🏆",
                },
              ];
              return (
                <field.RadioGroup
                  disabled={!!stripeId}
                  label="Select Point Package"
                  className="@container"
                  classNames={{
                    group:
                      "grid grid-cols-1 @xs:grid-cols-2 @md:grid-cols-3 @xl:grid-cols-4 gap-2",
                  }}
                  items={items}
                />
              );
            }}
          />
        </form.AppForm>
        <CardAction className="">
          <form.AppForm>
            <Button
              className="cursor-pointer capitalize"
              disabled={
                nonPersistentIsDirty || !!stripeId || store.isSubmitting
              }
            >
              {store.isSubmitting ? (
                <Spinner />
              ) : (
                <Translations text="confirm" namespace={"common"} />
              )}
            </Button>
          </form.AppForm>
        </CardAction>
      </form>

      {/* {children} */}
    </CardCollapsible>
  );
};

const ContentQRCodePreview = () => {
  const { dataStore } = usePaymentStore();
  if (_.isEmpty(dataStore)) return null;

  const { next_action, client_secret } = dataStore;
  return (
    <CardCollapsible
      title="Premium Blend"
      defaultOpen={!!client_secret}
      description="Our signature premium coffee blend"
      cardContent={{
        className: "mx-3 place-content-center rounded-lg bg-secondary p-3",
      }}
    >
      {next_action?.promptpay_display_qr_code?.image_url_svg && (
        <div className="relative mx-auto aspect-square size-40 rounded-xl shadow-lg">
          <QrCodePreview
            image={{
              src: next_action?.promptpay_display_qr_code?.image_url_svg,
              alt: client_secret!,
              fill: true,
            }}
          />
        </div>
      )}
    </CardCollapsible>
  );
};

const MainForm = ({ session }: { session: Session }) => {
  return (
    <section className="">
      <ContentQRCodePreview />
      <FormSelectMoneyRate session={session} />
    </section>
  );
};

export default function PaymentForm({ session }: { session: Session }) {
  return <MainForm session={session} />;
}
