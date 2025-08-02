"use client";

import { Product } from "@/libs/graphql/generates/graphql";
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
import { Diamond, DiamondMinus, ImageOff } from "lucide-react";
import Image from "next/image";

export const CardProduct = ({
  product,
  className,
  classNames,
  footer = true,
}: { product: Product & { href?: string } } & GlobalPropsClassNames<
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
      <CardContent className={clsx(`pb-2`, classNames?.content)}>
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
            className={clsx("h-15 overflow-auto", classNames?.containerDetail)}
          >
            <div className="text-md text-muted-foreground line-clamp-3 break-all text-sm">
              {product.description}
            </div>
          </div>
        )}
      </CardContent>
      {footer && (
        <CardFooter className="flex justify-between gap-4">
          <p className="text-primary text-md flex grow gap-1 truncate font-bold">
            <Diamond className="text-xd size-4 animate-pulse self-center duration-500" />
            {` ${product.price?.price ?? 0}`}
          </p>

          <Button className="" disabled={!product.price?.price}>
            Add to cart
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
