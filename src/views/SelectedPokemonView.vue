<template>
  <div class="mx-3" v-if="pokemonSelectMoreInfo">
    <div class="flex flex-wrap justify-between ">
      <!-- Sección de información del Pokémon -->
      <div class="w-full lg:w-8/12 mb-4">

        <h1 class="mx-1 text-3xl my-6 font-bold">Pokemon seleccionado</h1>
        <PokemonAllInformationComponent
            :pokemon="pokemonGeneralInfo as Pokemon"
            :descripcion="pokemonDescription.toString()"
        />
      </div>
      <!-- Sección de cadena evolutiva -->
      <div class="w-full lg:w-3/12 mb-4">
        <h1 class="mx-2 text-3xl mb-6 mt-7 font-bold">Cadena evolutiva</h1>
        <div
            class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 bg-gray-800 border-blue-500 border-4 py-4 my-4 "
            style="border-radius: 15px;"
        >
          <div
              class="flex flex-col transition-opacity px-10"
              v-for="(pokemon) in listPokemonEvolutionChain"
              :key="pokemon.id"
          >
            <PokemonCardComponent :pokemon="pokemon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PokemonAllInformationComponent from "../components/PokemonAllInformationComponent.vue";
import {apiPokemonComposable} from "../composables/apiPokemonComposable.ts";
import {onMounted, ref} from "vue";
import {PokemonSpecies} from "../models/pokemon/PokemonSpecies.ts";
import {useRoute} from "vue-router";
import {NamedAPIResource, Pokemon} from "../models/pokemon/Pokemon.ts";
import PokemonCardComponent from "../components/PokemonCardComponent.vue";
import {ChainLink} from "../models/evolutionDetail/EvolutionDetails.ts";
import axios from "axios";

const {
  fetchPokemonInformation,
  fetchPokemonMoreInformation
} = apiPokemonComposable();

const pokemonSelectMoreInfo = ref<PokemonSpecies>();
const pokemonDescription = ref<String>('');
const pokemonGeneralInfo = ref<Pokemon>();
const idRoute = ref<String>(useRoute().params.id as string);
const listPokemonEvolutionChain = ref<Pokemon[]>([]);

onMounted(async () => {
  fetchPokemonInfoIfNotHaveInfo();
})

const fetchPokemonInfoIfNotHaveInfo = async () =>{
  console.log(idRoute.value)
  pokemonGeneralInfo.value = await fetchPokemonInformation(idRoute.value as string)
  await findPokemonSelectedMoreInfo();
  await findPokemonEvolutionChain();
}

// Obtenemos la informacion de la descripcion del pokemon seleccionado...
const findPokemonSelectedMoreInfo = async () => {
  pokemonSelectMoreInfo.value = await fetchPokemonMoreInformation(pokemonGeneralInfo.value!.name!)
  //fte = flavor_text_entries
  pokemonSelectMoreInfo.value?.flavor_text_entries.filter(fte => fte.language.name == "es").forEach(fte =>  pokemonDescription.value =  pokemonDescription.value + fte.flavor_text + ' ')
}

const findPokemonEvolutionChain = async  () => {
  // se tuvo que realizar un llamado a la api sin
  // la config de axios antes construida ya que no habia forma de acceder a la id de la evolution chain, solo se entrega la url.
  let pokemonEvolution = (await axios.get(<string>pokemonSelectMoreInfo.value?.evolution_chain.url)).data
  console.log(pokemonEvolution)
  getAllSpecies(pokemonEvolution.chain).forEach((specie) => {
    (fetchPokemonInformation(specie.name)).then( pokemon => listPokemonEvolutionChain.value.push(pokemon));
  })
  console.log(listPokemonEvolutionChain.value)
}

const getAllSpecies = (evolutionChain: ChainLink) => {
  const speciesList: NamedAPIResource[] = [];

  function traverseChain(chain: ChainLink) {
    // Agregar la especie actual a la lista
    speciesList.push(chain.species);
    // Recorrer las evoluciones
    chain.evolves_to.forEach(evolution => traverseChain(evolution));
  }
  // Iniciar la recursión desde la cadena principal
  traverseChain(evolutionChain);
  return speciesList;
}

</script>

<style scoped>

</style>