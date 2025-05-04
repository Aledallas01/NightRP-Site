// eslint.config.js

import eslintPluginReact from "@eslint/plugin-react";

export default {
  // Ambienti predefiniti: browser e ECMAScript 2021
  env: {
    browser: true,
    es2021: true,
  },
  // Parser moderno per ESM e JSX
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  // Plugin e regole di base + React
  plugins: {
    react: eslintPluginReact,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  settings: {
    react: {
      // Rileva automaticamente la versione di React
      version: "detect",
    },
  },
  rules: {
    // Esempio di personalizzazione
    "react/react-in-jsx-scope": "off", // non serve in React 17+
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "react/prop-types": "off"
  },
};
