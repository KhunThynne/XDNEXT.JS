"use client";

import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { CardProduct } from "./ProductCard";
import { useGetProductsQuery } from "../hooks/useGetProductsQuery";
import {
  Faq,
  Maybe,
  OrderDirection,
  Product,
} from "@/libs/graphql/generates/graphql";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/libs/shadcn/ui/card";
import { Button } from "@/libs/shadcn/ui/button";
import { renderToStaticMarkup } from "react-dom/server";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import clsx from "clsx";
import { ChevronDownIcon, Heart, Plus, Star } from "lucide-react";
import Image from "next/image";
import EmblaCarousel from "@/libs/embla-carousel/EmblaCarousel";
import { Separator } from "@/libs/shadcn/ui/separator";
import SafeHtml from "@/libs/sanitize-html/SafeHtml";
import DocumentRenderer from "@/libs/keystone/DocumentRenderer";
import { object } from "zod";
import PointDiamon from "@/shared/components/PointDiamod";
import { Badge } from "@/libs/shadcn/ui/badge";
import { ProductTag } from "./ProductTag";
import _ from "lodash";

export const ProductFAQ = ({ faqs }: { faqs: Maybe<Faq[]> | undefined }) => {
  if (_.isEmpty(faqs) || !faqs) return;
  return (
    <ContainerSection title="FQA" classNames={{ content: "space-y-5" }}>
      {faqs.map((faq, index) => (
        <Collapsible key={index}>
          <CollapsibleTrigger className="group" asChild>
            <Button variant={"outline"} className="w-full justify-between">
              <span className="text-md font-normal">
                <SafeHtml html={faq.question} />
              </span>
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
              <DocumentRenderer document={faq.answer?.document} />
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </ContainerSection>
  );
};
const ProductDetail = (props: Product) => {
  if (!props.faqs) {
    return null;
  }
  return (
    <Card className="h-fit duration-300 hover:shadow-lg">
      <CardHeader className="border-b">
        <div className="flex items-start justify-between">
          <div className="grow space-y-3">
            <CardTitle className="text-2xl leading-tight">
              {props.name}
            </CardTitle>

            <ProductTag tags={props.tag} classNames={{ view: "px-0!" }} />
          </div>
        </div>

        {/* Rating */}
        {_.isNumber(props.averageScore) && (
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => {
                const filled = i + 1 <= Math.floor(props.averageScore!);
                const half = !filled && i < props.averageScore!;
                return (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      filled
                        ? "text-xd/80 fill-current"
                        : half
                          ? "text-xd/20 fill-current"
                          : "text-gray-300"
                    }`}
                  />
                );
              })}
            </div>
            <span className="text-muted-foreground text-sm font-medium">
              {props.averageScore} / 5.0
            </span>
          </div>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Price */}
        <div className="flex text-4xl font-bold text-blue-600 dark:text-blue-400">
          <PointDiamon className="size-7" />
          {props.price?.price?.toLocaleString()}
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">รายละเอียดสินค้า</h3>
          {props.description && (
            <SafeHtml
              as="p"
              html={props.description}
              className="text-muted-foreground break-all text-sm leading-relaxed"
            />
          )}
        </div>

        <div className="flex items-center justify-end gap-3 overflow-hidden pt-4">
          <hr className="grow" />
          <Button
            size={"lg"}
            // onClick={handleAddToCart}
            disabled={props.status === "out-of-stock"}
            className="cursor-pointer"
          >
            <Plus className="mr-2 size-5" />
            เพิ่มลงตะกร้า
          </Button>
          <Button
            size={"lg"}
            variant="secondary"
            // disabled={product.status === "out-of-stock"}
            className="cursor-pointer"
          >
            ซื้อทันที
          </Button>
        </div>

        <ProductFAQ faqs={props.faqs} />
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
        content: "lg:gap-8  grid   grid-cols-1 xl:grid-cols-5 gap-y-3 grow",
      }}
    >
      <div className="flex h-full flex-col gap-5 xl:col-span-3" id="image">
        <div className="flex gap-3 max-lg:flex-col">
          <div className="flex grow flex-col gap-3">
            <div className="relative h-[500px] rounded-lg border">
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
          {/* <Card className="lg:w-xs group duration-300 hover:shadow-lg">
            <CardHeader className="text-lg font-semibold">
              Product Info
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>
                <strong>Name:</strong> {product.name}
              </p>

              <p className="flex gap-1">
                <strong>Price:</strong> <PointDiamon className="size-3!" />{" "}
                {product.price?.price}
              </p>
              <p>
                <strong>Status:</strong> {product.status}
              </p>
            </CardContent>
          </Card> */}
        </div>

        <div>
          <Card className="h-full duration-300 hover:shadow-lg">
            <CardHeader className="text-lg font-semibold">
              Product Details
            </CardHeader>
            <CardContent className="text-muted-foreground text-md space-y-2 leading-relaxed">
              {product.details && (
                <div className="text-muted-foreground text-md space-y-2 leading-relaxed">
                  <DocumentRenderer document={product.details.document} />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <section className="xl:col-span-2">
        <ProductDetail {...props} />
      </section>

      <ContainerSection className="col-span-full" title="image">
        zxczxcxzczxcxzcxz
      </ContainerSection>
    </ContainerSection>
  );
};
