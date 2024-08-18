<template>
  <nav aria-label="Page navigation example" class="">
    <ul class="inline-flex -space-x-px text-base h-10 cursor-pointer select-none">
      <li @click="previousPage" :class="{ 'cursor-not-allowed opacity-50': currentPage === 1 }">
        <div
            class="flex items-center justify-center px-3 h-10 sm:px-4 sm:h-16 leading-tight text-gray-300 border border-e-0 bg-orange-500 rounded-s-lg hover:bg-gray-600 hover:text-white">
          <
        </div>
      </li>
      <li v-for="page in pages" :key="page" @click="selectPage(page)">
        <div :class="getPageClasses(page)"
             class="flex items-center justify-center px-3 h-10 sm:px-4 sm:h-16 leading-tight border bg-amber-500">
          {{ page }}
        </div>
      </li>
      <li @click="nextPage" :class="{ 'cursor-not-allowed opacity-50': currentPage === pages.length }">
        <div
            class="flex items-center justify-center px-3 h-10 sm:px-4 sm:h-16 leading-tight text-gray-300 border bg-orange-500 rounded-e-lg hover:bg-gray-600 hover:text-white">
          >
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue';

// Recibe la lista de páginas como prop
const props = withDefaults(defineProps<{ totalPages: number }>(),
    {
      totalPages: 4
    });

// Estado para la página actual seleccionada
const currentPage = ref<number>(1);

// Computed property para generar la lista de páginas
const pages = computed(() => Array.from({length: props.totalPages}, (_, i) => i + 1));

// Función para seleccionar una página
function selectPage(page: number) {
  currentPage.value = page;
  emitPageSelected(page);
}

// Función para pasar a la página anterior
function previousPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
    emitPageSelected(currentPage.value);
  }
}

// Función para pasar a la página siguiente
function nextPage() {
  if (currentPage.value < props.totalPages) {
    currentPage.value++;
    emitPageSelected(currentPage.value);
  }
}

// Función para emitir el evento con la página seleccionada
function emitPageSelected(page: number) {
  emit('page-selected', page);
}

// Emitir eventos al componente padre
const emit = defineEmits(['page-selected']);

// Función para obtener las clases de estilo de la página actual
function getPageClasses(page: number) {
  return page === currentPage.value
      ? 'text-white bg-orange-500 hover:bg-orange-600' // Página seleccionada: color destacado
      : 'text-gray-300 bg-orange-400 hover:bg-gray-600 hover:text-white'; // Páginas no seleccionadas: fondo oscuro
}
</script>

<style scoped>
/* Añadir scroll horizontal y reducir el tamaño de los botones en pantallas pequeñas */
@media (max-width: 640px) {
  .h-10 {
    height: 40px;
  }

  .px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}
</style>
