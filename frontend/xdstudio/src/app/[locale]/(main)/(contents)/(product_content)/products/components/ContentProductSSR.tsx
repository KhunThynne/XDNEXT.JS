"use client";

import { CardProduct } from "./ProductCard";
import type { Maybe, Product } from "@/libs/graphql/generates/graphql";
import type { Session } from "next-auth";
import _ from "lodash";
import { Box } from "lucide-react";
import { Button } from "@/libs/shadcn/ui/button";
import { useTheme } from "next-themes";

interface ContentProductsProps {
  session: Session | null;
  products: Maybe<Product[]>;
  loading?: boolean;
  max?: number;
  onRefetch?: () => void;
  isFetching?: boolean;
}

export const ContentProductsSSR = ({
  session,
  products,
  loading = false,
  max = 10,
  onRefetch,
  isFetching,
}: ContentProductsProps) => {
  const { theme } = useTheme();
  if (loading) {
    return Array.from({ length: 5 }).map((_, index) => (
      <CardProduct
        key={index}
        loading
        session={session}
        className="mx-auto animate-pulse duration-300 hover:scale-105 hover:shadow-xl"
      />
    ));
  }

  if (_.isEmpty(products)) {
    return (
      <div className="col-span-full flex aspect-video max-h-full w-full grow flex-col items-center justify-center gap-3 rounded-lg">
        <Box className="size-40 stroke-1 opacity-20" />
        <h3>No products available.</h3>
        {onRefetch && (
          <Button
            onClick={onRefetch}
            variant="outline"
            className="cursor-pointer"
            disabled={isFetching}
          >
            Load
          </Button>
        )}
      </div>
    );
  }
  return products!
    .slice(0, max)
    .map((product) => (
      <CardProduct
        session={session}
        key={product.id}
        product={product}
        className="mx-auto duration-300 hover:scale-105 hover:shadow-xl"
      />
    ));
};
