import { execute } from "@/shared/libs/graphql/execute";

import { useQuery } from "@tanstack/react-query";

export const useGetOrderQuery = () => {
  // return useQuery<GetProductsQuery>({
  //   queryKey: ["GetOrder"],
  //   queryFn: async () => {
  //     const { data } = await execute(GetOrderDocument, variables);
  //     return data;
  //   },
  //   enabled: !!variables,
  // });
};
