// core/user-item/query.ts
import { infiniteQueryOptions, keepPreviousData } from "@tanstack/react-query";
import { getUserItems } from "./action"; 
import type { User } from "next-auth";

export const userItemQueries = {
  all: () => ["user-items"] as const,
  list: (userId: User["id"]) =>
    infiniteQueryOptions({
      queryKey: [...userItemQueries.all(), userId],
      queryFn: async ({ pageParam = 1 }) => {
        return await getUserItems({
          where: {
            user: {
              equals: userId!,
            },
          },
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
    }),
};
