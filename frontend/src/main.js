import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/router/index'
import vSelect from 'vue-select'
import naive from "naive-ui";

createApp(App)
.use(store)
.use(router)
.use(naive)
.use('v-select', vSelect)
.mount('#app')
