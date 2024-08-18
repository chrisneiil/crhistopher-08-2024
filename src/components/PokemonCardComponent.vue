<template>
  <div
      v-if="pokemon"
      class="flex flex-col justify-center items-center  border-black select-none card-pokemon"
      style="border-radius: 40px;"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
      @click="toggleSeleccionado"
      :class="{ 'hovered': isHovered}"
      :style="{ backgroundColor: getBackgroundColor() }"
  >
    <img
        :src="pokemon.sprites.front_default"
        :alt="pokemon.name"
        class="pokemon-image border-black"
    />
    <h2 class="pb-4 text-xl font-bold capitalize">{{ pokemon.name }}</h2>
  </div>
  <div v-else>
    Sin informacion...
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {Pokemon} from '../models/pokemon/Pokemon';

const props = withDefaults(defineProps<{
  pokemon: Pokemon,
  noBgColor?: boolean
}>(), {
  noBgColor: false
});
const emit = defineEmits(['pokemon-selected']);

const isHovered = ref(false);

function toggleSeleccionado() {
  emit('pokemon-selected', props.pokemon);
}

const typeColors: Record<string, string> = {
  grass: '#4F8B3D',
  fire: '#ff2f00',
  water: '#4A7CB1',
  bug: '#6D7514',
  normal: '#6D6D57',
  poison: '#7B3C7A',
  electric: '#B4A000',
  ground: '#8B7040',
  fairy: '#9B5A68',
  fighting: '#8B2F2F',
  psychic: '#A64C70',
  rock: '#7B6A2B',
  ghost: '#4B507D',
  ice: '#71A1B3',
  dragon: '#50378F',
  dark: '#453B3B',
  steel: '#7B7B8B',
  flying: '#6A77B8',
};

// Función para obtener el color de fondo según el tipo principal del Pokémon
function getBackgroundColor(): string {
  const primaryType = props.pokemon.types[0].type.name;
  return props.noBgColor ? typeColors[primaryType] || '#A8A878' : 'rgba(168,168,120,0)'; // Color por defecto si no se encuentra el tipo
}
</script>
<style scoped>
.card-pokemon {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.hovered {
  transform: scale(1.2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.pokemon-image {
  max-width: 150px;
}

</style>