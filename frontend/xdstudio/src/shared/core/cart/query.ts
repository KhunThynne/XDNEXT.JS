// core/cart/query.ts
import { infiniteQueryOptions } from "@tanstack/react-query";
import { getCartItems } from "./action";
import type { Cart } from "@/shared/libs/graphql/generates/graphql";

const LIMIT = 20;

export const cartQueries = {
  all: () => ["carts"] as const,
  list: (cartId: Cart["id"]) =>
    infiniteQueryOptions({
      queryKey: [...cartQueries.all(), cartId],
      queryFn: async ({ pageParam = 1 }) => {
        return await getCartItems({
          where: { cart: { equals: cartId } },
          page: pageParam as number,
          limit: LIMIT,
          depth: 8,
        });
      },
      enabled: !!cartId,
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        return lastPage.nextPage ?? undefined;
      },
      staleTime: 1000 * 60 * 5,
    }),
};
