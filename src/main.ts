import { createApp } from 'vue'
import App from './App.vue'
import setupStore from './store'

const app = createApp(App)
// 初始化pinia
setupStore(app)
app.mount('#app')
