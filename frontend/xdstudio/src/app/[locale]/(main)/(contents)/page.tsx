import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { Button } from "@/libs/shadcn/ui/button";
import { Link } from "@navigation";

import { auth } from "@/auth";
import { Code, Download, Gamepad2, Shield, Zap } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/libs/shadcn/ui/card";

import { Badge } from "@/libs/shadcn/ui/badge";
import { ContentProducts } from "./(product_content)/products/components/ContentProducts";
import { contentClassName } from "./(product_content)/products/shared/contentClassName";
import ContentCard from "@/shared/components/ui/cards/ContentCard";

export default async function PageCotent() {
  const session = await auth();
  const categories = [
    { name: "Automation Scripts", icon: Zap, count: "150+" },
    { name: "Combat Tools", icon: Shield, count: "89+" },
    { name: "Strategy Helpers", icon: Gamepad2, count: "120+" },
    { name: "Custom Mods", icon: Code, count: "200+" },
  ];

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
        <section className="py-6">
          <div className="@container container mx-auto">
            <h3 className="text-foreground mb-8 text-center text-3xl font-bold">
              Browse Categories
            </h3>
            {/* <div className="@min-xs:grid-cols-2 @min-2xl:grid-cols-4 mx-auto grid max-w-screen-xl grid-cols-1 place-content-center gap-3"> */}
            <div className="@min-xs:grid-cols-2 @min-2xl:grid-cols-4 mx-auto grid max-w-screen-xl place-content-center gap-3">
              {categories.map((category, index) => (
                <Card
                  key={index}
                  className="cursor-pointer justify-center gap-2 border transition-all duration-300 hover:scale-105 hover:shadow-lg max-md:aspect-video"
                >
                  <CardHeader className="flex flex-col items-center justify-center">
                    <category.icon className="text-primary size-8" />
                    <h4 className="text-foreground text-md shrink truncate font-semibold">
                      {category.name}
                    </h4>
                  </CardHeader>
                  <CardContent className="space-y-1 text-center">
                    <Badge variant="secondary" className="text-xs">
                      {category.count} items
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ContentCard>

      {/* <section className="top-15 z-20 md:sticky">
        <Notification />
      </section> */}
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
        classNames={{ ...contentClassName }}
      >
        <ContentProducts session={session} max={5} />
      </ContainerSection>
    </>
  );
}
