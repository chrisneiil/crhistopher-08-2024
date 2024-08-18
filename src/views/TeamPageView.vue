<template>
  <div v-if="pokemonsSelectedList.length > 0">
    <h1 class="text-3xl font-bold pl-3 pt-4">Mi equipo Pokémon:</h1>
    <div
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 py-4 my-4 mx-2"
        style="border-radius: 15px; min-height: 195px"
    >
      <div class="flex flex-col transition-opacity" v-for="(pokemon, index) in pokemonsSelectedList" :key="pokemon.id">
        <PokemonTeamCard @select-pokemon="pokemonSeleccionado" @remove-pokemon="pkstore.removePokemon(index)" :pokemon="pokemon"/>
      </div>
    </div>
  </div>
  <div v-else class="flex flex-col items-center justify-center text-center py-10">
    <h1 class="text-4xl font-bold mb-4">Sin equipo Pokémon seleccionado.</h1>
    <router-link to="/" class="text-blue-500 hover:underline text-xl font-bold">Ir a la página principal para seleccionar Pokémon</router-link>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {pokemonStore} from "../stores/pokemonStore.ts";
import PokemonTeamCard from "../components/PokemonTeamCard.vue";
import {Pokemon} from "../models/pokemon/Pokemon.ts";
import router from "../router";

const pkstore = ref(pokemonStore());
const pokemonsSelectedList = ref(pkstore.value.getPokemonsSelectedList);

const pokemonSeleccionado = (pokemon:Pokemon) => {
  pkstore.value.setSinglePokemonSelect(pokemon)
  router.push(`/team/${pokemon.id}`)
}
</script>

<style scoped>

</style>