import { auth } from "@/auth";
import { execute } from "@/libs/graphql/execute";
import type {
  GetPointTransactionQueryVariables,
  PointTransactionFieldFragment,
} from "@/libs/graphql/generates/graphql";
import { GetPointTransactionDocument } from "@/libs/graphql/generates/graphql";
import { QrCodePreview } from "../../_components/QrCodePreview";
import type Stripe from "stripe";
import { CardTransactionPointForm } from "./_components/CardTransactionPointForm";
import { CardHeader, CardTitle } from "@/libs/shadcn/ui/card";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { cacheLife, cacheTag } from "next/cache";
import { Link } from "@navigation";

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
    `point-transaction-${metaData.id}`,
    "test-2"
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
    console.log("page", res);
    const metaData = res.metaData as Stripe.PaymentIntent;
    return (
      <>
        <ContainerSection title="Transaction Details">
          <CardTransactionPointForm>
            <CardHeader>
              <CardTitle> Details</CardTitle>
              <div className="relative mx-auto size-60">
                {metaData?.next_action?.promptpay_display_qr_code
                  ?.image_url_svg && (
                  <QrCodePreview
                    image={{
                      src: metaData?.next_action?.promptpay_display_qr_code
                        ?.image_url_svg,
                      alt: metaData.client_secret ?? "unknown",
                    }}
                  />
                )}
              </div>
              {res.status}
            </CardHeader>
          </CardTransactionPointForm>

          {metaData.next_action?.promptpay_display_qr_code?.data && (
            <Link
              href={metaData.next_action?.promptpay_display_qr_code?.data}
              target="_blank"
              rel="noopener noreferrer"
            >
              stipe
            </Link>
          )}
        </ContainerSection>
      </>
    );
  }
}
