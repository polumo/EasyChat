import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  rules: {
    'style/jsx-self-closing-comp': 'error',
    'antfu/top-level-function': 'off',
  },
})
