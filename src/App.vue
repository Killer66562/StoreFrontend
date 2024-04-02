<script setup lang="ts">
import Navbar from "./components/NavBar.vue";
import SearchBar from "./components/SearchBar.vue";
import { RouterView } from "vue-router";
import { router } from "./routes";
</script>

<template>
  <div class="pb-3" style="background-color: antiquewhite; min-height: 100vh;">
    <header class="sticky-top">
      <Navbar />
      <SearchBar />
    </header>
    <div class="container-fluid">
      <main class="container pt-3">
        <RouterView :key="router.currentRoute.value.fullPath"/>
      </main>
    </div>
    <footer></footer>
  </div>
</template>
