import { createApp } from 'vue';
import App from './startAuth.vue';
import router from '@/router/routers.js';

createApp(App)
    .use(router)
    .mount('#app');