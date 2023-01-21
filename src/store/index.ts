import type { App } from 'vue';
import { createPinia } from 'pinia';

export default function setupStore(app: App) {
  const store = createPinia();
  app.use(store);
}
