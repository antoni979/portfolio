import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectView from '../views/ProjectView.vue';

const router = createRouter({
  // ESTA ES LA LÍNEA CORREGIDA
  // Le pasamos la URL base que nos da Vite.
  // Esto hace que el router sepa distinguir entre las rutas de la app y los archivos estáticos.
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    { 
      path: '/', 
      name: 'home', 
      component: HomeView 
    },
    { 
      path: '/proyectos/:slug', 
      name: 'project', 
      component: ProjectView, 
      props: true
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;