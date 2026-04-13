import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { userQueries } from "./query";
import type { User } from "@/payload-types";

export const useUserItems = ({ userId }: { userId: User["id"] }) => {
  const infiniteUserItemsQuery = useInfiniteQuery(
    userQueries.userItems(userId)
  );

  return { infiniteUserItemsQuery };
};
export const useUserCredit = ({ id }: { id: User["id"] }) => {
  const query = useQuery(userQueries.credit(id));
  return { query };
};
