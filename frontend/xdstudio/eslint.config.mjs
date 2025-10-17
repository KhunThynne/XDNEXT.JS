import { FlatCompat } from "@eslint/eslintrc";
import reactYouMightNotNeedAnEffect from "eslint-plugin-react-you-might-not-need-an-effect";
import ts from "typescript-eslint";
import js from "@eslint/js";
import eslintPluginJsonc from "eslint-plugin-jsonc";
const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  {
    ignores: ["node_modules/**", ".next/**", "out/**"],
    files: ["**/*.{js,jsx,ts,tsx}"],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...compat.config({
    settings: {
      react: {
        version: "detect",
      },
    },
    extends: [
      "plugin:@next/next/core-web-vitals",
      "next/typescript",
      "plugin:react-hooks/recommended",
      "plugin:prettier/recommended",
      "plugin:react/recommended",
      "prettier",
      "plugin:i18next/recommended",
    ],

    rules: {
      "prettier/prettier": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "no-extra-boolean-cast": "warn",
      "@typescript-eslint/no-explicit-any": "warn",

      "@typescript-eslint/consistent-type-imports": "warn",
      "@typescript-eslint/no-unused-expressions": "off",
      "no-empty": "off",
      "no-case-declarations": "off",
      // "tailwindcss/classnames-order": "warn",
      "i18next/no-literal-string": ["off", { markupOnly: true }],
      // React
      "react/react-in-jsx-scope": "off",
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/preserve-manual-memoization": "warn",
    },
  }),
  {
    plugins: {
      reactYouMightNotNeedAnEffect: reactYouMightNotNeedAnEffect,
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
];

export default eslintConfig;
