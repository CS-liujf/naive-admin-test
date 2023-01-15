import { RouteRecordRaw } from 'vue-router';
import login from '@/views/login.vue';

export const staticRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: login,
    },

];