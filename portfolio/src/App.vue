<template>
  <router-view v-slot="{ Component }">
    <!-- 
      Hemos cambiado el nombre de la transición a 'page-transition'
      para que sea más descriptivo.
    -->
    <transition name="page-transition" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
/* 
  NUEVOS ESTILOS PARA UNA TRANSICIÓN MÁS SOFISTICADA
  Ahora combinamos opacidad y transformación para un efecto más suave.
*/

/* --- Animación de entrada --- */
.page-transition-enter-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}
.page-transition-enter-from {
  opacity: 0;
  transform: translateY(10px); /* Empieza 10px abajo */
}
.page-transition-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* --- Animación de salida --- */
.page-transition-leave-active {
  transition: opacity 0.3s ease-in, transform 0.3s ease-in;
}
.page-transition-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.page-transition-leave-to {
  opacity: 0;
  transform: translateY(-10px); /* Sale 10px hacia arriba */
}
</style>