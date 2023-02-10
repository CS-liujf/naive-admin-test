import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

import userModule from './api/user-mock';
// @ts-ignore
// const modules = import.meta.globEager('./**/*.ts');

export function setupProdMockServer() {
  createProdMockServer([...userModule]);
}
