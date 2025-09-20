import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { Button } from "@/libs/shadcn/ui/button";
import { Link } from "@navigation";
import { ContentProducts } from "./products/components/ContentProducts";
import clsx from "clsx";
import { auth } from "@/auth";
import { Code, Download } from "lucide-react";
import Notification from "@/shared/components/ui/Notification";
import { SectionPoint } from "@/shared/components/ui/SectionPoint";
import { Card, CardContent } from "@/libs/shadcn/ui/card";
import ContentCard from "@/shared/components/ui/ContentCard";

export default async function PageCotent() {
  const session = await auth();
  return (
    <>
      <ContentCard
        titile={
          <>
            Level Up Your Game with
            <span className="text-primary block">Custom Scripts & Tools</span>
          </>
        }
        description={`Discover premium game scripts, automation tools, and mods
                crafted by expert developers. Enhance your gaming experience
                with our trusted marketplace.`}
      >
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" className="cursor-pointer py-6">
            <Download className="size-4" />
            <h3 className="font-semibold"> Shop Now</h3>
          </Button>
          <Button variant="outline" size="lg" className="cursor-pointer py-6">
            <Code className="size-4" />
            <h3 className="font-semibold"> Explore Tools</h3>
          </Button>
        </div>
      </ContentCard>

      <section className="top-15 z-20 md:sticky">
        <Notification />
      </section>
      <ContainerSection
        title="Our Featured Products"
        description={
          <div className="flex items-center justify-between max-lg:flex-col max-lg:items-end lg:gap-2">
            <p className="max-w-3xl">
              Explore our curated selection of top-selling and high-quality
              items. Click on any product to learn more or make a purchase.
            </p>
            <Button asChild size="sm" variant={"link"}>
              <Link href={"products"}>Product all</Link>
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
        <ContentProducts session={session} />
      </ContainerSection>
    </>
  );
}
