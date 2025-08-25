import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { Button } from "@/libs/shadcn/ui/button";
import { Link } from "@navigation";
import { ContentProducts } from "./products/components/ContentProducts";
import clsx from "clsx";
import { auth } from "@/auth";
import { Code, Download } from "lucide-react";
import Notification from "@/shared/components/ui/Notification";
import { SectionPoint } from "@/shared/components/ui/SectionPoint";

export default async function PageCotent() {
  const session = await auth();
  return (
    <>
      <section className="from-primary/10 to-accent/10 order-first rounded bg-gradient-to-br px-4 py-20 max-md:-mx-5 max-md:rounded-t-none">
        <div className="container mx-auto text-center">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-foreground mb-6 text-5xl font-bold leading-tight md:text-6xl">
              Level Up Your Experience with
              <span className="text-primary block">Custom Scripts & Websites</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
              Custom FiveM scripts, automation tools, and websites built for your server. Reliable, secure, and made by professionals.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="cursor-pointer py-6">
                <Download className="size-4" />
                <h3 className="font-semibold"> Shop Now</h3>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="cursor-pointer py-6"
              >
                <Code className="size-4" />
                <h3 className="font-semibold"> Explore Tools</h3>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <SectionPoint />
      </section> */}
      <section className="top-15 z-20 md:sticky">
        {/* <Notification /> */}
      </section>

      <ContainerSection
        title="Product Lastest"
        description={
          <div className="flex items-center justify-between max-lg:flex-col max-lg:items-end lg:gap-2">
            <p className="max-w-3xl">
              New Product & Featured. Check out our latest
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
