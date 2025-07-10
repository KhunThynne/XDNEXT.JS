import { makeExecutableSchema } from "@graphql-tools/schema";
import { createHandler } from "graphql-http/lib/use/express";
import typeDefs from "./auth.schema";
import { resolvers } from "./auth.resolver";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export const handlerAuth = createHandler({
  schema,
});
