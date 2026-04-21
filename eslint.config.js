import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  // Global ignores
  {
    ignores: ['dist/', 'node_modules/', 'supabase/functions/', 'public/'],
  },

  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript recommended rules (NOT strict — avoid breaking existing code)
  ...tseslint.configs.recommended,

  // React Hooks plugin
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },

  // Project-wide settings (browser globals by default)
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // Node globals for build/CLI scripts — these run under node, not the browser,
  // so `console`, `process`, and `__dirname` are ambient.
  {
    files: ['scripts/**/*.{js,mjs,ts}', 'vite.config.*', 'eslint.config.*'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },

  // Prettier compat — disables rules that conflict with Prettier (must be last)
  eslintConfigPrettier
);
