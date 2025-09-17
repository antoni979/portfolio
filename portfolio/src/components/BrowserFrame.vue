<script setup>
// Este es un componente "presentacional" puro.
// No necesita lógica de JavaScript, solo estructura (template).
// Su única misión es mostrar un marco y renderizar cualquier contenido
// que se le pase a través de la etiqueta <slot>.
</script>

<template>
  <!-- 
    Contenedor principal del marco. 
    Define el borde, las esquinas redondeadas, la sombra y un fondo sutil.
    'overflow-hidden' es importante para que el contenido de dentro no se salga de las esquinas redondeadas.
  -->
  <div class="border border-white/10 bg-gray-900/30 rounded-xl shadow-2xl shadow-purple-900/10 overflow-hidden">
    
    <!-- Barra superior de la "ventana del navegador" -->
    <div class="bg-gray-800/50 p-3 flex items-center gap-2 rounded-t-lg border-b border-white/10">
      <!-- Los tres "botones" de control de ventana (rojo, amarillo, verde) -->
      <div class="w-3 h-3 bg-red-500 rounded-full"></div>
      <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
      <div class="w-3 h-3 bg-green-500 rounded-full"></div>
    </div>
    
    <!-- 
      Área de contenido.
      La etiqueta <slot> es un marcador de posición especial de Vue.
      Aquí es donde se insertará la imagen (o cualquier otro elemento)
      que coloques entre <BrowserFrame>...</BrowserFrame> en el componente padre.
    -->
    <div class="p-2 bg-black/20 rounded-b-lg">
      <slot></slot>
    </div>

  </div>
</template>