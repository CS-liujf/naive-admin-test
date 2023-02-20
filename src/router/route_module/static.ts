import { RouteRecordRaw } from 'vue-router';

export const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/me',
    component: () => import('@/layout/layout.vue'),
    children: [
      {
        path: 'me',
        component: () => import('@/views/user-center/UserCenter.vue'),
      }],
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue'),
  },
  {
    path: '/register',
    component: () => import('@/views/register/register.vue'),
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/error-page/404.vue'),
  },
];

export const whiteList = ['/login', '/register']; // 不需要重定向的界面
