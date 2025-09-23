"use client";
import { CardProduct } from "./ProductCard";
import { useGetProductsQuery } from "../hooks/useGetProductsQuery";
import { OrderDirection, Product } from "@/libs/graphql/generates/graphql";
import { Session } from "next-auth";
import _ from "lodash";
import { Box } from "lucide-react";
import { Button } from "@/libs/shadcn/ui/button";

export const ContentProducts = ({ session }: { session: Session | null }) => {
  const { data, status, refetch, isFetching } = useGetProductsQuery({
    orderBy: { name: OrderDirection.Asc },
    skip: 0,
    take: 10,
  });
  if (status === "pending") {
    return Array.from({ length: 5 }).map((_, index) => (
      <CardProduct
        key={index}
        loading
        session={session}
        className="mx-auto animate-pulse duration-300 hover:scale-105 hover:shadow-xl"
      />
    ));
  } else {
    if (_.isEmpty(data?.products)) {
      return (
        <div className="max-h-100 col-span-full flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-lg border">
          <Box className="size-40 stroke-1 opacity-20" />
          <h3 className="">No products available.</h3>
          <Button
            onClick={() => refetch()}
            variant={"outline"}
            className="cursor-pointer"
            disabled={isFetching}
          >
            Load
          </Button>
        </div>
      );
    } else {
      return (
        data?.products &&
        data.products.map((product, index) => (
          <CardProduct
            session={session}
            key={index}
            product={product as Product}
            className="mx-auto duration-300 hover:scale-105 hover:shadow-xl"
          />
        ))
      );
    }
  }
};
