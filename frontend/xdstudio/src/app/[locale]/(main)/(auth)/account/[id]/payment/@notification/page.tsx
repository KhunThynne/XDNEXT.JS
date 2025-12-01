import { GetLastTransactionCache } from "./_utils/GetLastTransactionCache";
import type { PointTransactionFieldFragment } from "@/libs/graphql/generates/graphql";
import AlertPointTransaction from "./_components/AlertPointTransaction";
import type { FromTypePointTransactionStripe } from "../_shared/types/FromTypePointTransactionStripe";
import { notFound } from "next/navigation";

export default async function NotificationPage({
  params,
}: PageProps<"/[locale]/account/[id]/payment">) {
  const { id: userId } = await params;
  const res = await GetLastTransactionCache(userId);
  const pointTransaction = res.data
    .pointTransactions?.[0] as PointTransactionFieldFragment;
  if (!pointTransaction) return notFound();
  return (
    <>
      <AlertPointTransaction
        key={pointTransaction.id}
        pointTransaction={pointTransaction as FromTypePointTransactionStripe}
      />
    </>
  );
}
