"use client";

import { Maybe, Product, Tag } from "@/libs/graphql/generates/graphql";
import DocumentRenderer from "@/libs/keystone/DocumentRenderer";
import { Button } from "@/libs/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/libs/shadcn/ui/card";
import { Link } from "@navigation";
import clsx from "clsx";
import _ from "lodash";
import { CircleDollarSign, ImageOff } from "lucide-react";
import Image from "next/image";
import { Session } from "next-auth";
import SafeHtml from "@/libs/sanitize-html/SafeHtml";
import { ProductTag } from "./ProductTag";
import { DetailsButton } from "./Detail.button";

export const CardProduct = ({
  product,
  className,
  classNames,
  session,
  footer = true,
}: {
  product: Product & { href?: string };
  session: Session | null;
} & GlobalPropsClassNames<
  | "containerImage"
  | "image"
  | "title"
  | "containerTitle"
  | "header"
  | "content"
  | "containerDetail"
> & { footer?: boolean }) => {
  return (
    <Card
      className={clsx(
        "@md:max-w-2xs size-full max-w-full gap-y-3 divide-y overflow-auto pt-0",
        className
      )}
    >
      <CardHeader
        className={clsx(
          "bg-primary-foreground inset-shadow-sm inset-shadow-primary/20 dark:bg-accent relative rounded-t-xl",
          classNames?.header
        )}
      >
        <div
          className={clsx("aspect-square max-w-32", classNames?.containerImage)}
        >
          {product.images?.[0]?.src?.url ? (
            <Image
              src={product.images[0].src.url}
              alt={product.images[0].altText ?? "unknown"}
              fill
              className={clsx("rounded object-contain", classNames?.image)}
            />
          ) : (
            <div className="absolute inset-0 place-content-center place-items-center">
              <ImageOff className="size-15 opacity-20" />
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent
        className={clsx(`min-h-30 space-y-2 px-0`, classNames?.content)}
      >
        <ProductTag tags={product.tag} />
        <section className="space-y-2 px-6">
          <Link href={product.href ?? `/products/${product.id}`}>
            <CardTitle
              className={clsx(
                "text-xl font-semibold",
                classNames?.containerTitle
              )}
            >
              <h3 className={clsx(`max-w-full truncate`, classNames?.title)}>
                {product.name}
              </h3>
            </CardTitle>
          </Link>
          {product.description && (
            <div
              className={clsx(
                "h-full overflow-auto",
                classNames?.containerDetail
              )}
            >
              <SafeHtml
                className={clsx(
                  "text-md text-muted-foreground break-all text-sm",
                  _.isEmpty(product.tag) ? "line-clamp-4" : "line-clamp-3"
                )}
                html={product.description}
              />
            </div>
          )}
        </section>
      </CardContent>
      {footer && (
        <CardFooter className="flex-col justify-end gap-6">
          <div className="flex w-full items-center justify-between">
            <p className="text-primary text-md flex grow gap-1 truncate font-bold">
              <CircleDollarSign />
              {` ${product.price?.price ?? `Free`}`}
            </p>
            <small>rating</small>
          </div>

          <DetailsButton
            session={session}
            productId={product?.id}
            className="w-full cursor-pointer"
            disabled={!product.price?.price}
          />
        </CardFooter>
      )}
    </Card>
  );
};
