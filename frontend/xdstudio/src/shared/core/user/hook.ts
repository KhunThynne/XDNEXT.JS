"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { userItemQueries } from "./query";
import type { User } from "next-auth";

export const useUserItems = ({ userId }: { userId: User["id"] }) => {
  const infiniteUserItemsQuery = useInfiniteQuery(userItemQueries.list(userId));

  return { infiniteUserItemsQuery };
};
