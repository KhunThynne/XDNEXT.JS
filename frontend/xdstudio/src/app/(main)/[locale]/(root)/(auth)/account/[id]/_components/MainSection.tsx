"use client";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import PurchasedProductsForm from "./PurchasedProducts.form";
import type { Session } from "next-auth";
import { useSelectedLayoutSegment } from "next/navigation";
import { Separator } from "@/libs/shadcn/ui/separator";

export const MainSection = ({
  preferences,
  session,
  children,
}: NextJSReactNodes<"preferences"> & { session: Session }) => {
  const segment = useSelectedLayoutSegment();
  if (segment === "payment" || segment === "cart") return children;
  return (
    <>
      {children}
      <div className="mx-5 flex h-full flex-wrap gap-6 max-lg:flex-col">
        <ContainerSection
          className="@container relative h-full flex-2 max-lg:max-h-[80vh]"
          title="Purchased Products"
          description="These are the products you have successfully purchased and activated."
        >
          {session?.user && <PurchasedProductsForm session={session} />}
        </ContainerSection>
        <Separator orientation="vertical" className="max-xl:hidden" />
        {preferences}
      </div>
    </>
  );
};
