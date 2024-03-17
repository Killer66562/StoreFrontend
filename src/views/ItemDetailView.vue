<script setup lang="ts">
import { ref } from 'vue'
import type { Item } from '../models'
import { ApiInstance, jsonConfig } from '../api';
import { router } from '../routes';
import ItemAccordion from '../components/ItemAccordion.vue'
import ItemCorousol from '../components/ItemCorousol.vue';
import ImgBar from '../components/ImgBar.vue';
const item = ref<Item | null>(null);
const apiInstance = new ApiInstance(jsonConfig);
const fetchData = async () => {
    try {
        item.value = await apiInstance.get(`/general/items/${router.currentRoute.value.params.id}` as string, {});
    }
    catch(err) {

    }
}
const images = ref<string[]>(
    [
        './src/assets/item.jpg', 
        './src/assets/ad.jpeg'
    ]
);
const sources = ref<string[]>(
    [
        './src/assets/item.jpg',
        './src/assets/item.jpg',
        './src/assets/item.jpg',
        './src/assets/item.jpg',
        './src/assets/item.jpg',
        './src/assets/item.jpg',
        './src/assets/item.jpg',
        './src/assets/item.jpg',
        './src/assets/item.jpg',
        './src/assets/item.jpg'
    ]
)
fetchData();
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-4">
                <ItemCorousol :item="item" :images="images"/>
                <ImgBar :sources="sources" />
            </div>
            <div class="col-12 col-md-8">
                <h4>{{ item?.name }}</h4>
                <h3 class="text-danger">${{ item?.price }}</h3>
            </div>
        </div>
        <div class="row">
            <ItemAccordion :item="item" />
        </div>
    </div>
</template>