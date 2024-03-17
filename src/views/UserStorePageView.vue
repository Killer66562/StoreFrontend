<script setup lang="ts">
import { ref } from 'vue';
import { ApiInstance, jsonConfig } from '../api';
import { Item } from '../models';
import ItemCard from '../components/ItemCard.vue';
const data = ref<Item[]>([]);
const apiInstance = new ApiInstance(jsonConfig);
const fetchData = async () => {
    try {
        data.value = await apiInstance.get<Item[]>("/user/store/items", {});
    }
    catch (err) {

    }
}
fetchData();
</script>

<template>
    <div class="container">
        <div class="row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6">
            <div class="col" v-for="item in data" :key="item.id">
                <ItemCard :item="item"></ItemCard>
            </div>
        </div>
    </div>
</template>