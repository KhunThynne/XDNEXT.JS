import { useQuery } from "@tanstack/react-query";

import { execute } from "../../execute";
import { graphql } from "../../generates";



// export function useGetProduct(params: ProductQueryVariables) {
//   const isEnabled = !!params.id;
//   const keyId = params.id ?? "";
//   return useQuery({
//     queryKey: ["GetProduct", keyId],
//     queryFn: () => execute(QueryProduct, params),
//     enabled: isEnabled,
//   });
// }
