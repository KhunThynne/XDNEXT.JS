import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("plugin:prettier/recommended"),
  ...compat.config({
    rules: {
      "prettier/prettier": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  }),
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    ...js.configs.recommended,
  },

  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.json"],
    plugins: {
      jsonc: await import("eslint-plugin-jsonc"),
    },
    languageOptions: {
      parser: (await import("jsonc-eslint-parser")).default,
    },
    rules: {
      "jsonc/indent": ["error", 2],
      "jsonc/comma-dangle": ["error", "never"],
      "jsonc/key-spacing": ["error", { beforeColon: false, afterColon: true }],
      ignores: [
        "tsconfig.json",
        "node_modules/",
        "package.json",
        "graphql.schema.json",
      ],
    },
  },
  ...tseslint.configs.recommended,
  {
    ignores: ["dist/", "node_modules/", "src/types/graphql.ts"],
  },
  {
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "no-async-promise-executor": "off",
    },
  },
];

export default eslintConfig;
