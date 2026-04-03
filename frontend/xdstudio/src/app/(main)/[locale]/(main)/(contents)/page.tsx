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
import { MotionTransition } from "@/shared/components/MotionTransition";

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
      <MotionTransition>
        <ContentCard
          title={
            <>
              Level Up Your Game with
              <span className="block text-primary">Custom Scripts & Tools</span>
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
              <h3 className="mb-8 text-center text-3xl font-bold text-foreground">
                Browse Categories
              </h3>
              {/* <div className="@min-xs:grid-cols-2 @min-2xl:grid-cols-4 mx-auto grid max-w-screen-xl grid-cols-1 place-content-center gap-3"> */}
              <div className="mx-auto grid max-w-screen-xl place-content-center gap-3 @min-xs:grid-cols-2 @min-2xl:grid-cols-4">
                {categories.map((category, index) => (
                  <Card
                    key={index}
                    className="cursor-pointer justify-center gap-2 border transition-all duration-300 hover:scale-105 hover:shadow-lg max-md:aspect-video"
                  >
                    <CardHeader className="flex flex-col items-center justify-center">
                      <category.icon className="size-8 text-primary" />
                      <h4 className="text-md shrink truncate font-semibold text-foreground">
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
      </MotionTransition>
      {/* <section className="top-15 z-20 md:sticky">
        <Notification />
      </section> */}

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
        classNames={{ ...contentClassName }}
      >
        <ContentProducts session={session} max={5} />
      </ContainerSection>
    </>
  );
}
