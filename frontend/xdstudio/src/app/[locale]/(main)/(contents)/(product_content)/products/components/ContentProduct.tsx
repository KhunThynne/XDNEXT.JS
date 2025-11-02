"use client";

import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import type {
  CheckUserProductStatusQuery,
  Faq,
  Maybe,
  Product,
  Product_Media_Document,
} from "@/libs/graphql/generates/graphql";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/libs/shadcn/ui/card";
import { Button } from "@/libs/shadcn/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import clsx from "clsx";
import { ChevronDownIcon, Plus, Star } from "lucide-react";
import EmblaCarousel from "@/libs/embla-carousel/EmblaCarousel";
import { Separator } from "@/libs/shadcn/ui/separator";
import SafeHtml from "@/libs/sanitize-html/SafeHtml";
import DocumentRenderer from "@/libs/keystone/DocumentRenderer";
import PointDiamon from "@/shared/components/PointDiamod";
import { ProductTag } from "./ProductTag";
import _ from "lodash";
import { AddItemButton } from "./AddItem.button";
import { useRouter } from "@navigation";
import type { Session } from "next-auth";
import { Fragment, useMemo } from "react";
import { MediaDocument } from "./document-render/MediaDocument";

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
const ContainerProductMenu = (
  props: Product & {
    session?: Session | null | undefined;
    userProductStatus: CheckUserProductStatusQuery;
  }
) => {
  const { session, userProductStatus, ...product } = props;
  const router = useRouter();
  const label = useMemo(() => {
    const status = userProductStatus.checkUserProductStatus;
    if (status?.__typename !== "CheckProductSuccess") return null;
    return status;
  }, [userProductStatus]);

  if (!props.faqs) {
    return null;
  }
  return (
    <Card className="h-full duration-300 hover:shadow-lg">
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
                        ? "fill-current text-xd/80"
                        : half
                          ? "fill-current text-xd/20"
                          : "text-gray-300"
                    }`}
                  />
                );
              })}
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              {props.averageScore} / 5.0
            </span>
          </div>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
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
              className="text-sm leading-relaxed break-all text-muted-foreground"
            />
          )}
        </div>

        <ProductFAQ faqs={props.faqs} />
      </CardContent>

      <CardAction className="mt-auto flex w-full items-center justify-end gap-3 overflow-hidden px-5">
        <hr className="grow" />
        <AddItemButton
          product={product}
          session={session}
          status={userProductStatus}
        >
          <Plus className="size-5" />
        </AddItemButton>
        <AddItemButton
          disabled={label?.inUserItem}
          status={userProductStatus}
          product={product}
          session={session}
          variant={"secondary"}
          className={clsx(label?.inUserItem ? `hidden` : "w-20")}
          disableText
          addTo
          onClick={() =>
            router.push(`/account/cart/${session?.user?.carts?.[0]?.id ?? ""}`)
          }
        >
          {label?.inCart ? `go to cart` : "quick buy"}
        </AddItemButton>
      </CardAction>
    </Card>
  );
};

export const ContentProduct = (
  props: Product & {
    session: Session | null | undefined;
    userProductStatus: CheckUserProductStatusQuery;
  }
) => {
  const { id, ...product } = props;
  return (
    <ContainerSection
      title={`Product`}
      classNames={{
        content: "lg:gap-8  grid   grid-cols-1 xl:grid-cols-5 gap-y-3 grow",
      }}
    >
      <ContainerSection className="flex h-full flex-col gap-5 xl:col-span-3">
        <MediaDocument {...product.media!} />
      </ContainerSection>
      <ContainerSection className="top-20 max-xl:sticky xl:col-span-2">
        <ContainerProductMenu {...props} />
      </ContainerSection>
      <ContainerSection
        className="col-span-full h-full duration-300 hover:shadow-lg"
        title="Product Details"
      >
        {product.details && (
          <article className="text-md space-y-2 leading-relaxed text-muted-foreground">
            <DocumentRenderer document={product.details.document} />
          </article>
        )}
      </ContainerSection>
    </ContainerSection>
  );
};
