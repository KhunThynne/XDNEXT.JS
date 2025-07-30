"use client";

import { Product } from "@/libs/graphql/generates/graphql";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/shadcn/card";
import { Link } from "@navigation";
import clsx from "clsx";
import _ from "lodash";
import Image from "next/image";

export const CardProduct = ({
  product,
  className,
  classNames,
}: { product: Product & { href?: string } } & GlobalPropsClassNames<
  | "containerImage"
  | "image"
  | "title"
  | "containerTitle"
  | "header"
  | "content"
  | "containerDetail"
>) => {
  return (
    <Card
      className={clsx(
        "@md:max-w-2xs max-w-2xs size-full overflow-auto pt-0",
        className
      )}
    >
      <CardHeader
        className={clsx(
          "bg-primary-foreground dark:bg-accent relative rounded-t-xl",
          classNames?.header
        )}
      >
        <div
          className={clsx("max-w-45 aspect-square", classNames?.containerImage)}
        >
          {product.images?.[0]?.src?.url && (
            <Image
              src={product.images[0].src.url}
              alt={product.images[0].altText ?? "unknown"}
              fill
              className={clsx("rounded object-contain", classNames?.image)}
            />
          )}
        </div>
      </CardHeader>
      <CardContent className={clsx(classNames?.content)}>
        <Link href={product.href ?? `/products/${product.id}`}>
          <CardTitle
            className={clsx(
              "text-xl font-semibold",
              classNames?.containerTitle
            )}
          >
            <h1 className={clsx(`max-w-full truncate`, classNames?.title)}>
              {product.name}
            </h1>
          </CardTitle>
          {product.details && (
            <div
              className={clsx(
                "h-15 overflow-auto",
                classNames?.containerDetail
              )}
            >
              <p className="text-md text-muted-foreground line-clamp-3 break-all text-sm">
                {product.details}
              </p>
            </div>
          )}
        </Link>
      </CardContent>
      {/* <CardFooter className="flex justify-between gap-4">
        {product.price && (
          <p className="text-primary text-md font-bold">
            ฿{product.price.toLocaleString()}
          </p>
        )}
        <Button className="">Add to cart</Button>
      </CardFooter> */}
    </Card>
  );
};
