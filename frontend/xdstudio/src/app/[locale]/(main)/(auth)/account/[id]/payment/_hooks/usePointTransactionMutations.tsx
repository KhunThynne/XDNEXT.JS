import { execute } from "@/libs/graphql/execute";

import type {
  DeletePointTransactionsMutationVariables,
  PointTransaction,
  UpdatePointTransactionMutationVariables,
} from "@/libs/graphql/generates/graphql";
import { UpdatePointTransactionDocument } from "@/libs/graphql/generates/graphql";
import { useMutation } from "@tanstack/react-query";

import { cancelPaymentIntent } from "../_actions/paymentIntents";
import type Stripe from "stripe";
import { toast } from "sonner";
import { deletePointPaymentTransaction } from "../_actions/pointPaymentTransaction";

type switchFavoriteData = Pick<
  UpdatePointTransactionMutationVariables["data"],
  "isFavorite"
>;
export const usePointTransactionMutations = () => {
  const mutations = useMutation({
    mutationFn: async (variables: UpdatePointTransactionMutationVariables) => {
      await execute(UpdatePointTransactionDocument, {
        ...variables,
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (variables: DeletePointTransactionsMutationVariables) => {
      await deletePointPaymentTransaction({
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
        onSuccess: () => {
          toast.success(`${variables.paymentIntentId} reject success`);
        },
        ...options,
      }
    );
  };
  const deletePayment = async (
    variables: {
      id: PointTransaction["id"];
      paymentIntentId: Stripe.PaymentIntent["id"];
    },
    options?: Parameters<typeof deleteMutation.mutate>[1]
  ) => {
    return deleteMutation.mutate(
      {
        where: { id: variables.id },
      },
      {
        onSuccess: () => {
          toast.success(`${variables.paymentIntentId} delete success`);
        },
        ...options,
      }
    );
  };
  const rejectAndDeletePayment = async (
    variables: {
      id: PointTransaction["id"];
      paymentIntentId: Stripe.PaymentIntent["id"];
    },
    options?: Parameters<typeof deleteMutation.mutate>[1]
  ) => {
    const stripeResult = await cancelPaymentIntent(variables.paymentIntentId);
    if (!stripeResult.success) {
      throw new Error(`Stripe Cancel Failed: ${stripeResult.error}`);
    }
    await deletePayment(
      {
        id: variables.id,
        paymentIntentId: variables.paymentIntentId,
      },
      {
        onSuccess: () => {
          toast.success(
            `${variables.paymentIntentId} reject and delete success`
          );
        },
        ...options,
      }
    );
  };

  return {
    switchFavorite,
    mutations,
    deleteMutation,
    rejectPayment,
    deletePayment,
    rejectAndDeletePayment,
  };
};
