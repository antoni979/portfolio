<script setup>
import { RouterLink } from 'vue-router';
import { ArrowRight, Mail, Linkedin, Github, ChevronDown } from 'lucide-vue-next';
import { projectsData } from '../data/projects.js';
import { getImageUrl } from '../utils/assetHelper.js';
import BrowserFrame from '../components/BrowserFrame.vue';
import { useMouseGlow } from '../composables/useMouseGlow.js';

const { x, y } = useMouseGlow();
const projects = projectsData;
</script>

<template>
  <div>
    <!-- HERO SECTION -->
    <!-- El contenedor de la sección ahora es solo un marco de referencia de altura -->
    <section 
      class="min-h-screen relative overflow-hidden"
      :style="{
        '--mouse-x': `${x}px`,
        '--mouse-y': `${y}px`,
      }"
    >
      <!-- CAPA DEL FOCO - AHORA FIJA A LA PANTALLA COMPLETA -->
      <div 
        class="fixed inset-0 z-0 transition-all duration-300 pointer-events-none" 
        :style="{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(120, 119, 198, 0.15), transparent 80%)`
        }"
      ></div>

      <!-- CONTENEDOR DEL CONTENIDO - CENTRADO Y ENCIMA DEL FOCO -->
      <div class="relative z-10 min-h-screen flex flex-col justify-center items-center text-center max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        <h1 class="text-6xl sm:text-8xl font-extrabold tracking-tight mb-4
                   bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 
                   text-transparent bg-clip-text animate-gradient-text">
          Antoni Sanchez
        </h1>
        <h2 class="text-2xl sm:text-3xl text-gray-400 mb-8">
          Desarrollador Full-Stack & Creador de Soluciones Digitales
        </h2>
        <p class="max-w-2xl text-lg text-gray-200/80 mb-10">
          Apasionado por transformar ideas complejas en soluciones de software elegantes, eficientes y escalables. Bienvenido a mi universo digital.
        </p>
        <a href="#proyectos" 
           class="bg-white text-black font-semibold px-8 py-4 rounded-full 
                  hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
          Explorar mis Proyectos
        </a>
        
        <a href="#proyectos" class="absolute bottom-10">
          <ChevronDown class="w-8 h-8 text-gray-600 animate-bounce" />
        </a>
      </div>
    </section>

    <!-- EL RESTO DE LA PÁGINA (Proyectos y Footer) -->
    <div class="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
      <section id="proyectos" class="py-20 space-y-24">
        <h3 v-scroll-animation class="text-5xl font-bold text-center mb-16">
          Proyectos Destacados
        </h3>

        <div v-for="(project, index) in projects" :key="project.slug" v-scroll-animation
             class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          <div :class="['group', index % 2 === 0 ? 'md:order-1' : 'md:order-2']">
            <RouterLink :to="`/proyectos/${project.slug}`">
              <BrowserFrame>
                <img :src="getImageUrl(project.images[0])" :alt="`Vista previa de ${project.title}`" 
                     loading="lazy"
                     class="rounded-lg transition-transform duration-500 group-hover:scale-105" />
              </BrowserFrame>
            </RouterLink>
          </div>
          
          <div :class="index % 2 === 0 ? 'md:order-2' : 'md:order-1'">
            <h4 class="text-3xl font-bold text-white mb-4">{{ project.title }}</h4>
            <p class="text-gray-400 text-lg mb-6">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tag in project.tags" :key="tag" 
                    class="bg-white/10 text-gray-300 text-sm font-medium px-3 py-1.5 rounded-full">
                {{ tag }}
              </span>
            </div>
            <RouterLink :to="`/proyectos/${project.slug}`" 
                        class="font-semibold text-white inline-flex items-center gap-2 group">
              Ver Caso de Estudio 
              <ArrowRight class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </RouterLink>
          </div>
        </div>
      </section>

      <footer id="contacto" class="text-center py-20" v-scroll-animation>
        <h2 class="text-5xl font-bold mb-4">Hablemos</h2>
        <p class="max-w-xl mx-auto text-lg text-gray-400 mb-10">
          ¿Tienes una idea o un proyecto en mente? Me encantaría escucharlo. 
          Mi bandeja de entrada está siempre abierta.
        </p>
        <div class="flex justify-center items-center gap-8 mb-16">
          <a href="mailto:tu-email@ejemplo.com" class="text-gray-400 hover:text-white transition-colors"><Mail :size="32" /></a>
          <a href="[URL_DE_TU_LINKEDIN]" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors"><Linkedin :size="32" /></a>
          <a href="[URL_DE_TU_GITHUB]" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors"><Github :size="32" /></a>
        </div>
        <p class="text-sm text-gray-400">Diseñado y desarrollado por Antoni Sanchez.</p>
      </footer>
    </div>
      
  </div>
</template>