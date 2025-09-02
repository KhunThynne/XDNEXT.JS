import { execute } from "@/libs/graphql/execute";
import { GetUserDocument, User } from "@/libs/graphql/generates/graphql";
import { notFound } from "next/navigation";
import PaymentCollapsible from "./components/PreferencesCollapsible";
import { PaymentForm } from "./components/Payment.form";

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
    <PaymentCollapsible>
      <PaymentForm />
    </PaymentCollapsible>
  );
}
