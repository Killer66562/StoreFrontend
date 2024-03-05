import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './routes'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

createApp(App).use(router).mount('#app');
