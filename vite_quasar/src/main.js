import { createApp } from 'vue'

//퀘이사 추가
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import router from './router';
import store from './store'

// console.log('main.js : ', import.meta.env.VITE_TEST_KEY);

import App from './App.vue'
const myApp = createApp(App);
myApp.use(Quasar, {
  plugins: {}
})
myApp.use(router);
myApp.use(store);
myApp.mount('#app');
