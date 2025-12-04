import { auth } from "@/auth";
import { execute } from "@/libs/graphql/execute";
import type {
  GetPointTransactionQueryVariables,
  PointTransactionFieldFragment,
} from "@/libs/graphql/generates/graphql";
import { GetPointTransactionDocument } from "@/libs/graphql/generates/graphql";
import type Stripe from "stripe";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { cacheLife, cacheTag } from "next/cache";
import { DetailPointTransactionForm } from "./_components/DetailPointTransactionForm";
import type { FromTypePointTransactionStripe } from "../../_shared/types/FromTypePointTransactionStripe";
import { getPaymentIntentsRetrieve } from "../../_actions/paymentIntents";
import { notFound } from "next/navigation";
import MenuActionStripe from "./_components/MenuActionStripe";
import _ from "lodash";

const getPointPaymentTransactionCache = async (
  query: GetPointTransactionQueryVariables
) => {
  "use cache";
  cacheLife("default");
  const res = await execute(GetPointTransactionDocument, {
    ...query,
  });
  const pointTransaction = res.data
    .pointTransaction as PointTransactionFieldFragment;
  if (!pointTransaction) {
    return null;
  }
  const metaData = pointTransaction?.metaData as Stripe.PaymentIntent;
  cacheTag(
    `point-transaction-${pointTransaction.id}`,
    `point-transaction-${metaData.id}`
  );
  return { metaData, ...pointTransaction };
};

export default async function StripePage({
  params,
}: {
  params: Promise<{ transactionId: string }>;
}) {
  const { transactionId } = await params;
  const session = await auth();
  if (!transactionId) return null;
  const res = await getPointPaymentTransactionCache({
    where: { id: transactionId },
  });
  if (res && session) {
    const formRes = res as FromTypePointTransactionStripe;

    const reciver = await getPaymentIntentsRetrieve(formRes.metaData.id);

    const form: FromTypePointTransactionStripe = {
      ...formRes,
      metaData: { ...formRes.metaData, ...reciver.data },
    };

    return (
      <ContainerSection
        // title="Payment Details"
        className="grow"
        classNames={{
          // description: "sticky top-0",
          contentContainer:
            "relative xl:overflow-auto h-full overscroll-contain",
          content: "xl:absolute inset-0",
        }}
        description={
          <div className="flex flex-wrap justify-between gap-2">
            <section className="grow">
              <h3 className="text-2xl font-semibold tracking-tight text-primary">
                Payment Details
              </h3>
              <p className="text-muted-foreground">
                Stripe ID: {form?.metaData?.id}
              </p>
            </section>
            <MenuActionStripe
              className="self-end"
              data={form}
              id={form.id}
              paymentIntentId={form.metaData.id}
              articleBt={false}
              status={
                (form.status as Stripe.PaymentIntent.Status) ??
                form.metaData.status ??
                "canceled"
              }
              favoriteBt={!(form.status === "canceled")}
              rejectBt={
                !!(
                  reciver.success &&
                  !reciver.data?.latest_charge &&
                  form.status !== "canceled"
                )
              }
              deleteBt={
                !(form.status !== "succeeded" && form.status !== "canceled")
              }
              session={session}
            />
          </div>
        }
      >
        <DetailPointTransactionForm form={form} />
      </ContainerSection>
    );
  }
  return notFound();
}
