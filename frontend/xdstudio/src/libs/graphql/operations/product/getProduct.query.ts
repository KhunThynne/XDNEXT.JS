import { useQuery } from "@tanstack/react-query";

import { execute } from "../../execute";
import { graphql } from "../../generates";
import { ProductQueryVariables } from "../../generates/graphql";

const QueryProduct = graphql(`
  query Product($id: ID) {
    product(where: { id: $id }) {
      id
      name
      details
      createdAt
    }
  }
`);

export function useGetProduct(params: ProductQueryVariables) {
  const isEnabled = !!params.id;
  const keyId = params.id ?? "";
  return useQuery({
    queryKey: ["GetProduct", keyId],
    queryFn: () => execute(QueryProduct, params),
    enabled: isEnabled,
  });
}
