"use client";
import { CardProduct } from "./ProductCard";
import { useGetProductsQuery } from "../hooks/useGetProductsQuery";
import type { Product } from "@/libs/graphql/generates/graphql";
import { OrderDirection } from "@/libs/graphql/generates/graphql";
import type { Session } from "next-auth";
import _ from "lodash";
import { AlertTriangle, Box } from "lucide-react";
import { Button } from "@/libs/shadcn/ui/button";

export const ContentProducts = ({
  session,
  max = 10,
}: {
  session: Session | null;
  max?: number;
}) => {
  const { data, status, refetch, isFetching } = useGetProductsQuery({
    orderBy: { name: OrderDirection.Asc },
    skip: 0,
    take: 10,
  });

  if (status === "error") {
    return (
      <div className="col-span-full flex max-h-full min-h-100 w-full max-w-full grow flex-col items-center justify-center gap-3 rounded-lg">
        <AlertTriangle className="size-40 stroke-1 opacity-20" />
        <h3 className="">Error data</h3>
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
  }
  if (status === "pending") {
    return Array.from({ length: 5 }).map((_, index) => (
      <CardProduct
        key={index}
        motion={{ preset: "none" }}
        loading
        session={session}
        className="mx-auto animate-pulse duration-300 hover:scale-105 hover:shadow-xl"
      />
    ));
  } else {
    if (_.isEmpty(data?.products)) {
      return (
        <div className="col-span-full flex max-h-full min-h-100 w-full max-w-full grow flex-col items-center justify-center gap-3 rounded-lg">
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
        data.products
          .slice(0, max)
          .map((product, index) => (
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
