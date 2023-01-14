import { createApp } from 'vue';
import setupRouter from '@/router';
import App from './App.vue';
import setupStore from './store';
// 全局注册svg组件
import 'virtual:svg-icons-register';

const app = createApp(App);
// 初始化pinia
setupStore(app);
// 初始化路由
setupRouter(app);
app.mount('#app');
