"use client";

import { updateTagClient } from "@/shared/utils/m";
import { execute } from "@/libs/graphql/execute";
import type { Cart, Product } from "@/libs/graphql/generates/graphql";

import {
  useQueryClient,
  useInfiniteQuery,
  keepPreviousData,
  useMutation,
} from "@tanstack/react-query";

import type { User } from "next-auth";
import { getCartItems, getCarts } from "../actions/carts";
const take = 40;

export const useCartItemsInfinite = ({
  cartId,
  productId,
  userId,
}: {
  cartId: Cart["id"];
  productId?: Product["id"];
  userId: User["id"];
}) => {
  const queryKey = ["carts", cartId];
  const cartItemQueryClient = useQueryClient();
  const invalidate = () => {
    cartItemQueryClient.invalidateQueries({ queryKey });
    updateTagClient(`${cartId}-${userId}-checkProduct`);
  };
  const query = useInfiniteQuery({
    queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      const result = await getCartItems({
        id: cartId,
        page: pageParam,
        limit: take,
      });
      return result;
    },
    enabled: !!cartId,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.docs.length === take) {
        return allPages.length * take; 
      }
      return undefined;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
    placeholderData: keepPreviousData,
  });

  const mutation = useMutation({
    mutationFn: async () => {
      // const res = await execute(CreateCartItemDocument, {
      //   data: {
      //     cart: { connect: { id: cartId } },
      //     product: { connect: { id: productId } },
      //     quantity: 1,
      //   },
      // });
      // return res;
    },
    onSuccess: (data) => {
      invalidate();
    },
    onError: (error) => {
      console.error("Failed to add item to cart", error);
    },
  });

  return { query, invalidate, mutation };
};
