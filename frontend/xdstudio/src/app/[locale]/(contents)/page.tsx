import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { Button } from "@/shared/components/shadcn/button";
import { Link } from "@navigation";
import { ContentProducts } from "./products/components/ContentProducts";
import clsx from "clsx";
export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "th" }];
}
export default function DefaultCotent() {
  return (
    <ContainerSection
      title="Our Featured Products"
      description={
        <div className="flex items-center justify-between max-lg:flex-col max-lg:items-end lg:gap-2">
          <p>
            Explore our curated selection of top-selling and high-quality items.
            Click on any product to learn more or make a purchase.
          </p>
          <Button
            asChild
            variant="secondary"
            className="max-lg:h-5 max-lg:bg-inherit max-lg:shadow-none"
          >
            <Link href={"products"} className="max-lg:underline">
              Product all
            </Link>
          </Button>
        </div>
      }
      classNames={{
        content: clsx(
          "grid  @min-lg:grid-cols-2 @min-3xl:grid-cols-3 @min-5xl:grid-cols-4 @min-7xl:grid-cols-5",
          "gap-5"
        ),
      }}
    >
      <ContentProducts />
    </ContainerSection>
  );
}
