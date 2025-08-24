import { execute } from "@/libs/graphql/execute";
import {
  GetProductsDocument,
  GetProductsQuery,
  GetProductsQueryVariables,
} from "@/libs/graphql/generates/graphql";
import { useQuery } from "@tanstack/react-query";

export const useGetProductsQuery = (variables: GetProductsQueryVariables) => {
  return useQuery<GetProductsQuery>({
    queryKey: ["GetProducts"],
    queryFn: async () => {
      const { data } = await execute(GetProductsDocument, variables);
      return data;
    },
    enabled: !!variables,
  });
};
