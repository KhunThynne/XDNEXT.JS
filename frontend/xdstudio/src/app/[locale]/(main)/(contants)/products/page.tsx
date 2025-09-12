import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { ContentProducts } from "./components/ContentProducts";
import { BreadcrumbComponent } from "@/shared/components/ui/breadcrumb";
import clsx from "clsx";
import { auth } from "@/auth";

export default async function PageProducts() {
  const session = await auth();
  return (
    <>
      <BreadcrumbComponent />
      <ContainerSection
        title="All Featured Products"
        description="Explore our curated selection of top-selling and high-quality items.
            Click on any product to learn more or make a purchase."
        classNames={{
          content: clsx(
            "grid  @min-lg:grid-cols-2 @min-3xl:grid-cols-3 @min-5xl:grid-cols-4 @min-7xl:grid-cols-5",
            "gap-5"
          ),
        }}
      >
        <ContentProducts session={session} />
      </ContainerSection>
    </>
  );
}
