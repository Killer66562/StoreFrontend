import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './routes'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import { createPinia } from 'pinia'
import 'vue-loading-overlay/dist/css/index.css'
import { LoadingPlugin } from 'vue-loading-overlay';

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(LoadingPlugin).mount('#app');