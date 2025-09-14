import { execute } from "@/libs/graphql/execute";
import { GetUserDocument } from "@/libs/graphql/generates/graphql";
import { notFound } from "next/navigation";

import { PaymentForm } from "@/shared/components/forms/payment/Payment.form";
import { TabsContent } from "@radix-ui/react-tabs";

export default async function PagePayment({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;
  const res = await execute(GetUserDocument, { where: { id } });
  if (!res.data.user) {
    return notFound();
  }
  return (
    <TabsContent value="payment">
      <PaymentForm />
    </TabsContent>
  );
}
