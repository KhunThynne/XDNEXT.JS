"use client";
import { Card, CardHeader } from "@/libs/shadcn/ui/card";
import { DatatableCardTransactionPayment } from "./DatatableCardTransactionPayment";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";

export const TransactionCilent = () => {
  return (
    <ContainerSection
      className="flex-4"
      classNames={{ content: "flex flex-col gap-6 max-h-full" }}
    >
      <DatatableCardTransactionPayment />
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
