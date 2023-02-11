import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

const apiModules:any[] = [];
const files = import.meta.globEager('./**/*.ts');
Object.keys(files).forEach((key) => {
  // 可根据文件名判断哪些ts文件忽略
  // if (condition) {
  // return;
  // }
  apiModules.push(...files[key].default);
});

export function setupProdMockServer() {
  createProdMockServer([...apiModules]);
}
