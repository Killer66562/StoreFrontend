<script setup lang="ts">
import { defineProps } from 'vue';
import type { Item } from '../models';
defineProps<{
    item: Item
}>();
</script>

<template>
    <div class="card">
        <RouterLink class="text-decoration-none text-dark" :to="`/items/${item.id}`">
            <img src="../assets/item.jpg" class="card-img-top" :alt="`Item #${item.id}`">
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