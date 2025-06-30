import { readFileSync } from "fs";
import { parse as gqlParse, buildASTSchema } from "graphql";
import { createHandler } from "graphql-http/lib/use/express";
import path from "path";
import { Resolvers } from "@/types/graphql";
const schemaSDL = readFileSync(
  path.join(process.cwd(), "graphql/schema.graphql"),
  "utf-8",
);
const ast = gqlParse(schemaSDL);
const schema = buildASTSchema(ast);
const root: Resolvers["Query"] = {
  hellos: () => "สวัสดีจาก GraphQL + Express!",
  test: () => ({ hh: "test" }),
};

const handler = createHandler({
  schema: schema,
  rootValue: root,
});

export default handler;
