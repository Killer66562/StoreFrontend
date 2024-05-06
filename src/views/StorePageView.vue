<script setup lang="ts">
import { useAsyncState } from '@vueuse/core';
import StoreInfo from '../components/items/StoreInfo.vue';
import { useStoreStore } from '../stores/storeStore';
import { router } from '../routes';
import { computed } from 'vue';

const storeStore = useStoreStore();
const currentStoreId = computed(() => {
    try {
        return router.currentRoute.value.params.storeId as unknown as number;
    }
    catch (err) {
        return undefined;
    }
})
const fetchStoreState = useAsyncState(() => storeStore.fetchStore(currentStoreId.value), undefined, { immediate: false });

fetchStoreState.execute();
</script>

<template>
    <StoreInfo :store="storeStore.storeData" v-if="fetchStoreState.isReady"/>
</template>