import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { staticRoutes as routes } from './route_module/static'
import { App } from 'vue';
import { setBeforeEach } from './route_module/guard';

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default function setupRouter(app: App) {
  setBeforeEach(router)
  app.use(router);
}
