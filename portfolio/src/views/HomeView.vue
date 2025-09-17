<script setup>
import { RouterLink } from 'vue-router';
import { ArrowRight, Mail, Linkedin, Github } from 'lucide-vue-next';
import { projectsData } from '../data/projects.js';
import { getImageUrl } from '../utils/assetHelper.js';

const projects = projectsData;
</script>

<template>
  <div class="max-w-5xl mx-auto p-4 sm-p-6 lg:p-8">
    
    <!-- HERO SECTION -->
    <section class="min-h-screen flex flex-col justify-center items-center text-center">
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
    </section>

    <!-- PROJECTS SECTION -->
    <section id="proyectos" class="py-20 space-y-24">
      <h3 class="text-5xl font-bold text-center mb-16">
        Proyectos Destacados
      </h3>

      <div v-for="(project, index) in projects" :key="project.slug" 
           class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        <div :class="['group', index % 2 === 0 ? 'md:order-1' : 'md:order-2']">
          <RouterLink :to="`/proyectos/${project.slug}`">
            <img :src="getImageUrl(project.images[0])" :alt="`Vista previa de ${project.title}`" 
                 class="rounded-xl border border-white/10 shadow-2xl shadow-purple-900/10 
                        transition-transform duration-500 group-hover:scale-105" />
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

    <!-- CONTACTO / FOOTER -->
    <footer id="contacto" class="text-center py-20">
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
</template>