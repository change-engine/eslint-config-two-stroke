import typescriptEslint from "typescript-eslint";
import nodePlugin from "eslint-plugin-n";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  nodePlugin.configs["flat/recommended-module"],
  ...typescriptEslint.configs.recommendedTypeChecked.map((conf) => ({
    ...conf,
    files: ["**/*.ts", "**/*.tsx"],
  })),
  {
    ignores: ["worker-configuration.d.ts", "dist", ".wrangler", "**/api.d.ts", "**/*-definitions.ts"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "n/no-unpublished-import": "off",
      "n/no-missing-import": "off",
      "n/no-unsupported-features/node-builtins": "off",
      eqeqeq: ["error"],
      "@typescript-eslint/no-shadow": 2,
      semi: ["error", "always"],
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/no-deprecated": "error",
      "@typescript-eslint/unbound-method": "off",
    },
  },
  {
    files: ["**/*.test.ts", "**/*.test.tsx", "./src/__tests__/**/*.ts"],
    rules: {
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
  eslintConfigPrettier,
];
