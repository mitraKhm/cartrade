
module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
    plugins: [],
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow paren-less arrow functions
        'arrow-parens': 'off',
        'one-var': 'off',
        'no-void': 'off',
        'multiline-ternary': 'off',

        'import/first': 'off',
        'import/named': 'error',
        'import/namespace': 'error',
        'import/default': 'error',
        'import/export': 'error',
        // 'simple-import-sort/imports': 'error',
        // 'simple-import-sort/exports': 'error',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',
        'prefer-promise-reject-errors': 'off',

        "vue/attributes-order": 'error',
        "vue/max-attributes-per-line": 'error',
        "vue/html-indent": 'error',
        "vue/html-closing-bracket-spacing": 'error',
        'vue/multi-word-component-names': 'off',
        'vue/no-v-text-v-html-on-component': 'off',

        // allow debugger during development only
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "space-before-function-paren": 0

    },
}