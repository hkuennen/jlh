import js from "@eslint/js";
import * as prettier from "eslint-config-prettier";
import solid from "eslint-plugin-solid";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      solid
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"]
    }
  },
  {
    files: ["**/*.tsx"],
    plugins: {
      solid
    },
    settings: {},
    rules: {
      ...solid.configs.typescript.rules
    }
  }
];
