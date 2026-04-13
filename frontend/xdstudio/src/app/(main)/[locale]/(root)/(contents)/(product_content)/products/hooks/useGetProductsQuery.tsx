import { execute } from "@/shared/libs/graphql/execute";
import type {
  GetProductsQuery,
  GetProductsQueryVariables,
} from "@/shared/libs/graphql/generates/graphql";
import { GetProductsDocument } from "@/shared/libs/graphql/generates/graphql";
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
