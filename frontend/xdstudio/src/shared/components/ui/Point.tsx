"use client";
import { execute } from "@/libs/graphql/execute";
import type { Maybe, UserPoint } from "@/libs/graphql/generates/graphql";
import { GetUserPointDocument } from "@/libs/graphql/generates/graphql";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useFormatter } from "next-intl";
import React, { useLayoutEffect, useMemo } from "react";

export const usePointDocument = ({
  id,
}: {
  id: UserPoint["id"] | undefined;
}) => {
  const queryKey = [`point`, id];
  const query = useQuery({
    queryKey,
    queryFn: async () => {
      return execute(GetUserPointDocument, { where: { id } });
    },
    enabled: !!id,
  });

  const userPointQueryClient = useQueryClient();
  const invalidate = () => {
    userPointQueryClient.invalidateQueries({ queryKey });
  };
  return { query, queryKey, invalidate };
};

export default function Point({
  pointId,
  hidden,
  setTotalPoint,
}: {
  pointId: UserPoint["id"] | undefined;
  setTotalPoint?: React.Dispatch<React.SetStateAction<number>>;
  hidden?: boolean;
}) {
  const formatter = useFormatter();
  const { query } = usePointDocument({
    id: pointId,
  });
  const { data, status, refetch } = query;
  const total_point = useMemo(
    () => data?.data.userPoint?.total_point || 0,
    [data?.data.userPoint?.total_point]
  );
  useLayoutEffect(() => {
    if (!setTotalPoint) return;
    if (total_point) {
      setTotalPoint(total_point);
    }
  }, [setTotalPoint, total_point]);
  if (hidden) {
    return null;
  }
  if (status === "success")
    return (
      <span
        className="cursor-pointer hover:animate-pulse"
        onClick={async () => {
          refetch();
        }}
      >
        {formatter.number(total_point ?? 0)}
      </span>
    );
  else
    return (
      <span
        className="cursor-pointer hover:animate-pulse"
        onClick={async () => {
          refetch();
        }}
      >
        {formatter.number(total_point ?? 0)}
      </span>
    );
}
