"use client";
import { execute } from "@/libs/graphql/execute";
import type { Maybe, UserPoint } from "@/libs/graphql/generates/graphql";
import { GetUserPointDocument } from "@/libs/graphql/generates/graphql";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useFormatter } from "next-intl";

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
  userPoint,
}: {
  userPoint: Maybe<UserPoint> | undefined;
}) {
  const formatter = useFormatter();
  const { query } = usePointDocument({
    id: userPoint?.id,
  });
  const { data, status, refetch } = query;
  const total_point = data?.data.userPoint?.total_point || 0;

  if (status === "success")
    return (
      <span
        className="cursor-pointer hover:animate-pulse"
        onClick={async () => {
          refetch();
        }}
      >
        {formatter.number(total_point)}
      </span>
    );
}
