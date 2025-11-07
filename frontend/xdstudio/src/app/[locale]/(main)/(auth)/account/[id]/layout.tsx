import { auth } from "@/auth";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { notFound } from "next/navigation";
import PurchasedProductsForm from "./components/PurchasedProducts.form";

export default async function AuthenticationLayout({
  children,
  preferences,
}: NextJSReactNodes<"preferences" | "productPreferences">) {
  const session = await auth();
  if (!session?.user) return notFound();
  return (
    <>
      <div className="mx-5 flex h-full flex-wrap gap-6 max-lg:flex-col">
        <ContainerSection
          className="@container relative h-full flex-2 max-lg:max-h-[80vh]"
          title="Purchased Products"
          description="These are the products you have successfully purchased and activated."
        >
          {session?.user && <PurchasedProductsForm session={session} />}
        </ContainerSection>
        {preferences}
      </div>
      {children}
    </>
  );
}
