module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    plugins: ['@typescript-eslint', 'react', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'react/boolean-prop-naming': [
            'error',
            {
                rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
                message:
                    'It is better if your prop ({{ propName }}) matches this pattern: ({{ pattern }})',
            },
        ],
        'react/prop-types': 'off',
        'react/destructuring-assignment': ['error'],
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: true,
            },
        ],
        'react/sort-prop-types': [
            'error',
            {
                callbacksLast: true,
                ignoreCase: true,
                requiredFirst: true,
            },
        ],
        'react/jsx-tag-spacing': [
            'error',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never',
                beforeClosing: 'never',
            },
        ],
        'react/jsx-curly-brace-presence': ['error'],
        '@typescript-eslint/explicit-function-return-type': 'error',
        'prettier/prettier': 'error',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'react/react-in-jsx-scope': 'off',
    },
    globals: { React: 'writable' },
};
