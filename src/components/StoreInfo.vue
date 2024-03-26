<script setup lang="ts">
import { defineProps } from 'vue';
import { Store } from '../models/store';
defineProps<{
    store?: Store,
    fromItemPage: boolean
}>();
const getRealImagePath = (path: string) => {
    return import.meta.env.VITE_API_URL + "/static/" + path;
}
</script>


<template>
    <div class="row mb-3" v-if="store">
        <div class="col-3 col-md-1">
            <RouterLink :to="`/stores/${store?.id}`" v-if="fromItemPage === true">
                <img class="img-fluid rounded-circle" :src="getRealImagePath(store.icon)" style="aspect-ratio: 1 / 1;" v-if="store.icon">
                <img class="img-fluid rounded-circle" src="../assets/store.png" style="aspect-ratio: 1 / 1;" v-else>
            </RouterLink>
            <template v-else>
                <img class="img-fluid rounded-circle" :src="getRealImagePath(store.icon)" style="aspect-ratio: 1 / 1;" v-if="store.icon">
                <img class="img-fluid rounded-circle" src="../assets/store.png" style="aspect-ratio: 1 / 1;" v-else>
            </template>
        </div>
        <div class="col-9 col-md-11">
            <div class="d-flex flex-column h-100 justify-content-end">
                <h4>{{ store?.name }}</h4>
                <p>{{ store?.introduction }}</p>
            </div>
        </div>
    </div>
</template>