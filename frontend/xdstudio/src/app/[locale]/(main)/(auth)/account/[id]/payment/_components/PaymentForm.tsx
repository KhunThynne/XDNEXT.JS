"use client";
import { Button } from "@/libs/shadcn/ui/button";
import { CardAction } from "@/libs/shadcn/ui/card";
import { useAppForm } from "@/libs/shadcn/libs/tanstack-react-form";
import { useStore } from "@tanstack/react-form";
import type { Session } from "next-auth";

import { createPaymentIntents } from "../_actions/paymentIntents";

import { useRouter } from "@navigation";
import { useParams } from "next/navigation";

import _ from "lodash";

import { CardCollapsible } from "@/shared/components/ui/CardCollapsible";
import Translations from "@/libs/i18n/Translations";

import { Spinner } from "@/libs/shadcn/ui/spinner";

import { useQueryClient } from "@tanstack/react-query";

import { updateTagClient } from "@/app/[locale]/(main)/(contents)/(product_content)/products/shared/updateTagClient";
import { useLayoutEffect } from "react";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.

export const FormSelectMoneyRate = ({
  session,
}: Partial<WithChildren> & { session: Session }) => {
  const { stripeId } = useParams() as { locale: string; stripeId: string };
  const queryClient = useQueryClient();
  const router = useRouter();
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
        await updateTagClient(`last-transaction-${session.user.id}`);
        await queryClient.invalidateQueries({ queryKey });

        router.replace(`${res.metadata.pointTransactionId}`);
      }
    },
  });

  useLayoutEffect(() => {
    return () => {
      form.reset();
    };
  }, [form]);
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
                nonPersistentIsDirty ||
                !!stripeId ||
                store.isSubmitting ||
                store.isSubmitSuccessful
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

export const PaymentForm = ({ session }: { session: Session }) => {
  return (
    <section className="">
      {/* <ContentQRCodePreview /> */}
      <FormSelectMoneyRate session={session} />
    </section>
  );
};
