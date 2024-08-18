<template>
  <div class="min-h-screen flex flex-col  text-white ">
    <!-- Header (Navbar) -->
    <header-main-layout class="fixed top-0 left-0 right-0 z-10"/>
    <!-- Main Content -->
    <main class="flex-grow container mt-20 mx-auto ">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">

import HeaderMainLayout from "./HeaderMainLayout.vue";
</script>

<style scoped>

</style>