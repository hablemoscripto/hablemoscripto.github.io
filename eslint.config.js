import js from '@eslint/js';
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

  // Project-wide settings
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
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

  // Prettier compat — disables rules that conflict with Prettier (must be last)
  eslintConfigPrettier
);
