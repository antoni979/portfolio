<script setup>
import { ref, computed } from 'vue';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
import { getImageUrl } from '../utils/assetHelper.js';

const props = defineProps({
  media: {
    type: Array,
    required: true,
  },
});

// Estado reactivo para saber qué elemento del carrusel está activo
const currentIndex = ref(0);

// Propiedad computada para obtener el objeto del medio actual
const currentMedia = computed(() => props.media[currentIndex.value]);

// Funciones para navegar
const nextMedia = () => {
  currentIndex.value = (currentIndex.value + 1) % props.media.length;
};
const prevMedia = () => {
  currentIndex.value = (currentIndex.value - 1 + props.media.length) % props.media.length;
};
</script>

<template>
  <div class="relative w-full max-w-3xl mx-auto">
    <!-- Contenedor principal del carrusel -->
    <div class="relative h-0 pb-[56.25%] overflow-hidden rounded-xl border border-white/20 shadow-lg bg-black">
      <!-- 
        El 'pb-[56.25%]' crea un aspect ratio de 16:9, perfecto para vídeos.
        La clase 'absolute inset-0' hace que el contenido ocupe todo el espacio.
      -->
      
      <!-- Usamos un <transition> para animar el cambio entre imágenes/vídeos -->
      <transition name="fade" mode="out-in">
        <!-- Renderizamos el medio actual basado en su tipo -->
        <div :key="currentIndex" class="absolute inset-0 w-full h-full">
          <!-- Si es un vídeo, renderiza un iframe -->
          <iframe 
            v-if="currentMedia.type === 'video'"
            :src="currentMedia.src"
            class="w-full h-full"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
          <!-- Si es una imagen, renderiza un <img> -->
          <img 
            v-else 
            :src="getImageUrl(currentMedia.src)" 
            :alt="`Media ${currentIndex + 1}`"
            class="w-full h-full object-cover" 
          />
        </div>
      </transition>
    </div>

    <!-- Controles de Navegación (Flechas) -->
    <button @click="prevMedia" class="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-white/20 transition-all">
      <ChevronLeft :size="32" />
    </button>
    <button @click="nextMedia" class="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-white/20 transition-all">
      <ChevronRight :size="32" />
    </button>

    <!-- Puntos de Navegación -->
    <div class="flex justify-center gap-2 mt-4">
      <button 
        v-for="(item, index) in media" 
        :key="index"
        @click="currentIndex = index"
        :class="['w-3 h-3 rounded-full transition-all', currentIndex === index ? 'bg-white scale-125' : 'bg-gray-600 hover:bg-gray-400']"
      ></button>
    </div>
  </div>
</template>

<style scoped>
/* 
  Reutilizamos la misma animación de fade que usamos para las páginas,
  pero 'scoped' para que solo aplique a este componente.
*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>