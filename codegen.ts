import type { CodegenConfig } from "@graphql-codegen/cli";
import { config as loadEnv } from "dotenv-flow";
loadEnv();

const config: CodegenConfig = {
  overwrite: true,
  // schema: [
  //   {
  //     [`${process.env.INTERNAL_SITE_URL}/api/graphql`]: {
  //       headers: {
  //         Authorization: `Bearer ${process.env.PAYLOAD_SECRET}`,
  //       },
  //     },
  //   },
  // ],
  schema: "./graphql/graphql.schema.graphql",
  documents: ["graphql/**/*.{ts,tsx,graphql}"],
  ignoreNoDocuments: true,
  generates: {
    // "frontend/xdstudio/src/libs/graphql/generates/generated.ts": {
    //   plugins: [
    //     "typescript",
    //     "typescript-operations",
    //     "typescript-react-query",
    //   ],
    //   overwrite: true,
    //   documents: {},
    //   config: {
    //     injectServiceIndex: true,
    //     fetcher: "fetch",
    //     documentMode: "external",
    //     exposeQueryKeys: true,
    //     exposeFetcher: true,
    //     enumsAsTypes: true,
    //     useTypeImports: true,
    //     addInfiniteQuery: true,
    //     reactQueryVersion: 5,
    //   },
    // },

    "frontend/xdstudio/src/libs/graphql/generates/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
      config: { useTypeImports: true, documentMode: "string" },
    },

    "graphql/generates/": {
      preset: "client",
      plugins: [],
      config: {
        documentMode: "string",
        useTypeImports: true,
      },
    },
    "graphql/generates/graphql.schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
