import { GetLastTransactionCache } from "./_utils/GetLastTransactionCache";
import type { PointTransactionFieldFragment } from "@/libs/graphql/generates/graphql";
import { ItemContent } from "@/libs/shadcn/ui/item";
import { AlertPointTransaction } from "./_components/AlertPointTransaction";
import type { FromTypePointTransactionStripe } from "../_shared/types/FromTypePointTransactionStripe";

export default async function NotificationPage({
  params,
}: PageProps<"/[locale]/account/[id]/payment">) {
  const { id: userId } = await params;
  const res = await GetLastTransactionCache(userId);
  const pointTransaction = res.data
    .pointTransactions?.[0] as PointTransactionFieldFragment;
  if (pointTransaction)
    return (
      <ItemContent className="mt-auto flex grow flex-col gap-1">
        <AlertPointTransaction
          pointTransaction={pointTransaction as FromTypePointTransactionStripe}
        />
      </ItemContent>
    );
}
