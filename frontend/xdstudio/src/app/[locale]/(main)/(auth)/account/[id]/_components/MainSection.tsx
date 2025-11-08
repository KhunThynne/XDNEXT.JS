"use client";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import PurchasedProductsForm from "./PurchasedProducts.form";
import type { Session } from "next-auth";
import { useSelectedLayoutSegment } from "next/navigation";

export const MainSection = ({
  preferences,
  session,
  children,
}: NextJSReactNodes<"preferences"> & { session: Session }) => {
  const segment = useSelectedLayoutSegment();
  if (segment === "payment") return children;
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
};
