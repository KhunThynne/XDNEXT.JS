import { ContentSection } from "@/shared/components/ui/ContentSection";
import { ContentProducts } from "./components/ContentProducts";
import { BreadcrumbComponent } from "@/shared/components/ui/breadcrumb";

export default async function PageProducts() {
  return (
    <>
      <BreadcrumbComponent />
      <ContentSection
        title="All Featured Products"
        description="Explore our curated selection of top-selling and high-quality items.
            Click on any product to learn more or make a purchase."
        classNames={{
          content:
            "grid xs:grid-cols-2 gap-5   lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5",
        }}
      >
        <ContentProducts />
      </ContentSection>{" "}
    </>
  );
}
