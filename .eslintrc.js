/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: ['jest', '@typescript-eslint', 'no-async-foreach'],

  extends: [
    'next/core-web-vitals',
    'airbnb-base',
    'plugin:jest/all',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],

  env: {
    jest: true,
  },

  rules: {
    // TypeScript-specific rules
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',

    // Async/Promise-related rules
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-floating-promises': 2,

    // Async handling rules
    'no-async-foreach/no-async-foreach': 'error',
    'no-await-in-loop': 'error',
    'no-promise-executor-return': 'error',
    'require-atomic-updates': 'error',
    'no-return-await': 'error',
    'prefer-promise-reject-errors': 'error',

    'no-console': 2,
    'no-shadow': 'off',
    'no-useless-constructor': 0,
    'no-use-before-define': 'off',

    // Import-related rules
    'import/no-extraneous-dependencies': [
      'off',
      {
        devDependencies: ['**/*.test.ts', 'esbuild-plugins.js'],
      },
    ],
    // Ensure absolute imports are used for alias paths
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          '../*', // Discourage relative imports outside of the current directory
          './*', // Discourage same-directory relative imports
        ],
      },
    ],
    'import/no-unresolved': [
      2,
      {
        commonjs: true,
        amd: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',

    // Jest-related rules
    'jest/prefer-spy-on': 'off',

    // Code formatting and style rules
    'max-len': [
      'error',
      {
        code: 150,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'lines-between-class-members': 'off',
    'jest/no-hooks': [
      'error',
      {
        allow: ['beforeEach'],
      },
    ],
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-useless-constructor': 0,
  },

  // File-specific overrides
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'explicit',
            overrides: {
              accessors: 'explicit',
              constructors: 'off',
              methods: 'explicit',
              properties: 'explicit',
              parameterProperties: 'explicit',
            },
          },
        ],
        '@typescript-eslint/explicit-function-return-type': 2,
      },
    },
    {
      files: ['*.tsx'],
      rules: {
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
      },
    },

    {
      files: ['jest.config.js'],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
      alias: {
        map: [
          ['@app', './app'],
          ['@components', './components'],
          ['@tests', './__tests__'],
          ['@utils/*', './utils/*'],
        ],
        extensions: ['.ts', '.js'],
      },
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};
