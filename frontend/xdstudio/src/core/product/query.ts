// core/cart/query.ts
import { queryOptions } from "@tanstack/react-query";
import { checkUserProductStatus, getProductCache, getProductsCache } from "./services";
import { keys } from "./keys";

const LIMIT = 20;

export const productQueries = {
  product: (id: string) => {
    const { queryKey } = keys.product(id);
    return queryOptions({
      queryKey,
      queryFn: async () => {
        return await getProductCache(id);
      },
      staleTime: 1000 * 60 * 5,
    });
  },
  checkUserProductStatus: (
    productId: string,
    userId: string,
    cartId: string
  ) => {
    const { queryKey } = keys.checkUserProductStatus(productId, userId, cartId);
    return queryOptions({
      queryKey,
      queryFn: async () => {
        return await checkUserProductStatus({productId,userId});
      },
      staleTime: 1000 * 60 * 5,
    });
  },
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
