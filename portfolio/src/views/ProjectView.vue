<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { ArrowLeft, Github, ExternalLink } from 'lucide-vue-next';
import { projectsData } from '../data/projects.js';
import { getImageUrl } from '../utils/assetHelper.js';

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const project = computed(() => {
  return projectsData.find(p => p.slug === props.slug);
});
</script>

<template>
  <div v-if="project" class="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
    <RouterLink to="/#proyectos" class="text-gray-400 hover:text-white inline-flex items-center gap-2 mb-8 transition-colors">
      <ArrowLeft :size="16" />
      Volver a Proyectos
    </RouterLink>
    
    <header class="mb-12">
      <h1 class="text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
        {{ project.title }}
      </h1>
      <p class="text-xl text-gray-400">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2 mt-6">
        <span v-for="tag in project.tags" :key="tag" class="bg-white/10 text-gray-300 text-sm font-medium px-3 py-1.5 rounded-full">{{ tag }}</span>
      </div>
    </header>
    
    <section class="mb-16">
      <div class="grid grid-cols-1 gap-4">
        <img v-for="(img, index) in project.images" :key="index" :src="getImageUrl(img)" :alt="`Captura de pantalla de ${project.title} ${index + 1}`"
             class="rounded-xl border border-white/20 shadow-lg" />
      </div>
    </section>
    
    <section class="max-w-none text-gray-200/80">
      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <h2 class="text-3xl font-bold text-white mb-4">El Problema</h2>
          <p>{{ project.details.problem }}</p>
          <h2 class="text-3xl font-bold text-white mt-8 mb-4">La Solución</h2>
          <p>{{ project.details.solution }}</p>
        </div>
        <div>
          <h3 class="text-3xl font-bold text-white mb-4">Desafíos Técnicos</h3>
          <p>{{ project.details.challenges }}</p>
        </div>
      </div>
    </section>
    
    <footer class="mt-16 pt-8 border-t border-white/10">
      <div class="flex items-center gap-6">
        <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2">
          Ver Demo en Vivo <ExternalLink :size="20" />
        </a>
        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
          <Github :size="20" /> Código Fuente
        </a>
        <p v-if="!project.liveUrl && !project.githubUrl" class="text-gray-400 italic">Los enlaces a este proyecto son privados por confidencialidad.</p>
      </div>
    </footer>
  </div>
  
  <div v-else class="text-center py-20">
    <h1 class="text-3xl font-bold">Proyecto no encontrado</h1>
    <RouterLink to="/" class="mt-4 inline-block text-purple-400 hover:underline">Volver al inicio</RouterLink>
  </div>
</template>