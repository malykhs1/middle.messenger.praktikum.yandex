    module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    "prettier",
  ],
  rules: {
    'no-underscore-dangle': ['off', { allow: ['_id'] }],
    'consistent-return': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
  },
};
