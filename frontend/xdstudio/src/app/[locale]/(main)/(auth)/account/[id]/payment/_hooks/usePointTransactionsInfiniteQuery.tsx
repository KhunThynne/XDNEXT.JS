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

export const usePointTransactionsInfiniteQuery = ({
  take = 10,
  userId,
}: {
  userId: User["id"];
  take?: number;
}) => {
  const queryKey = [`point-transaction-${userId}`];
  const queryClient = useQueryClient();
  const invalidate = () => {
    queryClient.invalidateQueries({ queryKey });
  };
  const query = useInfiniteQuery({
    queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      const result = await execute(GetPointTransactionsDocument, {
        where: { user: { id: { equals: userId } } },
        skip: pageParam,
        take,
        orderBy: { createdAt: OrderDirection.Desc },
      });
      return result;
    },
    enabled: !!userId,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.data?.pointTransactions?.length === take) {
        return allPages.length * take;
      }
      return undefined;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
    placeholderData: keepPreviousData,
  });

  return { query, invalidate };
};
