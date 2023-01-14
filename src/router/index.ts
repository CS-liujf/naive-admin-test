import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import layout from '@/layout/layout.vue';
import { App } from 'vue';

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    component: layout,
    children: [
      {
        path: 'home',
        component: () => import('@/views/home.vue'),
        meta: { title: '主页' },
      },
      {
        path: 'a',
        component: () => import('@/views/a.vue'),
        meta: { title: 'a 页面' },
      },
    ],
  },
];

const route = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default function setupRouter(app:App) {
  app.use(route);
}
