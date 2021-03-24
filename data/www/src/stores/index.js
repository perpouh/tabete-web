import { createStore } from 'vuex'
import VuexPersistedstate from "vuex-persistedstate";
import auth from './auth';
const store = createStore({
  modules: {
    auth
  },
  plugins: [
    VuexPersistedstate({
      key: 'tabete',
      paths: ['auth'],
      storage: window.localStorage
    }),
  ]
})

export default store