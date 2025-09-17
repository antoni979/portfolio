// src/utils/assetHelper.js

export function getImageUrl(name) {
  // Esta es una función especial de Vite.
  // Le pasamos la ruta relativa de la imagen y nos devuelve la URL pública final.
  return new URL(`../assets/images/${name}`, import.meta.url).href;
}