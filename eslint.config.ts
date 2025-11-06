// eslint.config.js
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import markdownPlugin from '@eslint/markdown';
import jsoncPlugin from 'eslint-plugin-jsonc';
import * as mdxPlugin from 'eslint-plugin-mdx';
import vuePlugin from 'eslint-plugin-vue';
import yamlPlugin from 'eslint-plugin-yml';
import globals from 'globals';
import jsoncParser from 'jsonc-eslint-parser';
import tseslint from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';
import yamlParser from 'yaml-eslint-parser';

const compat = new FlatCompat();

export default [
  // Base
  {
    ignores: ['dist/', 'coverage/', '.vitepress/cache/', 'node_modules/'],
  },

  // JS defaults
  js.configs.recommended,

  // MDX
  //  - The 'mdx/remark' processor lets ESLint parse code in MDX fences/expressions
  //  - We also target .mdx directly for linting
  {
    files: ['**/*.mdx'],
    ...mdxPlugin.configs.recommended,
  },

  // TypeScript (applies to .ts/.tsx and script blocks)
  ...tseslint.configs.recommendedTypeChecked.map((c) => ({
    ...c,
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
  })),
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
        ecmaVersion: 2023,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // imports + TS
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
    settings: {
      'import/resolver': {
        typescript: true,
      },
    },
  },

  // Vue (SFC script + template via vue-eslint-parser)
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,

      parserOptions: {
        parser: tseslint.parser,
        project: ['./tsconfig.json'],
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      vue: vuePlugin,
    },
    rules: {
      ...vuePlugin.configs['recommended'].rules,
    },
  },

  // JSON / JSONC
  {
    files: ['**/*.json', '**/*.jsonc'],
    languageOptions: { parser: jsoncParser },
    plugins: { jsonc: jsoncPlugin },
    rules: {
      ...jsoncPlugin.configs['recommended-with-jsonc'].rules,
    },
  },

  // YAML
  {
    files: ['**/*.yml', '**/*.yaml'],
    plugins: { yml: yamlPlugin },
    languageOptions: {
      parser: yamlParser,
    },
    rules: {
      ...yamlPlugin.configs.standard.rules,
    },
  },

  // Markdown (code blocks get linted)
  {
    files: ['**/*.md'],
    plugins: { markdown: markdownPlugin },
    processor: markdownPlugin.processors.markdown,
  },

  // Import rules (works with TS resolver)
  ...compat.extends('plugin:import/recommended'),

  // Turn off ESLint rules that conflict with Prettier
  ...compat.extends('prettier'),
];
