import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "dist/**",
      "build/**",
      ".git/**",
      "coverage/**",
      "public/**",
      ".env*"
    ]
  },
  // Main config for TypeScript and JavaScript files
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
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
        // React/Global
        React: "readonly",
        JSX: "readonly",
        gsap: "readonly",
        
        // Node.js
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        global: "readonly",
        module: "readonly",
        require: "readonly",
        exports: "readonly",
        
        // Browser APIs
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        location: "readonly",
        history: "readonly",
        
        // DOM
        HTMLElement: "readonly",
        HTMLDivElement: "readonly",
        HTMLButtonElement: "readonly",
        HTMLHeadingElement: "readonly",
        HTMLParagraphElement: "readonly",
        HTMLVideoElement: "readonly",
        HTMLCanvasElement: "readonly",
        ElementAttr: "readonly",
        Element: "readonly",
        Node: "readonly",
        NodeList: "readonly",
        NodeListOf: "readonly",
        SVGElement: "readonly",
        CSSStyleDeclaration: "readonly",
        DOMRect: "readonly",
        
        // APIs
        fetch: "readonly",
        URL: "readonly",
        URLSearchParams: "readonly",
        Request: "readonly",
        Response: "readonly",
        Headers: "readonly",
        FormData: "readonly",
        
        // Events
        Event: "readonly",
        EventTarget: "readonly",
        MouseEvent: "readonly",
        KeyboardEvent: "readonly",
        TouchEvent: "readonly",
        PointerEvent: "readonly",
        WheelEvent: "readonly",
        CustomEvent: "readonly",
        
        // Observers
        IntersectionObserver: "readonly",
        MutationObserver: "readonly",
        ResizeObserver: "readonly",
        
        // Timers
        requestAnimationFrame: "readonly",
        cancelAnimationFrame: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        setImmediate: "readonly",
        clearImmediate: "readonly",
        
        // Storage
        localStorage: "readonly",
        sessionStorage: "readonly",
        
        // Global Functions
        parseInt: "readonly",
        parseFloat: "readonly",
        isNaN: "readonly",
        isFinite: "readonly",
        decodeURI: "readonly",
        decodeURIComponent: "readonly",
        encodeURI: "readonly",
        encodeURIComponent: "readonly",
        
        // Global Objects
        Array: "readonly",
        Object: "readonly",
        String: "readonly",
        Number: "readonly",
        Boolean: "readonly",
        Date: "readonly",
        RegExp: "readonly",
        Error: "readonly",
        Math: "readonly",
        JSON: "readonly",
        Map: "readonly",
        Set: "readonly",
        WeakMap: "readonly",
        WeakSet: "readonly",
        Promise: "readonly",
        Symbol: "readonly",
        Proxy: "readonly",
        Reflect: "readonly",
        BigInt: "readonly",
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
        
        // Special
        undefined: "readonly",
        Infinity: "readonly",
        NaN: "readonly",
        console: "readonly",
        performance: "readonly",
        Image: "readonly",
        BodyInit: "readonly"
      }
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      "@next/next": nextPlugin,
      import: importPlugin,
      "react-hooks": reactHooksPlugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      ...typescriptPlugin.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
      
      // Relax some rules - TypeScript will catch real issues
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-empty-object-type": "warn",
      "@typescript-eslint/no-require-imports": "off",
      "no-undef": "off",  // Let TypeScript handle this
      
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
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true
          }
        }
      ],
      "import/no-duplicates": "warn",
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off"
    },
    settings: {
      "import/resolver": {
        typescript: {}
      }
    }
  }
];
