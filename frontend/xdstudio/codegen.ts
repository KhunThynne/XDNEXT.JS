import "./configs/dotenv.config";
import { env } from "./src/env";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [`${env.INTERNAL_API_URL}/api/graphql`]: {
        headers: {
          Authorization: `Bearer ${env.CODEGEN_TOKEN}`,
        },
      },
    },
  ],

  documents: [
    "src/libs/graphql/**/*.{ts,tsx,graphql}",
    "!src/libs/graphql/**/_*/**",
    "!src/libs/graphql/**/_*.*",
  ],
  ignoreNoDocuments: true,
  generates: {
    "src/libs/graphql/generates/": {
      preset: "client",
      config: {
        documentMode: "string",
      },
    },
    "src/libs/graphql/graphql.schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
