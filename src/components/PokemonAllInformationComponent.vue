<template>
  <div class="pokedex-card p-4 bg-red-700 text-white rounded-lg shadow-lg flex flex-col lg:flex-row border-black border-4">

    <!-- Sección de la Pokédex -->
    <div class="w-full  relative p-5 select-none" style="min-width: 250px">
      <!-- Cámara -->
      <div class="w-12 h-12 bg-blue-400 rounded-full border-4 border-white absolute top-5 left-5"></div>

      <!-- Grupo de LEDs -->
      <div class="flex justify-between w-20 absolute top-6 right-6">
        <div class="w-5 h-5 bg-red-500 rounded-full border-2 border-black"></div>
        <div class="w-5 h-5 bg-yellow-400 rounded-full border-2 border-black"></div>
        <div class="w-5 h-5 bg-green-500 rounded-full border-2 border-black"></div>
      </div>

      <!-- Pantalla -->
      <div class="w-full h-40  border-2 border-black rounded-lg mt-20 flex justify-center bg-green-600">
        <img
            :src="pokemon.sprites.front_default"
            :alt="pokemon.name"
            class="w-40 h-40 rounded-3xl"
        />
      </div>

      <!-- Botón -->
      <div class="w-8 h-8 bg-yellow-400 rounded-full mt-8 border-2 border-black"></div>
    </div>

    <!-- Sección de detalles del Pokémon -->
    <div class="flex-grow mt-6 lg:mt-0 lg:ml-6 select-none">
      <!-- Nombre y número del Pokémon -->
      <div class="text-left mb-4">
        <h2 class="text-3xl font-bold capitalize">{{ pokemon.name }}</h2>
        <p class="text-lg">#{{ pokemon.id }}</p>
      </div>

      <!-- Tipos del Pokémon -->
      <div class="flex space-x-2 mb-4">
        <span
            v-for="type in pokemon.types"
            :key="type.type.name"
            :class="getTypeClass(type.type.name)"
            class="px-2 py-1 rounded text-black font-bold"
        >
          {{ type.type.name }}
        </span>
      </div>

      <!-- Estadísticas del Pokémon (Gráfico de barras simple) -->
      <div class="mb-4 select-none">
        <h3 class="text-2xl font-semibold mb-2">Estadísticas:</h3>
        <div v-for="stat in pokemon.stats" :key="stat.stat.name" class="mb-2">
          <div class="flex justify-between">
            <span class="capitalize text-xl">{{ stat.stat.name }}</span>
            <span>{{ stat.base_stat }}</span>
          </div>
          <div class="w-full bg-gray-600 rounded h-4">
            <div
                :style="{ width: `${stat.base_stat}%` }"
                class="h-full bg-yellow-400 rounded"
                style="max-width: 100%"
            ></div>
          </div>
        </div>
      </div>

      <!-- Altura y Peso -->
      <div class="flex justify-between mb-4 select-none">
        <div>
          <p class="text-xl">Altura: <span class="font-bold">{{ pokemon.height / 10 }} m</span></p>
        </div>
        <div>
          <p class="text-xl">Peso: <span class="font-bold">{{ pokemon.weight / 10 }} kg</span></p>
        </div>
      </div>

      <!-- Descripción del Pokémon -->
      <div class="mb-4 select-none">
        <h3 class="text-xl font-semibold mb-2">Descripción:</h3>
        <p class="text-xl">{{descripcion}}</p>
      </div>

      <!-- Botón para reproducir sonido (cries) -->
      <div class="flex justify-center">
        <button
            @click="playCry"
            class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          Reproducir sonido
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Pokemon } from '../models/pokemon/Pokemon';
import PokemonCardComponent from "./PokemonCardComponent.vue"; // Asegúrate de que la ruta es correcta

// Recibe el Pokémon como prop
const props = withDefaults(defineProps<{ pokemon: Pokemon, descripcion: string }>(), {
  descripcion: "Sin descripcion"
});

// Función para reproducir el sonido (cry) del Pokémon
const playCry = () => {
  const audio = new Audio(props.pokemon.cries?.latest || '');
  audio.play();
};

// Función para obtener clases de CSS basadas en el tipo de Pokémon
const getTypeClass = (type: string) => {
  const typeClasses: Record<string, string> = {
    grass: 'bg-green-300',
    fire: 'bg-red-400',
    water: 'bg-blue-300',
    bug: 'bg-green-200',
    normal: 'bg-gray-400',
    poison: 'bg-purple-400',
    electric: 'bg-yellow-300',
    ground: 'bg-yellow-600',
    fairy: 'bg-pink-300',
    fighting: 'bg-red-600',
    psychic: 'bg-pink-600',
    rock: 'bg-yellow-700',
    ghost: 'bg-purple-800',
    ice: 'bg-blue-200',
    dragon: 'bg-purple-700',
    dark: 'bg-gray-700',
    steel: 'bg-gray-500',
    flying: 'bg-blue-200',
  };
  return typeClasses[type] || 'bg-gray-500';
};
</script>

<style scoped>
.pokedex-card {
  background: linear-gradient(145deg, #e53935, #b71c1c);
}
</style>
