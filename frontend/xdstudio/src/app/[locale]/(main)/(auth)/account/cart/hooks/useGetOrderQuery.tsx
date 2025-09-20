import { execute } from "@/libs/graphql/execute";
import {
  GetOrderDocument,
  GetOrderQueryVariables,
  GetProductsQuery,
} from "@/libs/graphql/generates/graphql";
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
