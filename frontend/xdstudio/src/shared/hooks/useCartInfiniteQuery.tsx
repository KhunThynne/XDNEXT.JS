"use client";
import { execute } from "@/libs/graphql/execute";
import {
  Cart,
  Product,
  GetCartDocument,
  CreateCartItemDocument,
} from "@/libs/graphql/generates/graphql";
import {
  useQueryClient,
  useInfiniteQuery,
  keepPreviousData,
  useMutation,
} from "@tanstack/react-query";

import { User } from "next-auth";
const take = 5;

export const useCartInfinite = ({
  cartId,
  productId,
}: {
  cartId: Cart["id"];
  productId?: Product["id"];
  userId: User["id"];
}) => {
  const queryKey = ["cart", cartId];
  const cartQueryClient = useQueryClient();
  const invalidate = () => {
    cartQueryClient.invalidateQueries({ queryKey });
  };
  const query = useInfiniteQuery({
    queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      const result = await execute(GetCartDocument, {
        where: { id: cartId },
        skip: pageParam,
        take,
      });
      return result;
    },
    enabled: !!cartId,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.data?.cart?.items?.length === take) {
        return allPages.length * take; // offset สำหรับ page ต่อไป
      }
      return undefined;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
    placeholderData: keepPreviousData,
  });

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await execute(CreateCartItemDocument, {
        data: {
          cart: { connect: { id: cartId } },
          product: { connect: { id: productId } },
          quantity: 1,
        },
      });
      return res;
    },
    onSuccess: (data) => {
      invalidate();
      console.log("Item added to cart", data);
    },
    onError: (error) => {
      console.error("Failed to add item to cart", error);
    },
  });

  return { query, invalidate, mutation };
};
