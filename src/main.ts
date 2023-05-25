import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import App from './App.vue'

import { pinia } from './store'
import { router } from './routes'

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
