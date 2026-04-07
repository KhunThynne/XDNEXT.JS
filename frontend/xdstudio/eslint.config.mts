import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import ts from "typescript-eslint";
import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";
const eslintConfig = defineConfig([
  js.configs.recommended,
  ...ts.configs.recommended,
  ...nextVitals,
  {
    plugins: {
      prettier,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/no-children-prop": "off",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],
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
