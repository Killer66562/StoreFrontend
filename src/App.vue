<script setup lang="ts">
import Navbar from "./components/NavBar.vue";
import SearchBar from "./components/SearchBar.vue";
import { RouterView } from "vue-router";
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
          <RouterView v-slot="{Component}">
            <template v-if="Component">
              <Suspense>
                <component :is="Component" />
                <template #fallback>
                  載入中
                </template>
              </Suspense>
            </template>
          </RouterView>
        </main>
        <footer></footer>
      </div>
    </div>
  </div>
</template>
