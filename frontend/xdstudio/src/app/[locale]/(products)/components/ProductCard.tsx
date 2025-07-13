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
  description: string;
  price: number;
  imageUrl?: string;
}

export const CardProduct = ({
  product,
  className,
}: { product: Product } & GlobalPropsClassNames) => {
  return (
    <Card className={clsx("w-full max-w-sm overflow-auto pt-0", className)}>
      <CardHeader className="bg-primary-foreground rounded-t-xl">
        <div className="relative h-60 w-full">
          {product.imageUrl && (
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="aspect-square object-contain"
            />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <Link href={`/product/${product.id}`}>
          <CardTitle className="truncate text-xl font-semibold">
            {product.name}
          </CardTitle>
          <div className="h-15 overflow-auto">
            <p className="text-md text-muted-foreground line-clamp-3 break-all text-sm">
              {product.description}
            </p>
          </div>
        </Link>
      </CardContent>
      <CardFooter className="flex justify-between gap-4">
        <p className="text-primary text-md font-bold">
          ฿{product.price.toLocaleString()}
        </p>
        {/* <Button className="">Add to cart</Button> */}
      </CardFooter>
    </Card>
  );
};
