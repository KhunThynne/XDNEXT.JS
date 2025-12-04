"use server";
import { execute } from "@/libs/graphql/execute";
import type {
  DeletePointTransactionsMutationVariables,
  PointTransactionFieldFragment,
  UpdatePointTransactionMutationVariables,
} from "@/libs/graphql/generates/graphql";
import {
  DeletePointTransactionsDocument,
  UpdatePointTransactionDocument,
} from "@/libs/graphql/generates/graphql";
import { stripe } from "@/libs/stripe/stripe";
import { cacheLife, cacheTag, revalidateTag, updateTag } from "next/cache";
import type Stripe from "stripe";

export async function getPointPaymentTransaction() {
  "use cache";
  cacheLife("max");
  cacheTag("test");

  const time = new Date().toISOString();

  return { message: "cached result", time };
}

export const updatePointPaymentTransaction = async (
  query: UpdatePointTransactionMutationVariables
) => {
  // "use cache";
  // cacheLife("max");
  // cacheTag(`update-point-${query.where.id}`);
  try {
    const res = await execute(UpdatePointTransactionDocument, { ...query });
    if (res.data) {
      // updateTag(
      //   `point-transaction-${(res.data as PointTransactionFieldFragment).id}`
      // );
      return { ...res.data };
    }
  } catch (err) {
    console.log(err);
    throw new Error("can't update point transaction");
  }

  return false;
};

export const deletePointPaymentTransaction = async (
  arg: DeletePointTransactionsMutationVariables
): Promise<PointTransactionFieldFragment | false> => {
  try {
    const res = await execute(DeletePointTransactionsDocument, arg);
    if (res.data) {
      return { ...(res.data as PointTransactionFieldFragment) };
    }
  } catch (err) {
    console.log(err);
    throw new Error("can't delete point transaction");
  }
  return false;
};
