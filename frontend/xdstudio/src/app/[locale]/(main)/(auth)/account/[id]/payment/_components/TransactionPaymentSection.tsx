"use client";
import { Card, CardHeader } from "@/libs/shadcn/ui/card";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { CardPointTransactionPayment } from "./CardPointTransactionPayment";
import type { Session } from "next-auth";
import { useParams, useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";

export const TransactionPaymentSection = ({
  session,
}: {
  session: Session;
}) => {
  // const params = useParams() as { transactionId: string };

  return (
    <ContainerSection
      className={clsx(`flex-3`)}
      classNames={{ content: "flex flex-col gap-6 max-h-full" }}
    >
      <CardPointTransactionPayment session={session!} />
      <section className="flex min-h-40 gap-6 max-xl:order-first">
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
