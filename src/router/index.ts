import { createRouter, createWebHashHistory } from 'vue-router';
import { App } from 'vue';
import { staticRoutes as routes } from './route_module/static';
import { setBeforeEach } from './route_module/guard';

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default function setupRouter(app: App) {
  setBeforeEach(router);
  app.use(router);
}
