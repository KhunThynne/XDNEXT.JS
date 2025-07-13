import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import { join } from "path";

const typesArray = loadFilesSync(join(__dirname, "**/*.schema.{ts,js}"));
const resolversArray = loadFilesSync(join(__dirname, "**/*.resolver.{ts,js}"));

const typeDefs = mergeTypeDefs(typesArray);

const resolvers = mergeResolvers(resolversArray);
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
