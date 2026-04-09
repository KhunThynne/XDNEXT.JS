"use client";

import { updateTagClient } from "@/shared/utils/m";
import { execute } from "@/libs/graphql/execute";
import type { Cart, Product } from "@/libs/graphql/generates/graphql";
import {
  GetCartDocument,
  CreateCartItemDocument,
} from "@/libs/graphql/generates/graphql";
import {
  useQueryClient,
  useInfiniteQuery,
  keepPreviousData,
  useMutation,
} from "@tanstack/react-query";

import type { User } from "next-auth";
import { getCarts } from "../actions/carts";
const take = 40;

export const useCartInfinite = ({
  cartId,
  productId,
  userId,
}: {
  cartId: Cart["id"];
  productId?: Product["id"];
  userId: User["id"];
}) => {
  const queryKey = ["cart", cartId];
  const cartQueryClient = useQueryClient();
  const invalidate = () => {
    cartQueryClient.invalidateQueries({ queryKey });
    updateTagClient(`${cartId}-${userId}-checkProduct`);
  };
  const query = useInfiniteQuery({
    queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      const result = await getCarts({id: cartId, page: pageParam, limit: take});
      // const result = await execute(GetCartDocument, {
      //   where: { id: cartId },
      //   skip: pageParam * take,
      //   take,
      //   // orderBy: { createdAt: OrderDirection.Desc },
      // });
      console.log('ssss',result)
      return result;
    },
    enabled: !!cartId,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      // if (lastPage.data?.cart?.items?.length === take) {
      //   return allPages.length * take; // offset สำหรับ page ต่อไป
      // }
      return undefined;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
    placeholderData: keepPreviousData,
  });

 

  return { query, invalidate };
};
