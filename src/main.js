import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueViewer from 'v-viewer'
import App from './App.vue'
import router from './router'

import './style/index.css'
import './style/app.css'
import 'animate.css'
import 'aos/dist/aos.css'
import 'viewerjs/dist/viewer.css'
import Vue3VideoPlayer from '@cloudgeek/vue3-video-player'
import '@cloudgeek/vue3-video-player/dist/vue3-video-player.css'

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .use(VueViewer)
  .use(Vue3VideoPlayer)
  .mount('#app')
