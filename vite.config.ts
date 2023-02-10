import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 下面这两行引入是为了自动解析模板中的使用到的组件，并导入组件
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';
// svg 组件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// 下面这个插件可以给index.html注入内容
import { createHtmlPlugin } from 'vite-plugin-html';
// 下面这个插件用于可视化打包后各个资源占用大小
import { visualizer } from 'rollup-plugin-visualizer';

// 引入mock
import { viteMockServe } from 'vite-plugin-mock';

function pathResolve(dir: string): string {
  return resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
    createSvgIconsPlugin({
      iconDirs: [pathResolve('src/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
    createHtmlPlugin({
      inject: {
        data: {
          // 效果查看index.html中的<title>
          title: 'index',
        },
      },
    }),
    visualizer({
      // npm run dev后会自动生成该html于项目根目录
      filename: '打包分析.html',
      title: '可视化打包分析',
    }),
    viteMockServe({
      mockPath: 'mock',
      watchFiles: true,
      localEnabled: true,
      // prodEnabled: true,
      // injectCode: `
      //     import { setupProdMockServer } from '/mock/mockProdServer';
      //     setupProdMockServer();
      //   `,
    }),
  ],
  resolve: {
    // 设置别名
    alias: [
      { find: '@', replacement: pathResolve('src') },
      { find: 'store', replacement: pathResolve('src') },
    ],
  },
  server: {
    open: true,
    // 如果跨域，在此配置
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
      },
    },
  },
});
