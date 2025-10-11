import { FlatCompat } from "@eslint/eslintrc";
import reactYouMightNotNeedAnEffect from "eslint-plugin-react-you-might-not-need-an-effect";

import js from "@eslint/js";
// import ts from "typescript";
const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  {
    ignores: ["node_modules/**", ".next/**", "out/**"],
    files: ["**/*.{js,jsx,ts,tsx}"],
  },

  js.configs.recommended,

  ...compat.config({
    settings: {
      react: {
        version: "detect",
      },
    },
    extends: [
      "plugin:@next/next/core-web-vitals",
      "next/typescript",
      "plugin:react-hooks/recommended-legacy",
      "plugin:prettier/recommended",
      "plugin:react/recommended",
      "prettier",
      "plugin:i18next/recommended",
      // "plugin:tailwindcss/recommended",
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
      "i18next/no-literal-string": ["warn", { markupOnly: true }],
      // React
      "react/react-in-jsx-scope": "off",
    },
  }),

  reactYouMightNotNeedAnEffect.configs.recommended,
  // JSON
  {
    files: ["**/*.json", "**/*.jsonc"],
    plugins: {
      jsonc: await import("eslint-plugin-jsonc"),
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
