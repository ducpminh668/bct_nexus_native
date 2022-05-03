module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'no-shadow': 'off',
    'react-native/no-inline-styles': 'off',
    'prettier/prettier': 'off',
  },
  settings: {
    'import/resolver': {
      'node': {
        'paths': ['src'],
      },
    },
  },
};
