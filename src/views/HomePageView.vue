<script setup lang="ts">
import { ref } from 'vue';
import ItemBar from '../components/ItemBar.vue';
import type { Item } from '../models';

const items = ref<Item[]>([
    {
        id: 1,
        name: "測試商品1",
        price: 100,
        count: 10
    },
    {
        id: 2,
        name: "測試商品2",
        price: 200,
        count: 10
    },
    {
        id: 3,
        name: "測試商品3",
        price: 300,
        count: 10
    },
    {
        id: 4,
        name: "測試商品4",
        price: 400,
        count: 10
    },
    {
        id: 5,
        name: "測試商品5",
        price: 500,
        count: 10
    },
    {
        id: 6,
        name: "測試商品6",
        price: 600,
        count: 10
    },
    {
        id: 7,
        name: "測試商品7",
        price: 700,
        count: 10
    },
    {
        id: 8,
        name: "測試商品8",
        price: 800,
        count: 10
    }
])
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