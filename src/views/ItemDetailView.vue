<script setup lang="ts">
import ItemDetail from '../components/ItemDetail.vue'
import { useItemDetailStore } from '../stores/itemDetailStore';
import ItemInfo from '../components/items/ItemInfo.vue';
import StoreInfo from '../components/items/StoreInfo.vue';

const itemDetailStore = useItemDetailStore();
</script>

<template>
    <div class="container">
        <ItemInfo :item="itemDetailStore.item" :data="itemDetailStore.data" />
        <StoreInfo :store="itemDetailStore.item?.store" />
        <ItemDetail :item="itemDetailStore.item"/>
    </div>
</template>