import { ref, onMounted, onUnmounted } from 'vue';

export function useMouseGlow() {
  const x = ref(0);
  const y = ref(0);

  // CORRECCIÓN: Usamos clientX y clientY para la posición relativa a la ventana
  const update = (event) => {
    x.value = event.clientX;
    y.value = event.clientY;
  };

  onMounted(() => window.addEventListener('mousemove', update));
  onUnmounted(() => window.removeEventListener('mousemove', update));

  return { x, y };
}