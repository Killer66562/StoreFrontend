<script setup lang="ts">
import StoreInfo from '../components/items/StoreInfo.vue';
import { Store } from '../models/store';

const store: Store = {
    id: 1,
    name: "測試",
    introduction: "測試",
    user_id: 1,
    created_at: new Date(),
    icon: "3bd54e9f-e290-44ba-9c7b-48b34e70931d.png"
}

</script>

<template>
    <StoreInfo :store="store" />
</template>