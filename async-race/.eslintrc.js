module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['airbnb-base'],
    plugins: ['@typescript-eslint'],
    rules: {
        'import/extensions': ['error', 'ignorePackages', {
            ts: 'never',
        }],
    },
};
