// @ts-check

import tsParser from '@typescript-eslint/parser';
import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import nodePlugin from 'eslint-plugin-n';
import licenseHeader from 'eslint-plugin-license-header';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    plugins: {
      'license-header': licenseHeader,
      'n': nodePlugin,
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: null,
      },
    },

    rules: {
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
        },
      ],

      eqeqeq: ['error', 'smart'],
      'prefer-rest-params': 'off',
      'no-console': 'error',
      'no-shadow': 'off',
      'n/no-deprecated-api': ['warn'],

      'license-header/header': [
        'error',
        [
          '/*',
          ' * Copyright The OpenTelemetry Authors',
          ' *',
          ' * Licensed under the Apache License, Version 2.0 (the "License");',
          ' * you may not use this file except in compliance with the License.',
          ' * You may obtain a copy of the License at',
          ' *',
          ' *      https://www.apache.org/licenses/LICENSE-2.0',
          ' *',
          ' * Unless required by applicable law or agreed to in writing, software',
          ' * distributed under the License is distributed on an "AS IS" BASIS,',
          ' * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.',
          ' * See the License for the specific language governing permissions and',
          ' * limitations under the License.',
          ' */',
        ],
      ],
    },
  },
  {
    files: ['**/*.ts'],

    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: './tsconfig.json',
      },
    },

    rules: {
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-this-alias': 'off',

      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'memberLike',
          modifiers: ['private', 'protected'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },
      ],

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          args: 'after-used',
        },
      ],

      '@typescript-eslint/no-inferrable-types': [
        'error',
        {
          ignoreProperties: true,
        },
      ],

      '@typescript-eslint/no-empty-function': ['off'],

      "@typescript-eslint/no-unsafe-function-type": ["warn"],

      '@typescript-eslint/no-shadow': ['warn'],
      'no-restricted-syntax': ['error', 'ExportAllDeclaration'],
      'prefer-rest-params': 'off',
    },
  },
  {
    files: ['test/**/*.ts'],

    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: './tsconfig.json',
      },
    },

    rules: {
      'no-empty': 'off',
      '@typescript-eslint/ban-ts-ignore': 'off',

      "@typescript-eslint/no-unsafe-function-type": ["warn"],

      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-shadow': ['off'],
      '@typescript-eslint/no-floating-promises': ['off'],
      '@typescript-eslint/no-non-null-assertion': ['off'],
      '@typescript-eslint/explicit-module-boundary-types': ['off'],
      'prefer-rest-params': 'off',
    },
  },
  {
    files: ['**/karma.*.js'],

    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    }
  }
);
