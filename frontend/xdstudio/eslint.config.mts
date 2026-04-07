import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import ts from "typescript-eslint";
import js from "@eslint/js";
const eslintConfig = defineConfig([
  js.configs.recommended,
  ...ts.configs.recommended,
  ...nextVitals,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/no-children-prop": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "commitlint.config.js",
    "husky/**",
    "package-lock.json",
  ]),
]);

export default eslintConfig;
