<script setup lang="ts">
import { defineProps } from 'vue';
import type { Item } from '../models';
import { getStaticFile } from '../funcs';
defineProps<{
    item?: Item
}>();
</script>

<template>
    <template v-if="item === undefined">
        <img src="../assets/item.jpg" class="d-block w-100" alt="Item">
    </template>
    <template v-else-if="item.images.length == 0">
        <img :src="getStaticFile(item.icon)" class="d-block w-100" alt="Item" v-if="item.icon">
        <img src="../assets/item.jpg" class="d-block w-100" alt="Item" v-else>
    </template>
    <template v-else>
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" style="aspect-ratio: 1/1; overflow: hidden">
            <div class="carousel-inner">
                <template  v-for="image, idx in item?.images" :key="image">
                    <div class="carousel-item active" v-if="idx == 0">
                        <img :src="getStaticFile(image.path)" class="d-block w-100" alt="Item">
                    </div>
                    <div class="carousel-item" v-else>
                        <img :src="getStaticFile(image.path)" class="d-block w-100" alt="Item">
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
</template>