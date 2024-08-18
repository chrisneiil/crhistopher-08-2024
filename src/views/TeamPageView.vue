<template>
  <h1 class="text-3xl font-bold pl-6 pt-4" v-if="pokemonsSelectedList.length > 0">Mi equipo pokemon:</h1>
  <h1 class="text-3xl font-bold pl-6 pt-4" v-else>Sin equipo pokemon seleccionado.</h1>
  <div
      class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 py-4 my-4 mx-2"
      style="border-radius: 15px; min-height: 195px"
  >
    <div class="flex flex-col transition-opacity" v-for="(pokemon, index) in pokemonsSelectedList" :key="pokemon.id">
      <PokemonTeamCard @select-pokemon="pokemonSeleccionado" @remove-pokemon="pkstore.removePokemon(index)" :pokemon="pokemon"/>
    </div>
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