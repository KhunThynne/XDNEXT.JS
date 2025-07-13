import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "src/graphql/**/*.schema.ts": {
        skipGraphQLImport: true,
      },
    },
    {
      "src/auth/graphql/*.schema.ts": {
        skipGraphQLImport: true,
      },
    },
  ],

  generates: {
    "src/types/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
