import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { userQueries } from "./query";
import type { User } from "@/payload-types";

export const useUserManager = ({ userId }: { userId: User["id"] }) => {
  const itemsQuery = useInfiniteQuery(userQueries.userItems(userId));
  const creditQuery = useQuery(userQueries.credit(userId));
  return {
    items: itemsQuery,
    credit: creditQuery,
    isLoading: itemsQuery.isLoading || creditQuery.isLoading,
  };
};
