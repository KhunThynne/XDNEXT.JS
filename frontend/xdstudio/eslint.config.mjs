import { FlatCompat } from "@eslint/eslintrc";
import reactYouMightNotNeedAnEffect from "eslint-plugin-react-you-might-not-need-an-effect";
import ts from "typescript-eslint";
import js from "@eslint/js";
import eslintPluginJsonc from "eslint-plugin-jsonc";
import reactHooks from "eslint-plugin-react-hooks";
import nextPlugin from "@next/eslint-plugin-next";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";
const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = defineConfig([
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  nextPlugin.configs["core-web-vitals"],
  react.configs.flat.recommended,
  reactHooks.configs.flat["recommended-latest"],
  eslintPluginPrettierRecommended,
  reactYouMightNotNeedAnEffect.configs.recommended,
  ...compat.config({
    settings: {
      react: {
        version: "detect",
      },
    },
    extends: ["plugin:i18next/recommended"],

    rules: {
      "i18next/no-literal-string": ["warn", { markupOnly: true }],
      // React
    },
  }),
  {
    rules: {
      "prettier/prettier": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "no-extra-boolean-cast": "warn",
      "@typescript-eslint/no-explicit-any": "warn",

      "@typescript-eslint/consistent-type-imports": "warn",
      "@typescript-eslint/no-unused-expressions": "off",
      "no-empty": "off",
      "no-case-declarations": "off",
      "react/jsx-key": "error",
      "react/react-in-jsx-scope": "off",
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/preserve-manual-memoization": "warn",
    },
  },
  {
    files: ["**/*.json", "**/*.jsonc"],
    plugins: {
      jsonc: eslintPluginJsonc,
    },
    languageOptions: {
      parser: (await import("jsonc-eslint-parser")).default,
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": "off",
      "jsonc/indent": ["error", 2],
      "jsonc/comma-dangle": ["error", "never"],
      "padding-line-between-statements": "off",
      "jsonc/key-spacing": ["error", { beforeColon: false, afterColon: true }],
    },
  },
  // eslintConfigPrettier,

  globalIgnores([
    "node_modules/**",
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
