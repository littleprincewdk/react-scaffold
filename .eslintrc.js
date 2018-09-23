module.exports = {
    "parser": "babel-eslint",
    env: {
        "jest/globals": true,
    },
    extends: ['airbnb', 'plugin:jest/recommended'],
    plugins: ['jest'],
    globals: {
      document: true,
    },
    rules: {
        "linebreak-style": 'off',
    },
};
