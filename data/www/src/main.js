import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'musubii/src/scss/musubii.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')
