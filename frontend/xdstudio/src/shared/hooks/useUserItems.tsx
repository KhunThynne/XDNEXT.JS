import { useInfiniteQuery, keepPreviousData } from "@tanstack/react-query";
import type { User } from "next-auth";
import { getUserItems } from "../actions/users";

export const useUserItems = ({ userId }: { userId: User["id"] }) => {
  const infiniteUserItemsQuery = useInfiniteQuery({
    queryKey: ["user-items", userId],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await getUserItems({
        where: {
          user: {
            equals: userId!,
          },
        },
        page: pageParam,
        limit: 10,
      });
      return res;
    },
    enabled: !!userId,

    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.hasNextPage ? lastPage.nextPage : undefined,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });

  return { infiniteUserItemsQuery };
};
