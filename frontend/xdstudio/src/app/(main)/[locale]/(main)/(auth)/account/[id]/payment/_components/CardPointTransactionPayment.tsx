import { Card } from "@/libs/shadcn/ui/card";
import type { Session } from "next-auth";
import { DatatableInfiniteScrollPoitnPayment } from "./DatatableInfiniteScrollPoitnPayment";
import clsx from "clsx";

export const CardPointTransactionPayment = ({
  session,
  className,
}: {
  session: Session;
} & WithClassName) => {
  return (
    <Card className={clsx("grow gap-1 max-xl:min-h-[80vh]", className)}>
      {session && <DatatableInfiniteScrollPoitnPayment session={session} />}
    </Card>
  );
};
