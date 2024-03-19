<script setup lang="ts">
import { ref, defineAsyncComponent, onBeforeMount } from 'vue'
import ItemAccordion from '../components/ItemAccordion.vue'
import ItemCorousol from '../components/ItemCorousol.vue';
import ImgBar from '../components/ImgBar.vue';
import { CreateCartItem } from '../models/createCartItem';
import { useLoading } from 'vue-loading-overlay';
import StoreInfo from '../components/StoreInfo.vue';
import { useItemDetailStore } from '../stores/itemDetailStore';
import { storeToRefs } from 'pinia';
onBeforeMount(async () => {
    const loader = loading.show();
    try {
        
        await itemDetailStore.fetchData();
    }
    catch(err) { throw err; }
    finally {
        loader.hide();
    }
});
const loading = useLoading({
    container: loadingForm,
    isFullPage: false,
    opacity: 0
});
const loadingForm = ref();
const itemDetailStore = useItemDetailStore();
const { item } = storeToRefs(itemDetailStore);
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
);
const data = ref<CreateCartItem>({
    item_id: item.value?.id as number,
    count: 1
});
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
                    <form class="vl-element" ref="loadingForm" @submit.prevent="">
                        <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text bg-black text-light">數量</span>
                            <input type="number" class="form-control" min="1" step="1" placeholder="數量" v-model="data.count">
                            <button class="btn btn-danger" type="submit">加入購物車</button>
                        </div>
                    </form>
                </div>
            </div>
            <StoreInfo :store="item?.store" :from-item-page="false" />
            <div class="row">
                <ItemAccordion :item="item" />
            </div>
        </div>


</template>