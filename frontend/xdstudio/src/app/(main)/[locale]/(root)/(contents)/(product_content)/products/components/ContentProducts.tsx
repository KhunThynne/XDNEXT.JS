"use client";
import { CardProduct } from "./ProductCard";

import type { Session } from "next-auth";
import _ from "lodash";
import { AlertTriangle, Box } from "lucide-react";
import { Button } from "@/libs/shadcn/ui/button";

import { useGetProductsQuery } from "../hooks/useGetProductsQuery";
import type { Product } from "@/libs/graphql/generates/graphql";

export const ContentProducts = ({
  session,
  max = 10,
}: {
  session: Session | null;
  max?: number;
}) => {

  const { data, status, refetch, isFetching } = useGetProductsQuery({
    limit: 10,
    page: 1,
  });

  // if (!isMounted) return null;
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
        classNames={{ header: "h-35" }}
        loading
        session={session}
        className="mx-auto animate-pulse duration-300 hover:scale-105 hover:shadow-xl"
      />
    ));
  } else {
    
    if (_.isEmpty(data?.Products?.docs)) {
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
        data?.Products &&
        data.Products.docs
          .slice(0, max)
          .map((product, index) => (
            <CardProduct
              session={session}
              key={index}
              classNames={{ header: "h-35" }}
              product={product as Product}
              className="mx-auto duration-300 hover:scale-105 hover:shadow-xl"
            />
          ))
      );
    }
  }
};
