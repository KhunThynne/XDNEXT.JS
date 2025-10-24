import { execute } from "@/libs/graphql/execute";
import type { UpdateCartMutationVariables } from "@/libs/graphql/generates/graphql";
import { UpdateCartDocument } from "@/libs/graphql/generates/graphql";

import { useMutation } from "@tanstack/react-query";

export const useMutationUpdateCart = () => {
  return useMutation({
    mutationFn: async (variables: UpdateCartMutationVariables) => {
      return execute(UpdateCartDocument, { ...variables });
    },
  });
};
