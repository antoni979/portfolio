// src/main.js
import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { scrollAnimation } from './directives/scrollAnimation' // 1. Importamos la directiva

const app = createApp(App)

app.use(router)
app.directive('scroll-animation', scrollAnimation) // 2. La registramos globalmente

app.mount('#app')