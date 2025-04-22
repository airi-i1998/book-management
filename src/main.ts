import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { createPinia } from 'pinia'

const vueApp = createApp(App)
const vueAppInit = () => {
  vueApp
    .use(router)
    .use(vuetify)
    .use(createPinia())
    .mount('#app')
}

vueAppInit()