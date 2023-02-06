import { RouteRecordRaw } from 'vue-router';

export const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue'),
  },
];

export const whiteList = ['/login', '/register']; // 不需要重定向的界面
