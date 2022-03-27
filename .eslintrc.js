module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard-with-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: { },
  settings: {
    // 安装eslint-import-resolver-typescript后在此配置import/resolver，即可读取项目根目录下tsconfig.json中的路径别名设置
    'import/resolver': {
      typescript: {}
    }
  }
}
