import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import http from './http'

import 'musubii/src/scss/musubii.scss'
require('@/assets/scss/application.scss')

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSearch, faEdit, faBell, faCog } from '@fortawesome/free-solid-svg-icons'
// import { faComment } from '@fortawesome/free-regular-svg-icons'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(
  faHome,
  faSearch,
  faEdit,
  faBell,
  faCog
)

const app = createApp(App)
app.use(router)
app.use(http);
app.mount('#app')