<script setup lang="ts">
import { defineProps } from 'vue';
import type { Item } from '../models';
import ItemCard from './ItemCard.vue';
defineProps<{
    title: string,
    items: Item[]
}>();
</script>

<template>
    <h4 class="pt-3">{{ title }}</h4>
    <div class="row flex-nowrap overflow-auto mb-3">
        <div class="col-6 col-md-4 col-lg-3 col-xxl-2" v-for="item in items" :key="item.id">
            <ItemCard :item="item"/>
        </div>
    </div>
</template>