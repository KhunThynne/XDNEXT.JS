"use client";

import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { userItemQueries } from "./query";
import type { User } from "next-auth";

export const useUserItems = ({ userId }: { userId: User["id"] }) => {
  const infiniteUserItemsQuery = useInfiniteQuery(
    userItemQueries.userItems(userId)
  );

  return { infiniteUserItemsQuery };
};
export const useUserCredit = ({ id }: { id: User["id"] }) => {
  const query = useQuery(userItemQueries.credit(id));
  return { query };
};
