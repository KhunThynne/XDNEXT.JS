import "./configs/dotenv";
import { env } from "./src/env";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: env.NEXT_PUBLIC_API_GRAPHQL,
  // documents: ["src/**/*.tsx"],
  generates: {
    "/types/graphql.type.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        fetcher: "graphql-request",
      },
    },
    "src/libs/graphql/graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
