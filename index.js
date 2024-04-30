module.exports = {
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:deprecation/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["prettier", "@typescript-eslint", "filenames"],
  rules: {
    "node/no-missing-import": "off",
    eqeqeq: ["error"],
    "@typescript-eslint/no-shadow": 2,
    semi: ["error", "always"],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "filenames/match-regex": [2, "^[a-z][a-z0-9.-]*$"],
    "filenames/match-exported": [2, "kebab"],
  },
  root: true,
};
