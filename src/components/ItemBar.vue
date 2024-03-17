<script setup lang="ts">
import { defineProps } from 'vue';
import type { Item } from '../models';
defineProps<{
    title: string,
    items: Item[]
}>();
</script>

<template>
    <h4 class="pt-3">{{ title }}</h4>
    <div class="row flex-nowrap overflow-auto mb-3">
        <div class="col-6 col-md-4 col-lg-3 col-xxl-2" v-for="item in items" :key="item.id">
            <RouterLink :to="`/items/${item.id}`" class="text-decoration-none">
                <div class="card">
                    <img src="../assets/item.jpg" class="card-img-top" :alt="`Item #${item.id}`">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.name }}</h5>
                        <p class="card-text"></p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${{ item.price }}</li>
                        <li class="list-group-item">剩下{{ item.count }}個</li>
                    </ul>
                </div>
            </RouterLink>
        </div>
    </div>
</template>