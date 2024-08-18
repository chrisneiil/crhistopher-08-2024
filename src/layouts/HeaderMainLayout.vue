<template>
  <header class="bg-amber-500 text-white py-4">
    <nav class="container mx-auto px-4 flex flex-wrap justify-between items-center">
      <div class="text-2xl font-bold flex">
        <img
            style="max-height: 45px; max-width:100px"
            src="../assets/imgsPokemon/pokeball.png"
            alt="pokeball"
        />
        <router-link to="/" class="flex">
          <h1 class="my-1 ml-3">PokeApi</h1>
        </router-link>
      </div>
      <div class="flex space-x-4">
        <router-link
            v-for="route in routes"
            :key="route.routeName"
            :to="route.routeLink"
            class="px-3 py-2 rounded-lg text-white bg-amber-600 hover:bg-amber-700 hover:text-yellow-300 transition-colors duration-300 text-xl"
        >
          {{ route.routeName }}
        </router-link>
      </div>
    </nav>
  </header>
</template>


<script setup lang="ts">

import {ref} from "vue";
import {Route} from "../models/route/Route.ts";

const routes = ref<Route[]>([
  {
    routeName:'Inicio',
    routeLink:'/'
  },
  {
    routeName:'Equipo',
    routeLink:'/team'
  },
])
</script>

<style scoped>

</style>