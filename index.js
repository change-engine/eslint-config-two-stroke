import typescriptEslint from "typescript-eslint";
import vitest from "eslint-plugin-vitest";
import nodePlugin from "eslint-plugin-n";
import deprecationPlugin from "eslint-plugin-deprecation";
import js from "@eslint/js";
import { fixupPluginRules, fixupConfigRules } from "@eslint/compat";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  ...typescriptEslint.configs.recommended,
  ...typescriptEslint.configs.recommendedTypeChecked,
  nodePlugin.configs["flat/recommended-module"],
  ...fixupConfigRules({
    ...deprecationPlugin.configs.recommended,
    plugins: { ["deprecation"]: fixupPluginRules(deprecationPlugin) },
  }),
  {
    ignores: ["dist", ".wrangler", "**/api.d.ts", "**/*-definitions.ts"],
  },
  {
    files: ["**/*.mjs", "**/*.js"],
    ...typescriptEslint.configs.disableTypeChecked,
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        tsconfigRootDir: import.meta.dirname,
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
      "@typescript-eslint/unbound-method": "off",
    },
  },
  {
    files: ["**/*.test.ts", "**/*.test.tsx", "./src/__tests__/**/*.ts"],
    ...vitest.configs.recommended,
    rules: {
      ...vitest.configs.recommended.rules,
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "vitest/no-export": "off",
      "vitest/expect-expect": "off",
      "vitest/no-conditional-expect": "off",
    },
  },
  eslintConfigPrettier,
];
