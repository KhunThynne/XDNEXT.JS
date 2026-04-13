// core/cart/hook.ts
"use client";

import {
  useQueryClient,
  useInfiniteQuery,
  useMutation,
} from "@tanstack/react-query";
import { updateTagClient } from "@/shared/utils/m";
import { createCartItem, deleteCartItem, deleteCartItems } from "./action";
import { cartQueries } from "./query";
import type { Cart, Product } from "@/shared/libs/graphql/generates/graphql";
import type { User } from "next-auth";
import type { CartItem } from "@/payload-types";

export const useCartItems = ({
  cartId,
  userId,
}: {
  cartId: Cart["id"];
  userId: User["id"];
}) => {
  const queryClient = useQueryClient();
  const queryOptions = cartQueries.list(cartId);

  const invalidate = () => {
    queryClient.invalidateQueries({ queryKey: queryOptions.queryKey });
    updateTagClient(`${cartId}-${userId}-checkProduct`);
  };

  const iInfiniteQuery = useInfiniteQuery(queryOptions);

  const addItem = useMutation({
    mutationFn: async (productId: Product["id"]) => {
      return await createCartItem({
        data: {
          cart: cartId,
          product: productId,
          quantity: 1,
        },
      });
    },
    onSuccess: invalidate,
    onError: (error) => console.error("Failed to add item", error),
  });

  const removeItem = useMutation({
    mutationFn: async (cartItemId: CartItem["id"]) => {
      await deleteCartItem({
        where: { id: { equals: cartItemId } },
      });
    },
    onSuccess: invalidate,
    onError: (error) => console.error("Failed to remove item", error),
  });

  const removeItems = useMutation({
    mutationFn: async (cartItemIds: CartItem["id"][]) => {
      await deleteCartItems({
        where: { id: { in: cartItemIds } },
      });
    },
    onSuccess: invalidate,
    onError: (error) => console.error("Failed to remove items", error),
  });

  return { iInfiniteQuery, invalidate, addItem, removeItem, removeItems };
};

export const useRemoveCartItem = ({ onSuccess }: { onSuccess?: () => void } = {}) => {
  const mutationDeleteItem = useMutation({
    mutationFn: async (cartItemId: CartItem["id"]) => {
      await deleteCartItem({
        where: { id: { equals: cartItemId } },
      });
    },
    onSuccess,
    onError: (error) => console.error("Failed to remove item", error),
  });

  const mutationDeleteItems = useMutation({
    mutationFn: async (cartItemIds: CartItem["id"][]) => {
      await deleteCartItems({
        where: { id: { in: cartItemIds } },
      });
    },
    onSuccess,
    onError: (error) => console.error("Failed to remove items", error),
  });

  return { mutationDeleteItem, mutationDeleteItems };
};
