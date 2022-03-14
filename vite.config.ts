import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 下面这两行引入是为了自动解析模板中的使用到的组件，并导入组件
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'


function pathResolve(dir: string): string {
  return resolve(__dirname, dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ],
  resolve: {
    // 设置别名
    alias: [
      { find: '@', replacement: pathResolve('src') }
    ]
  },
  server: {
    open: true
    //如果跨域，在此配置
    // proxy: {
    //   '/api': {
    //     target: 'https://your.url'
    //   }
    // }
  }
})
