import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended-legacy"

    // "eslint:recommended"
  ),
  ...compat.config({
    rules: {
      "prettier/prettier": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      // React
      "react/react-in-jsx-scope": "off",
    },
  }),
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
    },
  },
  { files: ["**/*.{js,jsx,ts,tsx}"] },
];

export default eslintConfig;
