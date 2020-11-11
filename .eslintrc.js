module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'react/destructuring-assignment': ['warn'],
    'no-unused-vars': ['warn'],
    'no-use-before-define': 'off',
    'jsx-quotes': ['warn', 'prefer-single'],
    'import/extensions': ['off'],
    'import/no-unresolved': ['off'],
    'jsx-a11y/label-has-associated-control': ['off'],
    'react/self-closing-comp': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'import/prefer-default-export': ['off'],
    'react/no-unused-prop-types': ['warn'],
  },
};
