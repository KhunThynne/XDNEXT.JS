// core/cart/query.ts
import { infiniteQueryOptions } from "@tanstack/react-query";
import { getCartItems } from "./services";
import type { Cart } from "@/shared/libs/graphql/generates/graphql";
import { keys } from "./keys";

const LIMIT = 20;

export const cartQueries = {
  list: (cartId: Cart["id"]) => {
    const { queryKey } = keys.list(cartId);
    return infiniteQueryOptions({
      queryKey,
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
    });
  },
};
