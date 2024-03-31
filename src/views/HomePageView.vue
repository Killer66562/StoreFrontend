<script setup lang="ts">
import { ref } from 'vue';
import ItemBar from '../components/ItemBar.vue';
import type { Item } from '../models';

const items = ref<Item[]>([]);
</script>

<template>
    <div class="container">
        <ItemBar title="熱門商品" :items="items"></ItemBar>
        <h5>廣告商有給錢我得放上去😭</h5>
        <img src="../assets/ad.jpeg" class="img-fluid pe-3" alt="廣告">
        <img src="../assets/ad.jpeg" class="img-fluid pe-3" alt="廣告">
        <ItemBar title="精選好物" :items="items"></ItemBar>
        <ItemBar title="你可能會喜歡" :items="items"></ItemBar>
    </div>
</template>