import { execute } from "@/libs/graphql/execute";

import type {
  PointTransaction,
  UpdatePointTransactionMutationVariables,
} from "@/libs/graphql/generates/graphql";
import {
  OrderDirection,
  GetPointTransactionsDocument,
  UpdatePointTransactionDocument,
} from "@/libs/graphql/generates/graphql";
import {
  useQueryClient,
  useInfiniteQuery,
  keepPreviousData,
  useMutation,
} from "@tanstack/react-query";

import type { User } from "next-auth";
import { useCallback, useMemo } from "react";
import { cancelPaymentIntent } from "../_actions/paymentIntents";
import type Stripe from "stripe";
import { toast } from "sonner";

export const usePointTransactionsInfiniteQuery = ({
  take = 10,
  userId,
}: {
  userId: User["id"];
  take?: number;
}) => {
  const queryKey = useMemo(() => [`point-transaction-${userId}`], [userId]);
  const queryClient = useQueryClient();
  const invalidate = useCallback(() => {
    queryClient.invalidateQueries({ queryKey });
  }, [queryClient, queryKey]);
  const query = useInfiniteQuery({
    queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      const result = await execute(GetPointTransactionsDocument, {
        where: { user: { id: { equals: userId } } },
        skip: pageParam * take,
        take,
        orderBy: [
          { isFavorite: OrderDirection.Desc },
          { createdAt: OrderDirection.Desc },
        ],
      });
      return result;
    },
    enabled: !!userId,
    initialPageParam: 0,
    getNextPageParam: (_lastGroup, groups) => groups.length,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
    placeholderData: keepPreviousData,
  });

  return { query, invalidate, queryKey };
};

type switchFavoriteData = Pick<
  UpdatePointTransactionMutationVariables["data"],
  "isFavorite"
>;
export const useUpdatePointTransactionMutations = () => {
  const mutations = useMutation({
    mutationFn: async (variables: UpdatePointTransactionMutationVariables) => {
      await execute(UpdatePointTransactionDocument, {
        ...variables,
      });
    },
  });

  const switchFavorite = (
    variables: { id: PointTransaction["id"]; data: switchFavoriteData },
    options?: Parameters<typeof mutations.mutate>[1]
  ) => {
    return mutations.mutateAsync(
      {
        where: { id: variables.id },
        data: variables.data,
      },
      options
    );
  };

  const rejectPayment = async (
    variables: {
      id: PointTransaction["id"];
      paymentIntentId: Stripe.PaymentIntent["id"];
    },
    options?: Parameters<typeof mutations.mutate>[1]
  ) => {
    const stripeResult = await cancelPaymentIntent(variables.paymentIntentId);
    if (!stripeResult.success) {
      throw new Error(`Stripe Cancel Failed: ${stripeResult.error}`);
    }
    return mutations.mutate(
      {
        where: { id: variables.id },
        data: {
          metaData: stripeResult.intent,
          status: stripeResult.intent?.status,
          expiredAt: new Date(),
        },
      },
      {
        ...options,
        onSuccess: () => {
          toast.success(`${variables.paymentIntentId} reject success`);
        },
      }
    );
  };

  return { switchFavorite, mutations, rejectPayment };
};
