import { execute } from "@/libs/graphql/execute";

import {
  OrderDirection,
  GetPointTransactionsDocument,
} from "@/libs/graphql/generates/graphql";
import {
  useQueryClient,
  useInfiniteQuery,
  keepPreviousData,
} from "@tanstack/react-query";

import type { User } from "next-auth";
import { useCallback, useMemo } from "react";

export const usePointTransactionsInfiniteQuery = ({
  take = 10,
  userId,
}: {
  userId: User["id"];
  take?: number;
}) => {
  const queryKey = useMemo(() => [`point-transaction-${userId}`], [userId]);
  const queryClient = useQueryClient();
  const invalidate = useCallback(() => {
    queryClient.invalidateQueries({ queryKey });
  }, [queryClient, queryKey]);
  const query = useInfiniteQuery({
    queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      const result = await execute(GetPointTransactionsDocument, {
        where: { user: { id: { equals: userId } } },
        skip: pageParam * take,
        take,
        orderBy: [
          { isFavorite: OrderDirection.Desc },
          { createdAt: OrderDirection.Desc },
        ],
      });
      return result;
    },
    enabled: !!userId,
    initialPageParam: 0,
    getNextPageParam: (_lastGroup, groups) => groups.length,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
    placeholderData: keepPreviousData,
  });

  return { query, invalidate, queryKey };
};
