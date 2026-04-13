// core/user-item/query.ts
import {
  queryOptions,
  infiniteQueryOptions,
  keepPreviousData,
} from "@tanstack/react-query";
import { getUserItems } from "./action";
import type { User } from "next-auth";

export const userItemQueries = {
  // 1. Root Key
  all: () => ["user-items"] as const,

  // 2. สำหรับข้อมูลทั่วไป (useQuery)
  credit: (userId: User["id"]) =>
    queryOptions({
      queryKey: [...userItemQueries.all(), "credit", userId],
      queryFn: () =>
        getUserItems({
          where: { user: { equals: userId! } },
        }),
      enabled: !!userId,
      staleTime: 1000 * 60 * 5, // 5 mins
    }),

  userItems: (userId: User["id"]) =>
    infiniteQueryOptions({
      queryKey: [...userItemQueries.all(), "user-items", userId],
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
    }),
};
