import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { ContentProducts } from "./components/ContentProducts";
import { BreadcrumbComponent } from "@/shared/components/ui/breadcrumb";
import clsx from "clsx";
import { auth } from "@/auth";
import { contentClassName } from "./shared/contentClassName";

export default async function PageProducts() {
  const session = await auth();
  return (
    <>
      <BreadcrumbComponent />
      <ContainerSection
        title="All Featured Products"
        description="Explore our curated selection of top-selling and high-quality items.
            Click on any product to learn more or make a purchase."
        classNames={contentClassName}
      >
        <ContentProducts session={session} />
      </ContainerSection>
    </>
  );
}
