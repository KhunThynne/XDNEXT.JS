"use client";
import { CardProduct } from "./ProductCard";
import { useGetProductsQuery } from "../hooks/useGetProductsQuery";
import { OrderDirection, Product } from "@/libs/graphql/generates/graphql";
import { Session } from "next-auth";

export const ContentProducts = ({ session }: { session: Session | null }) => {
  const { data, status } = useGetProductsQuery({
    orderBy: { name: OrderDirection.Asc },
    skip: 0,
    take: 10,
  });

  if (status === "success")
    return (
      data.products &&
      data.products.map((product, index) => (
        <CardProduct
          session={session}
          key={index}
          product={product as Product}
          className="mx-auto duration-300 hover:scale-105 hover:shadow-xl"
        />
      ))
    );
};
