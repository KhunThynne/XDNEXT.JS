import { execute } from "@/libs/graphql/execute";
import {
  DeleteCartItemDocument,
  DeleteCartItemsDocument,
} from "@/libs/graphql/generates/graphql";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCartItemDocument = ({
  handleSuccess,
}: {
  handleSuccess?: () => void;
}) => {
  const queryKey = ["cartItems"];
  const cartItemQueryClient = useQueryClient();
  const mutationDeleteItem = useMutation({
    mutationFn: async (id: string) => {
      await execute(DeleteCartItemDocument, { where: { id } });
    },
    onSuccess(data, variables, context) {
      handleSuccess?.();
    },
  });
  const mutationDeleteItems = useMutation({
    mutationFn: async (ids: string[]) => {
      await execute(DeleteCartItemsDocument, {
        where: ids.map((id) => ({ id })),
      });
    },
    onSuccess() {
      handleSuccess?.();
    },
  });

  return {
    cartItemQueryClient,
    queryKey,
    mutationDeleteItem,
    mutationDeleteItems,
  };
};
