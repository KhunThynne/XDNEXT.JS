import { execute } from "@/libs/graphql/execute";

import { useMutation } from "@tanstack/react-query";

export const useMutationCreateOrdersAndUserItems = () => {
  return useMutation({
    // mutationFn: async (variables: CreateOrderAndUserItemsMutationVariables) => {
    //   return execute(CreateOrderAndUserItemsDocument, { ...variables });
    // },
    // onSuccess(data, variables, onMutateResult, context) {

    // },
  });
};
