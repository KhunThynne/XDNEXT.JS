import { Button } from "@/shared/components/shadcn/button";
import { Card, CardContent, CardHeader } from "@/shared/components/shadcn/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/components/shadcn/collapsible";
import { ContentSection } from "@/shared/components/ui/ContentSection";
import clsx from "clsx";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";

const ProductDetail = ({ documentId }: { documentId: string }) => {
  const productFAQs = [
    {
      question: "Is this product eco-friendly?",
      answer:
        "This product is made with eco-friendly materials and sustainable practices.",
    },
    {
      question: "Does it come with a warranty?",
      answer: "Warranty included: 1-year full replacement guarantee.",
    },
    {
      question: "Is it available now?",
      answer: "Limited stock available. Order now before it’s gone!",
    },
    {
      question: "Is it certified for quality?",
      answer:
        "This product has been tested and certified to meet international quality standards.",
    },
  ];

  return (
    <Card className="h-full">
      <CardHeader className="border-b">
        <h1 className="text-xl font-semibold">Product ID: {documentId}</h1>
      </CardHeader>
      <CardContent className="space-y-4">
        {productFAQs.map((faq, index) => (
          <Collapsible key={index}>
            <CollapsibleTrigger className="group" asChild>
              <Button variant={"outline"} className="w-full justify-between">
                <span className="text-md font-normal">{faq.question}</span>
                <ChevronDownIcon
                  data-state
                  className="transition-transform group-data-[state=open]:rotate-180"
                />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent forceMount className="group">
              <div
                className={clsx(
                  `p-0 font-extralight opacity-0 transition-all group-data-[state=open]:opacity-100`,
                  `group-data-[state=closed]:h-0 group-data-[state=open]:p-5`
                )}
              >
                {faq.answer}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </CardContent>
    </Card>
  );
};

export default async function PageProduct({
  params,
}: {
  params: Promise<{ locale: string; documentId: string }>;
}) {
  const { documentId, locale } = await params;
  const product = {
    name: "Awesome Product",
    category: "Electronics",
    price: "$199.99",
    status: "In Stock",
  };
  return (
    <ContentSection
      title="Product"
      classNames={{
        content: "lg:gap-6  grid  grid-cols-1 lg:grid-cols-8 gap-y-3 grow",
      }}
    >
      <div className="flex h-full flex-col gap-5 lg:col-span-5" id="image">
        <div className="flex gap-3 max-lg:flex-col">
          <div className="relative aspect-video h-80 rounded-lg border">
            <Image
              alt="Product Image"
              src={"/img/bg.png"}
              fill
              className="object-contain"
            />
          </div>

          <Card className="grow shadow-lg">
            <CardHeader className="text-lg font-semibold">
              Product Info
            </CardHeader>
            <CardContent className="space-y-1 text-sm">
              <p>
                <strong>Name:</strong> {product.name}
              </p>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <p>
                <strong>Price:</strong> {product.price}
              </p>
              <p>
                <strong>Status:</strong> {product.status}
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="h-full">
            <CardHeader className="text-lg font-semibold">
              Product Description
            </CardHeader>
            <CardContent className="text-muted-foreground text-md space-y-2 leading-relaxed">
              <p>
                This digital product is a production-ready source code package
                designed for modern web development. {`It's`} built with
                scalability, speed, and clean architecture in mind.
              </p>
              <p>
                Ideal for developers, startups, or agencies looking to
                accelerate their project delivery using battle-tested tools like
                Next.js and Tailwind CSS.
              </p>
              <p>
                Every line of code is organized, commented, and easy to
                understand — making it perfect for both beginners and seasoned
                engineers.
              </p>
              <p>
                After purchase, you will receive lifetime access to the source
                code, updates, and detailed documentation.
              </p>
              <p>
                Note: This is a digital-only product. No physical item will be
                shipped.
              </p>
              <p className="font-medium">
                License: For personal and commercial use only. Redistribution is
                prohibited.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <section className="col-span-3">
        <ProductDetail documentId={documentId} />
      </section>

      <ContentSection className="col-span-full" title="image">
        zxczxcxzczxcxzcxz
      </ContentSection>
    </ContentSection>
  );
}
