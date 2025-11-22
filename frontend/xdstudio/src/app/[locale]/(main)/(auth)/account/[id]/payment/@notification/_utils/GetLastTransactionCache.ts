import { execute } from "@/libs/graphql/execute";
import {
  GetPointTransactionsDocument,
  OrderDirection,
} from "@/libs/graphql/generates/graphql";
import { cacheLife, cacheTag } from "next/cache";

export const GetLastTransactionCache = async (userId: string) => {
  "use cache";
  cacheLife("max");
  cacheTag(`last-transaction-${userId}`);
  return await execute(GetPointTransactionsDocument, {
    where: { user: { id: { equals: userId } } },
    orderBy: [{ createdAt: OrderDirection.Desc }],
    take: 1,
    skip: 0,
  });
};
