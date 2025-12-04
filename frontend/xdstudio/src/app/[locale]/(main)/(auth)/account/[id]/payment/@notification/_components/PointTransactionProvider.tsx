import { notFound } from "next/navigation";
import AlertPointTransaction from "./AlertPointTransaction";
import type { PointTransactionFieldFragment } from "@/libs/graphql/generates/graphql";
import type { FromTypePointTransactionStripe } from "../../_shared/types/FromTypePointTransactionStripe";
import { GetLastTransactionCache } from "../_utils/GetLastTransactionCache";
import NotFoundLastTransaction from "../not-found";

export default async function PointTransactionProvider({
  params,
}: LayoutProps<"/[locale]/account/[id]/payment">) {
  const { id: userId } = await params;
  const res = await GetLastTransactionCache(userId);

  const pointTransaction = res?.data
    ?.pointTransactions?.[0] as PointTransactionFieldFragment;
  if (!pointTransaction) return <NotFoundLastTransaction />;
  return (
    <AlertPointTransaction
      pointTransaction={pointTransaction as FromTypePointTransactionStripe}
    />
  );
}
