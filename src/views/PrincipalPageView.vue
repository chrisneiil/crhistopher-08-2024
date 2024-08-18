<template>
  <div class=" p-2" >
    <div class="pl-2" v-if="pokemonsSelectedList.length == 0">
      <h2 class="text-3xl font-bold ">Seleccione su equipo pokemon,
        Maximo 6 integrantes.</h2>
    </div>
    <div v-else>
      <h2 class="pl-2 text-3xl font-bold " >Equipo Pokemon  {{pokemonCount}}/6:</h2>
      <p class="pl-2 text-xl">Click en el pokemon para eliminar de la lista.</p>
    </div>
    <div
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-9 gap-4 bg-gray-800 border-blue-500 border-4 py-4 px-4 my-4"
        style="border-radius: 15px; min-height: 195px"
    >
      <div class="flex flex-col transition-opacity" v-for="(pokemon, index) in pokemonsSelectedList" :key="pokemon.id">
        <PokemonCardComponent @pokemon-selected="removePokemonFromStore(index)" :pokemon="pokemon"/>
      </div>
    </div>
    <h2 class="text-3xl font-bold pl-2 py-2">Pokemones disponibles:</h2>
    <div
        v-if="!loadingListPokemonDetails"
        style="border-radius: 15px; min-height: 550px"
        class="bg-gray-500 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-9 gap-4 bg-gray-800 border-4 py-4 px-4 my-4"
    >
      <div class="flex flex-col" v-for="pokemon in pokemonDetailsList" :key="pokemon.id">
        <PokemonCardComponent @pokemon-selected="addPokemonToStore" :pokemon="pokemon"/>
      </div>
    </div>
    <div v-else
        style="border-radius: 15px; min-height: 550px"
        class="bg-gray-500 flex flex-row justify-center bg-gray-800 border-4 py-4 px-4 my-4"
    >
      <p class="flex flex-col justify-center" >
        Cargando datos...
      </p>
    </div>
    <div class="text-center">
      <pagination-component :total-pages="7" @page-selected="changePage"></pagination-component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { apiPokemonComposable } from '../composables/apiPokemonComposable.ts';
import PokemonCardComponent from '../components/PokemonCardComponent.vue';
import PaginationComponent from '../components/PaginationComponent.vue';

const {
  pokemonDetailsList,
  pkstore,
  loadingListPokemonDetails,
  getAllInfoPokemonArray,
  fetchPokemonItemList,
  pokemonCount,
  addPokemonToStore,
  removePokemonFromStore
} = apiPokemonComposable();

const pokemonsSelectedList = ref(pkstore.value.getPokemonsSelectedList);


const loadApisPokemon = async (limit: number, offset: number) => {
  await fetchPokemonItemList(limit, offset);
  await getAllInfoPokemonArray();
  loadingListPokemonDetails.value = false;
};

const changePage = async (selectedPage: number) => {
  pokemonDetailsList.value = [];
  //Calcula la cantidad de pokemones a mostrar, calcula el offset correcto para
  // que la paginacion traiga los datos correctamente, setea el offset en simples palabras.
  let resultado = 25 * (selectedPage === 1 ? 0 : selectedPage - 1);

  // en el caso de estar en la ultima pag, solo trae el pokemon numero 151.
  await loadApisPokemon(selectedPage === 7 ? 1 : 25, resultado);
  loadingListPokemonDetails.value = false;
};

// Watch para guardar los cambios en el store de Pinia
watch(
    () => pkstore.value.pokemonsSelectedList,
    (newList) => {
      pokemonsSelectedList.value = newList;
      pokemonCount.value = pkstore.value.pokemonCount;
    },
    { deep: true }
);

onMounted(async () => {
  await loadApisPokemon(25, 0);
});

</script>

<style scoped>
.read-the-docs {
  color: #888;
}

</style>
