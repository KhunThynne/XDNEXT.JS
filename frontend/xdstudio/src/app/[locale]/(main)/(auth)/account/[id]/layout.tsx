import { auth } from "@/auth";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { notFound } from "next/navigation";
import PurchasedProductsForm from "./_components/PurchasedProducts.form";
import { MainSection } from "./_components/MainSection";

export default async function AuthenticationLayout({
  children,
  preferences,
}: NextJSReactNodes<"preferences">) {
  const session = await auth();
  if (!session?.user) return notFound();
  return (
    <MainSection session={session} preferences={preferences}>
      {children}
    </MainSection>
  );
}
