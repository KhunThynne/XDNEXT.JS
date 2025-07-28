"use client";

import { Product } from "@/libs/graphql/generates/graphql";
import {
  Card,
  CardContent,
  CardFooter,
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
  "containerImage" | "image"
>) => {
  return (
    <Card
      className={clsx(
        "@md:max-w-2xs max-w-2xs size-full overflow-auto pt-0",
        className
      )}
    >
      <CardHeader className="bg-primary-foreground rounded-t-xl p-3">
        <div
          className={clsx(
            "relative aspect-square max-h-40 w-full",
            classNames?.containerImage
          )}
        >
          {product.images?.[0]?.src?.url && (
            <Image
              src={product.images[0].src.url}
              alt={product.images[0].altText ?? "unknown"}
              fill
              className={clsx("object-contain", classNames?.image)}
            />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <Link href={product.href ?? `/products/${product.id}`}>
          <CardTitle className="truncate text-xl font-semibold">
            {product.name}
          </CardTitle>
          {product.details && (
            <div className="h-15 overflow-auto">
              <p className="text-md text-muted-foreground line-clamp-3 break-all text-sm">
                {product.details}
              </p>
            </div>
          )}
        </Link>
      </CardContent>
      <CardFooter className="flex justify-between gap-4">
        {/* {product.price && (
          <p className="text-primary text-md font-bold">
            ฿{product.price.toLocaleString()}
          </p>
        )} */}
        {/* <Button className="">Add to cart</Button> */}
      </CardFooter>
    </Card>
  );
};
