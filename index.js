module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true
    }
  },
  rules: {
    /**
     * Force order of imports to be alphabetical asc
     * Imports get grouped into 5 sets, with a newline between each group
     */
    'import/order': ['error', {
      alphabetize: {
        order: 'asc',
        caseInsensitive: false
      },
      groups: [
        ['builtin', 'external'],
        'internal',
        'parent',
        'sibling',
        'index'
      ],
      pathGroupsExcludedImportTypes: ['type'],
      pathGroups: [
        {
          pattern: '+(@|@core|~|src)/**',
          group: 'internal'
        }
      ],
      'newlines-between': 'always'
    }],
    indent: 'off',
    // @see https://github.com/typescript-eslint/typescript-eslint/issues/1824
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: [
          'FunctionExpression > .params[decorators.length > 0]',
          'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
          'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key'
        ]
      }
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', {
      ignoreTypeReferences: true
    }],
    // imports that are interface/type/etc should be type imports
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-unused-vars': ['error', {
      vars: 'all',
      args: 'none'
    }],
    // allow template literals with no vars
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    // error in callback
    'standard/no-callback-literal': 0,
    // trailing semicolon
    semi: ['error', 'always']
  }
};
