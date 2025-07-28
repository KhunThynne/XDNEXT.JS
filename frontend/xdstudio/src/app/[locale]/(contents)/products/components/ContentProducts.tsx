"use client";

import { ContentSection } from "@/shared/components/ui/ContentSection";
import { CardProduct } from "./ProductCard";
import { useGetProductsQuery } from "../hooks/useGetProductsQuery";
import { OrderDirection, Product } from "@/libs/graphql/generates/graphql";

export const ContentProducts = () => {
  const { data, status } = useGetProductsQuery({
    orderBy: { name: OrderDirection.Asc },
    skip: 0,
    take: 10,
  });
  console.log(data);
  if (status === "success")
    return (
      data.products &&
      data.products.map((product, index) => (
        <CardProduct
          key={index}
          product={product as Product}
          className="mx-auto duration-300 hover:scale-105 hover:shadow-xl"
        />
      ))
    );
};
