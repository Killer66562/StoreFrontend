<script setup lang="ts">
import Navbar from "./components/NavBar.vue";
import SearchBar from "./components/SearchBar.vue";
import { RouterView } from "vue-router";
import { router } from "./routes";
</script>

<template>
  <div class="pb-3" style="background-color: antiquewhite; min-height: 100vh;">
    <div class="sticky-top">
      <Navbar />
      <SearchBar />
    </div>
    <div class="container-fluid">
      <div class="container pt-3">
        <header></header>
        <main>
          <RouterView :key="router.currentRoute.value.fullPath"/>
        </main>
        <footer></footer>
      </div>
    </div>
  </div>
</template>
