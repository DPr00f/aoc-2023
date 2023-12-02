module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['!.*', '!.storybook', 'node_modules'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'unused-imports'],
  rules: {
    // indent: ['error', 2],
    // 'linebreak-style': ['error', 'unix'],
    // quotes: ['error', 'single'],
    // semi: ['error', 'always'],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'template-curly-spacing': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'no-debugger': 'error',
    'prettier/prettier': 'error',
    'no-duplicate-imports': 0,
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    'no-unused-vars': 'off',
    // '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'import/no-unresolved': 'error',
    'import/no-named-as-default-member': 0,
    'import/first': 'warn',
    'import/newline-after-import': ['warn', { count: 1 }],
    'import/prefer-default-export': 'off',
    'import/group-exports': 'off',
    'import/no-named-as-default': 'off',
    'import/order': [
      'warn',
      {
        pathGroups: [
          {
            pattern: '@solidjs/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@styled-system/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@',
            group: 'internal',
            position: 'before',
          },
        ],
        'newlines-between': 'always-and-inside-groups',
        pathGroupsExcludedImportTypes: ['external'],
        // groups: ['external', 'unknown', 'internal', ['sibling', 'parent'], 'builtin', 'index', 'object', 'type'],
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
      },
    ],
    curly: 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: [
          'block',
          'block-like',
          'class',
          'const',
          'continue',
          'debugger',
          'default',
          'do',
          'empty',
          'for',
          'function',
          'if',
          'iife',
          'import',
          'let',
          'return',
          'switch',
          'throw',
          'try',
          'var',
          'while',
          'with',
        ],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var', 'import', 'export'],
        next: ['const', 'let', 'var', 'import', 'export'],
      },
      {
        blankLine: 'always',
        prev: ['*'],
        next: ['return'],
      },
    ],
    // '@typescript-eslint/ban-types': [
    //   'error',
    //   {
    //     'extendDefaults': true,
    //     'types': {
    //       '{}': false
    //     }
    //   }
    // ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    typescript: {
      alwaysTryTypes: true,
      project: './tsconfig.json',
    },
  },
  // },
};
