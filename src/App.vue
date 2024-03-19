<script setup lang="ts">
import Navbar from "./components/NavBar.vue";
import SearchBar from "./components/SearchBar.vue";
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
          <RouterView />
        </main>
        <footer></footer>
      </div>
    </div>
  </div>
</template>
