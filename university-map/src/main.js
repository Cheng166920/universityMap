import { createApp } from 'vue'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
//import persistPlugin from 'pinia-plugin-persistedstore'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
const pinia = createPinia()
pinia.use(persist)
//pinia.use(persistPlugin)
app.use(pinia)
app.use(router)

app.mount('#app')
