<template>
  <div class="card-pokemon p-4 bg-gray-800 text-white rounded-lg shadow-md">
    <!-- Nombre del Pokémon -->
    <h2 class="text-2xl font-bold mb-4 capitalize">{{ pokemon.name }}</h2>

    <!-- Imagen del Pokémon -->
    <img
        :src="pokemon.sprites.front_default"
        :alt="pokemon.name"
        class="mx-auto mb-4"
    />

    <!-- Tipos del Pokémon -->
    <div class="flex justify-center space-x-2 mb-4">
      <span
          v-for="type in pokemon.types"
          :key="type.type.name"
          :class="getTypeClass(type.type.name)"
          class="px-2 py-1 rounded"
      >
        {{ type.type.name }}
      </span>
    </div>

    <!-- Estadísticas del Pokémon (Gráfico de barras simple) -->
    <div class="mb-4">
      <h3 class="text-lg font-semibold mb-2">Estadísticas:</h3>
      <div v-for="stat in pokemon.stats" :key="stat.stat.name" class="mb-2">
        <div class="flex justify-between">
          <span class="capitalize">{{ stat.stat.name }}</span>
          <span>{{ stat.base_stat }}</span>
        </div>
        <div class="w-full bg-gray-600 rounded h-4">
          <div
              :style="{ width: `${stat.base_stat}%` }"
              class="h-full bg-blue-500 rounded "
              style="max-width: 100%"
          ></div>
        </div>
      </div>
    </div>
    <button
        @click="selectPokemon"
        class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded "
        style="width: 100%"
    >
      Seleccionar
    </button>
    <!-- Botón para reproducir sonido (cries) -->
    <button
        @click="playCry"
        class="px-4 my-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded "
        style="width: 100%"
    >
      Sonido
    </button>
    <button
        @click="removePokemon"
        class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded "
        style="width: 100%"
    >
      Eliminar
    </button>
  </div>
</template>

<script setup lang="ts">
import { Pokemon } from '../models/pokemon/Pokemon'; // Asegúrate de que la ruta es correcta

// Recibe el Pokémon como prop
const props = defineProps<{ pokemon: Pokemon }>();
const emit = defineEmits(['select-pokemon', 'remove-pokemon']);

const playCry = () => {
  const audio = new Audio(props.pokemon.cries?.latest || '');
  audio.play();
};

const selectPokemon = () => {
  emit('select-pokemon', props.pokemon); // Emitir evento con el Pokémon seleccionado
};
const removePokemon = () => {
  emit('remove-pokemon', props.pokemon); // Emitir evento con el Pokémon a eliminar
};

// Función para obtener clases de CSS basadas en el tipo de Pokémon
const getTypeClass = (type: string) => {
  const typeClasses: Record<string, string> = {
    grass: 'bg-green-600',
    fire: 'bg-red-600',
    water: 'bg-blue-600',
    bug: 'bg-green-400',
    normal: 'bg-gray-400',
    poison: 'bg-purple-600',
    electric: 'bg-yellow-500',
    ground: 'bg-yellow-800',
    fairy: 'bg-pink-400',
    fighting: 'bg-red-700',
    psychic: 'bg-pink-600',
    rock: 'bg-yellow-700',
    ghost: 'bg-purple-800',
    ice: 'bg-blue-300',
    dragon: 'bg-purple-700',
    dark: 'bg-gray-700',
    steel: 'bg-gray-500',
    flying: 'bg-blue-400',
  };
  return typeClasses[type] || 'bg-gray-500';
};
</script>

<style scoped>
.card-pokemon {
  max-width: 300px;
  margin: auto;
  text-align: center;
}
</style>
