<script setup lang="ts">
import { defineProps } from 'vue';
import { Store } from '../models/store';
defineProps<{
    store?: Store,
    fromItemPage: boolean
}>();
</script>


<template>
    <div class="row mb-3">
        <div class="col-3 col-md-1">
            <RouterLink :to="`/stores/${store?.id}`" v-if="fromItemPage === true">
                <img class="img-fluid rounded-circle" src="../assets/store.png" style="aspect-ratio: 1 / 1;">
            </RouterLink>
            <img class="img-fluid rounded-circle" src="../assets/store.png" style="aspect-ratio: 1 / 1;" v-else>
        </div>
        <div class="col-9 col-md-11">
            <div class="d-flex flex-column h-100 justify-content-end">
                <h4>{{ store?.name }}</h4>
                <p>{{ store?.introduction }}</p>
            </div>
        </div>
    </div>
</template>