import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './routes'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import { createPinia } from 'pinia'
import 'vue-loading-overlay/dist/css/index.css'
import { LoadingPlugin } from 'vue-loading-overlay'
import ToastPlugin, { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css'

const pinia = createPinia();
const toast = useToast();

const app = createApp(App).use(router).use(pinia).use(LoadingPlugin).use(ToastPlugin);

app.config.errorHandler = ((err: any) => {
    if (typeof err === "string")
        toast.error(err, {position: "top-right"});
    else if (err.data.message !== undefined)
        toast.error(err.data.message, {position: "top-right"});
    else
        toast.error(err, {position: "top-right"});
});

app.mount('#app');