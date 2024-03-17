<script setup lang="ts">
import { defineProps } from 'vue';
import type { Item } from '../models';
defineProps<{
    item: Item | null,
    images: string[]
}>();
</script>

<template>
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" style="aspect-ratio: 1/1; overflow: hidden">
        <div class="carousel-inner">
            <template  v-for="image, idx in images" :key="image">
                <div class="carousel-item active" v-if="idx == 0">
                    <img :src="image" class="d-block w-100" alt="Item">
                </div>
                <div class="carousel-item" v-else>
                    <img :src="image" class="d-block w-100" alt="Item">
                </div>
            </template>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>