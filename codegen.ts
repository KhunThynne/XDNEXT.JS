import type { CodegenConfig } from "@graphql-codegen/cli";
import { config as loadEnv } from "dotenv-flow";
loadEnv();

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [`${process.env.INTERNAL_SITE_URL}/api/graphql`]: {
        headers: {
          Authorization: `Bearer ${process.env.PAYLOAD_SECRET}`,
        },
      },
    },
  ],

  documents: [
    "graphql/**/*.{ts,tsx,graphql}",
    "frontend/xdstudio/src/**/*.{ts,tsx,graphql}",
    "!frontend/xdstudio/node_modules/**",
  ],
  ignoreNoDocuments: true,
  generates: {
    "frontend/xdstudio/src/libs/graphql/generates/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        fetcher: "fetch",
        documentMode: "string",
        exposeQueryKeys: true,
        exposeFetcher: true,
        enumsAsTypes: true,
        useTypeImports: true,
        addInfiniteQuery: true,
        reactQueryVersion: 5,
      },
    },
    "graphql/generates/": {
      preset: "client",
      config: {
        documentMode: "string",
      },
    },
    // "frontend/xdstudio/src/libs/graphql/generates/": {
    //   preset: "client",
    //   config: {
    //     documentMode: "string",
    //   },
    // },
    "graphql/generates/graphql.schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
