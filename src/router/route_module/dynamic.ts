import { RouteRecordRaw } from 'vue-router';
import layout from '@/layout/layout.vue';

export const dynamicRoutes: Array<RouteRecordRaw> = [
    {
        path: '/test1',
        component: layout,
        meta: { title: 'test1页面', roles: ['admin'] as Array<string> },
        children: [
            {
                path: 'home',
                component: () => import('@/views/home.vue'),
                meta: {
                    title: '主页',
                    roles: ['admin'] as Array<string>,
                    icon: '笔记本电脑'
                }
            },
            {
                path: 'a',
                component: () => import('@/views/a.vue'),
                meta: {
                    title: 'a 页面',
                    roles: ['admin'] as Array<string>,
                    icon: '笔记本电脑'
                }
            },
        ],
    },
    {
        path: '/test2',
        component: layout,
        meta: { title: 'test2页面', roles: ['admin'] as Array<string> },
        children: [
            {
                path: 'home',
                component: () => import('@/views/home.vue'),
                meta: { title: '主页', roles: ['admin'] as Array<string> },
            },
            {
                path: 'a',
                component: () => import('@/views/a.vue'),
                meta: { title: 'a 页面', roles: ['admin'] as Array<string> },
            },
        ],
    },
    {
        path: '/test3',
        component: layout,
        meta: { title: 'test3页面', roles: ['admin'] as Array<string> },
    },
];
