// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import vuePlugin from 'eslint-plugin-vue';
import markdownPlugin from '@eslint/markdown';
import * as mdxPlugin from 'eslint-plugin-mdx';
import jsoncPlugin from 'eslint-plugin-jsonc';
import ymlPlugin from 'eslint-plugin-yml';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  // Base
  {
    ignores: [
      'dist/',
      'coverage/',
      '.vitepress/cache/',
      'node_modules/'
    ]
  },

  // JS defaults
  js.configs.recommended,

  // TypeScript (applies to .ts/.tsx and script blocks)
  ...tseslint.configs.recommendedTypeChecked.map(c => ({
    ...c,
    files: ['**/*.ts', '**/*.tsx', '**/*.vue']
  })),
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
        ecmaVersion: 2023,
        sourceType: 'module'
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      // imports + TS
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
    },
    settings: {
      'import/resolver': {
        typescript: true
      }
    }
  },

  // Vue (SFC script + template via vue-eslint-parser)
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vuePlugin.parsers['vue-eslint-parser'],

      parserOptions: {
        parser: tseslint.parser,
        project: ['./tsconfig.json'],
        extraFileExtensions: ['.vue']
      }
    },
    plugins: {
      vue: vuePlugin
    },
    rules: {
      ...vuePlugin.configs['recommended'].rules,
    }
  },

  // JSON / JSONC
  {
    files: ['**/*.json', '**/*.jsonc'],
    languageOptions: { parser: jsoncPlugin.parser },
    plugins: { jsonc: jsoncPlugin },
    rules: {
      ...jsoncPlugin.configs['recommended-with-jsonc'].rules
    }
  },

  // YAML
  {
    files: ['**/*.yml', '**/*.yaml'],
    plugins: { yml: ymlPlugin },
    languageOptions: {
      parser: ymlPlugin.parser
    },
    rules: {
      ...ymlPlugin.configs.standard.rules
    }
  },

  // Markdown (code blocks get linted)
  {
    files: ['**/*.md'],
    plugins: { markdown: markdownPlugin },
    processor: markdownPlugin.processors.markdown
  },

  // MDX
  //  - The 'mdx/remark' processor lets ESLint parse code in MDX fences/expressions
  //  - We also target .mdx directly for linting
  {
    files: ['**/*.mdx'],
    plugins: { mdx: mdxPlugin },
    processor: mdxPlugin.processors.remark
  },

  // Import rules (works with TS resolver)
  ...compat.extends('plugin:import/recommended'),

  // Turn off ESLint rules that conflict with Prettier
  ...compat.extends('prettier')
];
