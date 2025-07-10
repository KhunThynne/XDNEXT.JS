import { MutationResolvers, QueryResolvers } from "@/types/graphql";

export type OperationName =
  | keyof QueryResolvers
  | keyof MutationResolvers
  | "IntrospectionQuery";
export const publicOperations: OperationName[] = [
  "login",
  "register",
  "IntrospectionQuery",
];
