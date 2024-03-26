<script setup lang="ts">
import { defineProps } from 'vue';
import { getStaticFile } from '../funcs'
import type { Item } from '../models';
defineProps<{
    item: Item
}>();
</script>

<template>
    <div class="card">
        <RouterLink class="text-decoration-none text-dark" :to="`/items/${item.id}`">
            <img :src="getStaticFile(item.icon)" class="card-img-top" :alt="`Item #${item.id}`" style="aspect-ratio: 1 / 1;" v-if="item.icon">
            <img src="../assets/ad.jpeg" class="card-img-top" :alt="`Item #${item.id}`" style="aspect-ratio: 1 / 1;" v-else>
            <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <p class="card-text"></p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${{ item.price }}</li>
                <li class="list-group-item">剩下{{ item.count }}個</li>
            </ul>
        </RouterLink>
    </div>
</template>