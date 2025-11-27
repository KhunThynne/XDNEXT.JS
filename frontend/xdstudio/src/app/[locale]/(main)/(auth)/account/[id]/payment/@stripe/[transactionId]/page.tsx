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
import { Button } from "@/libs/shadcn/ui/button";
import { Download, HelpCircle } from "lucide-react";
import type { FromTypePointTransactionStripe } from "../../_shared/types/FromTypePointTransactionStripe";
import { getPaymentIntentsRetrieve } from "../../_actions/paymentIntents";

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
  const metaData = pointTransaction.metaData as Stripe.PaymentIntent;
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
  if (res) {
    const form = res as FromTypePointTransactionStripe;

    const reciver = await getPaymentIntentsRetrieve(form.metaData.id);
    console.log(`test`, reciver);
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
          <div className="flex justify-between">
            <section>
              <h3 className="text-2xl font-semibold tracking-tight text-primary">
                Payment Details
              </h3>
              <p className="text-muted-foreground">
                Transaction ID: #TRX-987654321
              </p>
            </section>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <HelpCircle className="mr-2 h-4 w-4" />
                Support
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Invoice
              </Button>
            </div>
          </div>
        }
      >
        <DetailPointTransactionForm form={form} />
      </ContainerSection>
    );
  }
}
