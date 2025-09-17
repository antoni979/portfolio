<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { ArrowLeft, Github, ExternalLink, AlertTriangle, Lightbulb, Wrench } from 'lucide-vue-next';
import { projectsData } from '../data/projects.js';
import MediaCarousel from '../components/MediaCarousel.vue'; // 1. Importamos el carrusel

const props = defineProps({ slug: { type: String, required: true } });
const project = computed(() => projectsData.find(p => p.slug === props.slug));
</script>

<template>
  <div v-if="project" class="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
    
    <div v-scroll-animation>
      <RouterLink to="/#proyectos" class="text-gray-400 hover:text-white inline-flex items-center gap-2 mb-8 transition-colors">
        <ArrowLeft :size="16" />
        Volver a Proyectos
      </RouterLink>
    </div>
    
    <header v-scroll-animation class="mb-12">
      <h1 class="text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
        {{ project.title }}
      </h1>
      <p class="text-xl text-gray-400">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2 mt-6">
        <span v-for="tag in project.tags" :key="tag" class="bg-white/10 text-gray-300 text-sm font-medium px-3 py-1.5 rounded-full">{{ tag }}</span>
      </div>
    </header>
    
    <!-- 2. REEMPLAZAMOS LA SECCIÓN DE IMÁGENES POR NUESTRO CARRUSEL -->
    <section v-scroll-animation class="mb-16">
      <MediaCarousel :media="project.media" />
    </section>
    
    <section v-scroll-animation class="max-w-none text-gray-200/80">
      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <h2 class="text-3xl font-bold text-white mb-4 inline-flex items-center gap-3"><AlertTriangle class="text-yellow-400" />El Problema</h2>
          <p>{{ project.details.problem }}</p>
          <h2 class="text-3xl font-bold text-white mt-8 mb-4 inline-flex items-center gap-3"><Lightbulb class="text-green-400" />La Solución</h2>
          <p>{{ project.details.solution }}</p>
        </div>
        <div>
          <h3 class="text-3xl font-bold text-white mb-4 inline-flex items-center gap-3"><Wrench class="text-blue-400" />Desafíos Técnicos</h3>
          <p>{{ project.details.challenges }}</p>
        </div>
      </div>
    </section>
    
    <footer v-scroll-animation class="mt-16 pt-8 border-t border-white/10">
      <!-- ... (contenido del footer se queda igual) ... -->
    </footer>
  </div>
  
  <div v-else class="text-center py-20">
    <h1 class="text-3xl font-bold">Proyecto no encontrado</h1>
    <RouterLink to="/" class="mt-4 inline-block text-purple-400 hover:underline">Volver al inicio</RouterLink>
  </div>
</template>