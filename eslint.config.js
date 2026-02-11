import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";

export default [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "dist/**",
      "build/**",
      ".git/**"
    ]
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        React: "readonly",
        JSX: "readonly",
        gsap: "readonly"
      }
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      "@next/next": nextPlugin,
      import: importPlugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      ...typescriptPlugin.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index"
          ],
          "newlines-between": "always"
        }
      ],
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off"
    },
    settings: {
      "import/resolver": {
        typescript: {}
      }
    }
  }
];
