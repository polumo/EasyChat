import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  unocss: true, // 该选项需配置uno.config.ts
  rules: {
    'style/jsx-self-closing-comp': 'error',
    'antfu/top-level-function': 'off',
    'unicorn/consistent-function-scoping': 'off',
  },
})
