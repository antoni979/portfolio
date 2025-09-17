// src/directives/scrollAnimation.js

// Creamos un Intersection Observer que vigilará los elementos
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Si el elemento está visible en la pantalla...
    if (entry.isIntersecting) {
      // Le añadimos la clase 'is-visible' para activar la animación CSS
      entry.target.classList.add('is-visible');
    }
  });
}, {
  threshold: 0.2 // La animación se activa cuando el 20% del elemento es visible
});

// Exportamos la directiva para poder usarla en nuestra app
export const scrollAnimation = {
  // 'mounted' es un hook que se ejecuta cuando el elemento se añade al DOM
  mounted(el) {
    // Añadimos la clase inicial para que el elemento esté oculto
    el.classList.add('scroll-animation');
    // Le decimos al observer que empiece a vigilar este elemento
    observer.observe(el);
  }
};