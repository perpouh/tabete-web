import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import http from './http'

// import 'musubii/src/scss/musubii.scss'

const app = createApp(App)
app.use(router)
app.use(http);
app.mount('#app')