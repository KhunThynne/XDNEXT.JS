import { Button } from "@/libs/shadcn/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/libs/shadcn/ui/card";
import { updatePointPaymentTransaction } from "../_actions/pointPaymentTransaction";
import type { Session } from "next-auth";
import { DatatableInfiniteScrollPoitnPayment } from "./DatatableInfiniteScrollPoitnPayment";

export const CardPointTransactionPayment = ({
  session,
}: {
  session: Session;
}) => {
  return (
    <Card className="grow max-xl:min-h-[80vh]">
      <CardHeader>
        {/* <Button onClick={updatePointPaymentTransaction}>test</Button> */}
        <CardTitle>Transaction Pointer</CardTitle>
        <CardDescription>test</CardDescription>
      </CardHeader>
      <CardContent className="relative h-full">
        {session && <DatatableInfiniteScrollPoitnPayment session={session} />}
      </CardContent>
    </Card>
  );
};
