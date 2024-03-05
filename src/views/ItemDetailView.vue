<script setup lang="ts">
import { ref } from 'vue'
import type { Item } from '../models'
import ItemAccordion from '../components/ItemAccordion.vue'
import ItemCorousol from '../components/ItemCorousol.vue';
const item = ref<Item>({
    id: 1,
    name: "測試商品1",
    price: 100,
    count: 10,
    description: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦"
});
const images = ref<string[]>(
    [
        './src/assets/item.jpg', 
        './src/assets/ad.jpeg'
    ]
)
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-5">
                <ItemCorousol :item="item" :images="images"/>
                <div class="row flex-nowrap overflow-auto mb-3">
                    <div class="col-4 col-md-3 pb-3" v-for="_ in 10" :key="_">
                        <img src="../assets/item.jpg" class="img-fluid" alt="item">
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-7">
                <h4>{{ item.name }}</h4>
                <h3 class="text-danger">${{ item.price }}</h3>
            </div>
        </div>
        <div class="row">
            <ItemAccordion :item="item" />
        </div>
    </div>
</template>