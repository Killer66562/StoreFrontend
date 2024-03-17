<script setup lang="ts">
import Navbar from "./components/NavBar.vue";
import SearchBar from "./components/SearchBar.vue";
</script>

<template>
  <Navbar />
  <SearchBar />
  <div class="container-fluid" style="background-color: antiquewhite; min-height: 100vh;">
    <div class="container pt-3 pb-3" style="min-height: 100vh;">
      <header></header>
      <main>
        <RouterView />
      </main>
      <footer></footer>
    </div>
  </div>
</template>
