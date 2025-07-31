"use client";

import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { CardProduct } from "./ProductCard";
import { useGetProductsQuery } from "../hooks/useGetProductsQuery";
import { OrderDirection, Product } from "@/libs/graphql/generates/graphql";
import { Card, CardContent, CardHeader } from "@/shared/components/shadcn/card";
import { Button } from "@/shared/components/shadcn/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import clsx from "clsx";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import EmblaCarousel from "@/libs/embla-carousel/EmblaCarousel";
import { Separator } from "@/shared/components/shadcn/separator";
const ProductDetail = (props: Product) => {
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
    <Card className="h-full duration-300 hover:shadow-lg">
      <CardHeader className="border-b">
        <h1 className="text-xl font-semibold">{props.name}</h1>
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

const Gallery = () => {
  return (
    <EmblaCarousel className="h-25">
      {/* <div className="min-w-xs h-full border bg-amber-400" />
      <div className="min-w-xs size-40 border" /> */}
      <p className="mx-auto place-self-center text-3xl opacity-30">
        Comming soon ..
      </p>
    </EmblaCarousel>
  );
};

export const ContentProduct = (props: Product) => {
  const { id, ...product } = props;
  return (
    <ContainerSection
      title="Product"
      classNames={{
        content: "lg:gap-6  grid  grid-cols-3 xl:grid-cols-8 gap-y-3 grow",
      }}
    >
      <div
        className="col-span-8 flex h-full flex-col gap-5 xl:col-span-5"
        id="image"
      >
        <div className="flex gap-3 max-lg:flex-col">
          <div className="flex grow flex-col gap-3">
            <div className="relative h-80 rounded-lg border">
              {product.images?.[0]?.src?.url && (
                <Image
                  src={product.images[0].src.url}
                  alt={product.images[0].altText ?? "unknown"}
                  fill
                  className="aspect-video object-contain"
                />
              )}
            </div>
            <Separator />
            <div className="">
              <Gallery />
            </div>
          </div>
          <Card className="lg:w-xs group duration-300 hover:shadow-lg">
            <CardHeader className="text-lg font-semibold">
              Product Info
            </CardHeader>
            <CardContent className="space-y-1 text-sm">
              <p>
                <strong>Name:</strong> {product.name}
              </p>
              {/* <p>
                <strong>Category:</strong> {product.category}
              </p>
              <p>
                <strong>Price:</strong> {product.price}
              </p> */}
              <p>
                <strong>Status:</strong> {product.status}
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="h-full duration-300 hover:shadow-lg">
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
        <ProductDetail {...props} />
      </section>

      <ContainerSection className="col-span-full" title="image">
        zxczxcxzczxcxzcxz
      </ContainerSection>
    </ContainerSection>
  );
};
