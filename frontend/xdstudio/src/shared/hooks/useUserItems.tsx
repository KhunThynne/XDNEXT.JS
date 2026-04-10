import { useInfiniteQuery, keepPreviousData } from "@tanstack/react-query";
import type { User } from "next-auth";
import { getUserItems } from "../actions/users";

export const useUserItems = ({ userId }: { userId: User["id"] }) => {
  const infiniteUserItemsQuery = useInfiniteQuery({
    queryKey: ["user-items", userId],
    queryFn: async () => {
      const res = await getUserItems(userId!);
      return res;
    },
    enabled: !!userId,

    initialPageParam: 0,
    getNextPageParam: (_lastGroup, groups) => groups.length,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });

  return { infiniteUserItemsQuery };
};
