import { Separator } from "@/libs/shadcn/ui/separator";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";

import { auth } from "@/auth";
import PaymentForm from "../_components/PaymentForm";
import { Card } from "@/libs/shadcn/ui/card";

export default async function StripeLayout({
  children,
}: NextJSReactNodes<"stripe">) {
  const session = await auth();

  return (
    <>
      {session && <PaymentForm session={session} />}
      {children}
    </>
  );
}
