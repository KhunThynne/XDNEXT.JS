// core/cart/query.ts
import { queryOptions } from "@tanstack/react-query";
import { getProductsCache } from "./services";
import { keys } from "./keys";

const LIMIT = 20;

export const productQueries = {
  page: (page: number) => {
    const { queryKey } = keys.page(page);
    return queryOptions({
      queryKey,
      queryFn: async () => {
        return await getProductsCache({
          page,
          limit: LIMIT,
        });
      },
      staleTime: 1000 * 60 * 5,
    });
  },
};
