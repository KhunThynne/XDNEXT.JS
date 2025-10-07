import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import reactYouMightNotNeedAnEffect from "eslint-plugin-react-you-might-not-need-an-effect";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    // "next/core-web-vitals",
    "next/typescript",
    "plugin:react-hooks/recommended-legacy",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "prettier"
    // "next"

    // ,"eslint:recommended"
  ),
  ...compat.config({
    settings: {
      react: {
        version: "detect", // ใช้ react version จาก node_modules
      },
    },
    rules: {
      "prettier/prettier": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      // React
      "react/react-in-jsx-scope": "off",
    },
  }),

  reactYouMightNotNeedAnEffect.configs.recommended,
  // JSON
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
