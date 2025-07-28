import { ContentSection } from "@/shared/components/ui/ContentSection";
import { Button } from "@/shared/components/shadcn/button";
import { Link } from "@navigation";
import { ContentProducts } from "./products/components/ContentProducts";

export default function DefaultCotent() {
  return (
    <ContentSection
      title="Our Featured Products"
      description={
        <div className="flex items-center justify-between gap-2">
          <p>
            Explore our curated selection of top-selling and high-quality items.
            Click on any product to learn more or make a purchase.
          </p>
          <Button asChild variant="secondary" className="">
            <Link href={"products"}>Product all</Link>
          </Button>
        </div>
      }
      classNames={{
        content:
          "grid xs:grid-cols-2 gap-5   lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5",
      }}
    >
      <ContentProducts />
    </ContentSection>
  );
}
