<script setup lang="ts">
import { ref } from 'vue'
import ItemAccordion from '../components/ItemAccordion.vue'
import ItemCorousol from '../components/ItemCorousol.vue';
import ImgBar from '../components/ImgBar.vue';
import { CreateCartItem } from '../models/createCartItem';
import { useLoading } from 'vue-loading-overlay';
import StoreInfo from '../components/StoreInfo.vue';
import { useItemDetailStore } from '../stores/itemDetailStore';
const isLoading = ref<boolean>();
const isReady = ref<boolean>();
const loading = useLoading({
    isFullPage: true,
    opacity: 0
});
const itemDetailStore = useItemDetailStore();
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
    item_id: itemDetailStore.item?.id as number,
    count: 1
});
const fetchData = async () => {
    isLoading.value = true;
    isReady.value = false;
    const loader = loading.show();
    try {
        await itemDetailStore.fetchData();
        isReady.value = true;
    }
    catch (err) {}
    finally {
        loader.hide();
        isLoading.value = false;
    }
}
fetchData();
</script>

<template>
    <div class="container" v-if="isReady === true">
        <div class="row">
            <div class="col-12 col-md-4">
                <ItemCorousol :item="itemDetailStore.item" :images="images"/>
                <ImgBar :sources="sources" />
            </div>
            <div class="col-12 col-md-8">
                <h4>{{ itemDetailStore.item?.name }}</h4>
                <h3 class="text-danger">${{ itemDetailStore.item?.price }}</h3>
                <form @submit.prevent="">
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text bg-black text-light">數量</span>
                        <input type="number" class="form-control" min="1" step="1" placeholder="數量" v-model="data.count">
                        <button class="btn btn-danger" type="submit">加入購物車</button>
                    </div>
                </form>
            </div>
        </div>
        <StoreInfo :store="itemDetailStore.item?.store" :from-item-page="true" />
        <div class="row">
            <ItemAccordion :item="itemDetailStore.item" />
        </div>
    </div>
</template>