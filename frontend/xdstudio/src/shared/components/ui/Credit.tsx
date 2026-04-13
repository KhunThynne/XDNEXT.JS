"use client";
import { execute } from "@/libs/graphql/execute";
import type { Maybe, UserPoint } from "@/libs/graphql/generates/graphql";
import { GetUserPointDocument } from "@/libs/graphql/generates/graphql";
import type { User } from "@/payload-types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useFormatter } from "next-intl";
import React, { useLayoutEffect, useMemo } from "react";

export default function Credit({
  credit,
  hidden,
  setTotalCreditAction,
}: {
  credit: User["credit"];
  setTotalCreditAction?: React.Dispatch<React.SetStateAction<number>>;
  hidden?: boolean;
}) {
  const formatter = useFormatter();
  // const { query } = usePointDocument({
  //   id: pointId,
  // });
  // const { data, status, refetch } = query;
  // const total_point = useMemo(
  //   () => data?.data.userPoint?.total_point || 0,
  //   [data?.data.userPoint?.total_point]
  // );
  // useLayoutEffect(() => {
  //   if (!setTotalPoint) return;
  //   if (total_point) {
  //     setTotalPoint(total_point);
  //   }
  // }, [setTotalPoint, total_point]);
  if (hidden) {
    return null;
  }
  // if (status === "success")
  //   return (
  //     <span
  //       className="cursor-pointer hover:animate-pulse"
  //       onClick={async () => {
  //         // refetch();
  //       }}
  //     >
  //       {/* {formatter.number(total_point ?? 0)} */}
  //     </span>
  //   );
  else
    return (
      <span
        className="cursor-pointer hover:animate-pulse"
        onClick={async () => {
          // refetch();
        }}
      >
        {formatter.number(credit ?? 0)}
      </span>
    );
}
