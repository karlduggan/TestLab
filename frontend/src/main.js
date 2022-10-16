import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/router/index'
import vSelect from 'vue-select'

createApp(App)
.use(store)
.use(router)
.use('v-select', vSelect)
.mount('#app')
