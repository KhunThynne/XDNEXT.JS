"use client";

import type { User } from "@/payload-types";
import { useQuery } from "@tanstack/react-query";
import { useFormatter } from "next-intl";
import React from "react";

import { userQueries } from "@/core/user";

export default function Credit({
  hidden,
  userId,
}: {
  userId: User["id"];
  setTotalCreditAction?: React.Dispatch<React.SetStateAction<number>>;
  hidden?: boolean;
}) {
  const { data, refetch, isRefetching } = useQuery(userQueries.credit(userId));
  const handleClick = async () => {
    if (isRefetching) return;
    await refetch();
  };
  const credit = data?.credit;
  const formatter = useFormatter();

  if (hidden) {
    return null;
  } else
    return (
      <span
        className="cursor-pointer hover:animate-pulse"
        onClick={handleClick}
      >
        {formatter.number(credit ?? 0)}
      </span>
    );
}
