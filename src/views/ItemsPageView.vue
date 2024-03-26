<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useItemsStore } from '../stores/ItemsStore';
import ItemCard from '../components/ItemCard.vue';
const itemsStore = useItemsStore();
const { items } = storeToRefs(itemsStore);
</script>

<template>
    <div class="row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6">
        <div class="col" v-for="item in items" :key="item.id">
            <ItemCard :item="item" />
        </div>
    </div>
</template>
