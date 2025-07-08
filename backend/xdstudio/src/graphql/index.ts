import { createHandler } from "graphql-http/lib/use/express";
import schema from "./schema";

const handler = createHandler({
  schema: schema,
});

export default handler;
