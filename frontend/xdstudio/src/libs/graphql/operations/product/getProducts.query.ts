import { useQuery } from "@tanstack/react-query";
import { execute } from "../../execute";
import { graphql } from "../../generates";
import { InputMaybe, ProductOrderByInput } from "../../generates/graphql";



// export function useGetProducts({
//   take = 10,
//   skip = 0,
//   orderBy = [{ createdAt: "desc" }],
// }: {
//   take?: number;
//   skip?: number;
//   orderBy?: { createdAt: "asc" | "desc" }[];
// }) {
//   return useQuery({
//     queryKey: ["GetProducts", take, skip, orderBy],
//     queryFn: () =>
//       execute(QueryProducts, {
//         take,
//         skip,
//         orderBy: orderBy as InputMaybe<ProductOrderByInput[]>,
//       }),
//   });
// }
