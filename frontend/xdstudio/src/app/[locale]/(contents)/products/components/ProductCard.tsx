"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/shadcn/card";
import { Link } from "@navigation";
import clsx from "clsx";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description?: string;
  price?: number;
  imageUrl?: string;
  href?: string;
}

export const CardProduct = ({
  product,
  className,
  classNames,
}: { product: Product } & GlobalPropsClassNames<
  "containerImage" | "image"
>) => {
  return (
    <Card
      className={clsx(
        "w-70 h-full overflow-auto pt-0 max-sm:w-full",
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
          {product.imageUrl && (
            <Image
              src={product.imageUrl}
              alt={product.name}
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
          {product.description && (
            <div className="h-15 overflow-auto">
              <p className="text-md text-muted-foreground line-clamp-3 break-all text-sm">
                {product.description}
              </p>
            </div>
          )}
        </Link>
      </CardContent>
      <CardFooter className="flex justify-between gap-4">
        {product.price && (
          <p className="text-primary text-md font-bold">
            ฿{product.price.toLocaleString()}
          </p>
        )}
        {/* <Button className="">Add to cart</Button> */}
      </CardFooter>
    </Card>
  );
};
