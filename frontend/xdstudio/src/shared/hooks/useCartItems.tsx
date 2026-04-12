
import { updateTagClient } from "@/shared/utils/m";
import type { Cart, Product } from "@/libs/graphql/generates/graphql";

import {
  useQueryClient,
  useInfiniteQuery,
  keepPreviousData,
  useMutation,
} from "@tanstack/react-query";

import type { User } from "next-auth";
import { createCartItem, deleteCartItem, getCartItems } from "../actions/carts";
import type { CartItem } from "@/payload-types";
const limit = 20;
export const cartQueryFn = (cartId: Cart["id"]) => {
  return {
    params: { limit, depth: 8 },
    initialPageParam: 0,
    queryKey: ["carts", cartId],
  };
};
export const useCartItems = ({
  cartId,
  userId,
}: {
  cartId: Cart["id"];
  userId: User["id"];
}) => {
  const cartQuery = cartQueryFn(cartId);
  const cartItemQueryClient = useQueryClient();
  const queryKey = cartQuery.queryKey;
  const invalidate = () => {
    cartItemQueryClient.invalidateQueries({ queryKey });
    updateTagClient(`${cartId}-${userId}-checkProduct`);
  };
  const iInfiniteQuery = useInfiniteQuery({
    queryKey,
    retry: false,
    queryFn: async ({ pageParam = 0 }) => {
      const result = await getCartItems({
        where: { cart: { equals: cartId } },
        page: pageParam,
        ...cartQuery.params,
      });
      return result;
    },
    enabled: !!cartId,
    initialPageParam: cartQuery.initialPageParam,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.docs.length === limit) {
        return allPages.length * limit;
      }
      return undefined;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
    placeholderData: keepPreviousData,
  });

  const addItem = useMutation({
    mutationFn: async (productId: Product["id"]) => {
      const res = await createCartItem({
        data: {
          cart: cartId,
          product: productId!,
          quantity: 1,
        },
      });
      return res;
    },
    onSuccess: () => {
      invalidate();
    },
    onError: (error) => {
      console.error("Failed to add item to cart", error);
    },
  });

  const removeItem = useMutation({
    mutationFn: async (cartItemId: CartItem["id"]) => {
      await deleteCartItem({
        where: { id: { equals: cartItemId } },
      });
    },
    onSuccess: () => {
      invalidate();
    },
    onError: (error) => {
      console.error("Failed to add item to cart", error);
    },
  });

  return { iInfiniteQuery, invalidate, addItem, removeItem };
};
