import { createApp } from 'vue';
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

import './assets/style.css';
import App from './App.vue';

const app = createApp(App);
app.use(ToastPlugin);
app.mount('#app');