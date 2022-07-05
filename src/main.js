import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../src/assets/styles/base.css'
import '../src/api/exit'
// const app = createApp(App)

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
