import { Card, CardHeader } from "@/libs/shadcn/ui/card";

import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { auth } from "@/auth";
import { execute } from "@/libs/graphql/execute";
import { getPointPaymentTransaction } from "../_actions/pointPaymentTransaction";
import { CardPointTransactionPayment } from "./CardPointTransactionPayment";

export const TransactionPaymentSection = async () => {
  const test = await getPointPaymentTransaction();
  const session = await auth();
  return (
    <ContainerSection
      className="flex-4"
      classNames={{ content: "flex flex-col gap-6 max-h-full" }}
    >
      <CardPointTransactionPayment session={session!} />
      <section className="flex min-h-40 gap-6">
        <Card className="grow">
          <CardHeader>test</CardHeader>
        </Card>
        <Card className="flex-1">
          <CardHeader>test</CardHeader>
        </Card>
      </section>
    </ContainerSection>
  );
};
