import { env } from "@/env";
import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient(env.NEXT_PUBLIC_API_GRAPHQL);
