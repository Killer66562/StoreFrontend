<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="container-fluid" style="background-color: antiquewhite; min-height: 100vh;">
    <div class="container pb-3" style="background-color: bisque; min-height: 100vh;">
      <header>
        <NavBar />
      </header>
      <main>
        <RouterView />
      </main>
      <footer></footer>
    </div>
  </div>
</template>
