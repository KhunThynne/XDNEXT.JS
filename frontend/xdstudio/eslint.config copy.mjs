import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

// import next from 'eslint-plugin-next';
/** @type {import('eslint').Linter.Config[]} */
const compat = new FlatCompat();
const eslintConfig = [
  js.configs.recommended,
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
  }),
  {
    ignores: ['.next/**', 'node_modules/**'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier,
      react,
      // next,
    },
    rules: {
      // Core ESLint rules
      '@typescript-eslint/no-unused-vars': 'warn',
      '@next/next/no-page-custom-font': 'off',
      '@typescript-eslint/no-wrapper-object-types': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/prefer-ts-expect-error': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
      '@typescript-eslint/no-unsafe-optional-chaining': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-extra-non-null-assertion': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],

      'no-constant-binary-expression': 'off',
      'no-unused-vars': 'off',
      'no-console': 'warn',
      'no-unsafe-optional-chaining': 'off',
      'no-extra-boolean-cast': 'warn',
      'no-multiple-empty-lines': ['warn', { max: 0, maxEOF: 0 }],
      'no-trailing-spaces': 'warn',
      'no-irregular-whitespace': 'warn',
      'react/no-unescaped-entities': 'off',
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto',
          // singleQuote: true,
          trailingComma: 'es5',
          printWidth: 120,
        },
      ],

      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-ignore': false,
          'ts-expect-error': 'allow-with-description',
          minimumDescriptionLength: 3,
        },
      ],

      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'never',
        },
      ],
    },

    settings: {
      react: { version: 'detect' },
      // tailwindcss: {
      //   callees: ["classnames", "clsx"],
      // },
    },
  },
  prettierConfig,
];

export default eslintConfig;
