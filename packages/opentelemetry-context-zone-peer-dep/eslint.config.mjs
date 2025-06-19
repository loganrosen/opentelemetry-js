/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// @ts-check

import rootConfig from '../../eslint.base.mjs';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
  ...rootConfig,
  {
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.mocha,
        ...globals.browser,
        ...globals.commonjs,
        Zone: 'readonly',
      },
    },
  },
  {
    ignores: ['build/'],
  }
);
