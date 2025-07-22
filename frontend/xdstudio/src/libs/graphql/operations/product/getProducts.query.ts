import { useQuery } from "@tanstack/react-query";
import { execute } from "../../execute";
import { graphql } from "../../generates";
import { InputMaybe, ProductOrderByInput } from "../../generates/graphql";

export const QueryProducts = graphql(`
  query Products($take: Int, $skip: Int, $orderBy: [ProductOrderByInput!]) {
    products(take: $take, skip: $skip, orderBy: $orderBy) {
      id
      name
      details
      createdAt
    }
  }
`);

export function useGetProducts({
  take = 10,
  skip = 0,
  orderBy = [{ createdAt: "desc" }],
}: {
  take?: number;
  skip?: number;
  orderBy?: { createdAt: "asc" | "desc" }[];
}) {
  return useQuery({
    queryKey: ["GetProducts", take, skip, orderBy],
    queryFn: () =>
      execute(QueryProducts, {
        take,
        skip,
        orderBy: orderBy as InputMaybe<ProductOrderByInput[]>,
      }),
  });
}
