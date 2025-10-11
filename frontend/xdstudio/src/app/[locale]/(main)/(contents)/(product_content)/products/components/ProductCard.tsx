"use client";

import type { Product } from "@/libs/graphql/generates/graphql";
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
import { ImageOff } from "lucide-react";
import Image from "next/image";
import { AddItemButton } from "./AddItem.button";
import type { Session } from "next-auth";
import PointDiamon from "@/shared/components/PointDiamod";
import SafeHtml from "@/libs/sanitize-html/SafeHtml";
import { ProductTag } from "./ProductTag";
import { Skeleton } from "@/libs/shadcn/ui/skeleton";
import { Button } from "@/libs/shadcn/ui/button";
import type { MotionTransitionWrapperProps } from "@/shared/components/MotionTransition";
import { MotionTransition } from "@/shared/components/MotionTransition";

export const CardProduct = ({
  product,
  className,
  classNames,

  session,
  footer = true,
  loading = false,
  motion,
}: {
  product?: Product & { href?: string };
  session: Session | null;
  loading?: boolean;

  motion?: Omit<MotionTransitionWrapperProps, "children">;
} & GlobalPropsClassNames<
  | "containerImage"
  | "image"
  | "title"
  | "containerTitle"
  | "header"
  | "content"
  | "containerDetail"
> & { footer?: boolean }) => {
  const href = product?.href ?? `/product/${product?.id}`;
  return (
    <MotionTransition {...motion} animationKey={`${product?.id}`}>
      <Card
        className={clsx(
          "size-full max-w-full gap-y-3 divide-y overflow-auto pt-0",
          className
        )}
      >
        <CardHeader
          className={clsx(
            "bg-primary-foreground inset-shadow-sm inset-shadow-primary/20 dark:bg-accent relative aspect-video rounded-t-xl sm:aspect-auto",
            classNames?.header
          )}
        >
          <div
            className={clsx(
              "aspect-square max-w-32",
              classNames?.containerImage
            )}
          >
            {product?.images?.[0]?.src?.url ? (
              <Image
                src={product.images[0].src.url}
                alt={product.images[0].altText ?? "unknown"}
                fill
                className={clsx("rounded object-contain", classNames?.image)}
              />
            ) : (
              <div className="absolute inset-0 place-content-center place-items-center">
                {loading ? (
                  <Skeleton className="size-full" />
                ) : (
                  <ImageOff className="size-15 opacity-20" />
                )}
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent
          className={clsx(`min-h-30 space-y-2 px-0`, classNames?.content)}
        >
          <section className="space-y-2 px-6">
            {loading ? (
              <div className="flex gap-1.5">
                <Skeleton className="h-5 w-10" />
                <Skeleton className="h-5 w-10" />
                <Skeleton className="h-5 w-10" />
              </div>
            ) : (
              <ProductTag tags={product?.tag} />
            )}

            <Link href={href}>
              <CardTitle
                className={clsx(
                  "min-h-6 text-xl font-semibold",
                  classNames?.containerTitle
                )}
              >
                {loading ? (
                  <Skeleton className="h-4.5 w-12" />
                ) : (
                  <h3
                    className={clsx(`max-w-full truncate`, classNames?.title)}
                  >
                    {product?.name}
                  </h3>
                )}
              </CardTitle>
            </Link>

            {loading
              ? Array.from({ length: 3 }).map((_, i) => {
                  const width = Math.floor(Math.random() * (80 - 40 + 1)) + 180;
                  return (
                    <Skeleton
                      key={i}
                      className={`h-3 max-w-full`}
                      style={{ width: `${width}px` }}
                    />
                  );
                })
              : product?.description && (
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
            <div className="flex min-h-6 w-full items-center justify-between">
              {loading ? (
                <Skeleton className="h-5 w-12" />
              ) : (
                <p className="text-primary text-md flex grow gap-1 truncate font-bold">
                  <PointDiamon />
                  {`${product?.price?.price ?? `Free`}`}
                </p>
              )}

              {loading ? (
                <Skeleton className="h-4 w-10" />
              ) : (
                <small>rating</small>
              )}
            </div>

            {loading ? (
              <Skeleton className="h-9 w-full" />
            ) : (
              <Button size="sm" className="w-full" asChild>
                <Link href={href}>Go to</Link>
              </Button>
            )}
          </CardFooter>
        )}
      </Card>
    </MotionTransition>
  );
};
