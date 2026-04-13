// core/user-item/query.ts
import {
  queryOptions,
  infiniteQueryOptions,
  keepPreviousData,
} from "@tanstack/react-query";
import { getUserCreditCache, getUserItems } from "./services";
import type { User } from "@/payload-types";
import { keys as userKeys } from "./keys";

export const userQueries = {
  credit: (userId: User["id"]) => {
    const { queryKey } = userKeys.credit(userId);
    return queryOptions({
      queryKey,
      queryFn: () => getUserCreditCache(userId),
      enabled: !!userId,
      staleTime: 1000 * 60 * 60 * 24,
    });
  },
  userItems: (userId: User["id"]) => {
    const { queryKey } = userKeys.userItems(userId);
    return infiniteQueryOptions({
      queryKey,
      queryFn: async ({ pageParam = 1 }) => {
        return await getUserItems({
          where: { user: { equals: userId! } },
          page: pageParam as number,
          limit: 10,
        });
      },
      enabled: !!userId,
      initialPageParam: 1,
      getNextPageParam: (lastPage) =>
        lastPage.hasNextPage ? lastPage.nextPage : undefined,
      refetchOnWindowFocus: false,
      placeholderData: keepPreviousData,
    });
  },
};
