"use client";

import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import type { Faq, Maybe } from "@/libs/graphql/generates/graphql";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/libs/shadcn/ui/card";
import { Button } from "@/libs/shadcn/ui/button";

import clsx from "clsx";
import { ChevronDownIcon, Plus, Star } from "lucide-react";
import SafeHtml from "@/libs/sanitize-html/SafeHtml";
import DocumentRenderer from "@/libs/keystone/DocumentRenderer";
import CreditIcon from "@/shared/components/CreditIcon";
import { ProductTag } from "./ProductTag";
import _ from "lodash";
import { AddItemButton } from "./AddItem.button";
import { useRouter } from "@navigation";
import type { Session } from "next-auth";
import { useId, useMemo } from "react";
import { MediaProduct } from "./MediasProduct";
import type { Cart, Product } from "@/payload-types";

import { RichText } from "@payloadcms/richtext-lexical/react";
import type { CheckUserProductStatusQuery } from "../shared/types";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/libs/shadcn/ui/collapsible";

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
    const status = userProductStatus;
    return status;
  }, [userProductStatus]);

  // if (!props.faqs) {
  //   return null;
  // }
  return (
    <Card className="h-full duration-300 hover:shadow-lg">
      <CardHeader className="border-b">
        <div className="flex items-start justify-between">
          <div className="grow space-y-3">
            <CardTitle className="text-2xl leading-tight">
              {props.name}
            </CardTitle>

            <ProductTag tags={props.tags} classNames={{ view: "px-0!" }} />
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
        <div className="flex text-4xl font-bold text-blue-600 dark:text-blue-400">
          <CreditIcon className="size-7" />
          {typeof props.price !== "string" &&
            props.price?.price?.toLocaleString()}
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">รายละเอียดสินค้า</h3>
          {props.description && (
            <SafeHtml
              as="p"
              html={props.description}
              className="text-muted-foreground text-sm leading-relaxed break-all"
            />
          )}
        </div>

        {/* <ProductFAQ faqs={props.faqs} /> */}
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
            router.push(
              `/account/${session?.user?.id}/cart/${(session?.user?.carts?.docs?.[0] as Cart).id ?? ""}`
            )
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
    children?: React.ReactNode;
  }
) => {
  const { id, children, ...product } = props;

  return (
    <ContainerSection
      key={id}
      title={`Product`}
      classNames={{
        content: "lg:gap-8  grid   grid-cols-1 xl:grid-cols-5 gap-y-3 grow",
      }}
    >
      
      <ContainerSection className="flex h-full flex-col gap-5 xl:col-span-3">
        <MediaProduct {...product.media!} />
      </ContainerSection>
      <ContainerSection className="top-20 max-xl:sticky xl:col-span-2">
        <ContainerProductMenu key={props.userProductStatus.renderKey} {...props} />
      </ContainerSection>
      {product.details && (
        <ContainerSection
          className="col-span-full h-full duration-300"
          title="Product Details"
        >
          <article className="text-md text-muted-foreground space-y-2 leading-relaxed">
            <RichText data={product.details} key={id} />
          </article>
        </ContainerSection>
      )}
      {children}
    </ContainerSection>
  );
};
