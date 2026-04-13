import { execute } from "@/shared/libs/graphql/execute";
import type {
  GetOrderQueryVariables,
  GetProductsQuery,
} from "@/shared/libs/graphql/generates/graphql";
import { GetOrderDocument } from "@/shared/libs/graphql/generates/graphql";
import { useQuery } from "@tanstack/react-query";

export const useGetOrderQuery = (variables: GetOrderQueryVariables) => {
  return useQuery<GetProductsQuery>({
    queryKey: ["GetOrder"],
    queryFn: async () => {
      const { data } = await execute(GetOrderDocument, variables);
      return data;
    },
    enabled: !!variables,
  });
};
