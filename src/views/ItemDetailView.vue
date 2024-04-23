<script setup lang="ts">
import { ref } from 'vue'
import ItemCorousol from '../components/ItemCorousol.vue';
import ItemDetail from '../components/ItemDetail.vue'
import ImgBar from '../components/ImgBar.vue';
import { CreateCartItem } from '../models/createCartItem';
import { useLoading } from 'vue-loading-overlay';
import StoreInfo from '../components/StoreInfo.vue';
import { useItemDetailStore } from '../stores/itemDetailStore';
import { ApiInstance, baseConfig } from '../api';
import { useToast } from 'vue-toast-notification';
const isLoading = ref<boolean>();
const isReady = ref<boolean>();
const loading = useLoading({
    isFullPage: true,
    opacity: 0
});
const itemDetailStore = useItemDetailStore();
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
const createBNTitem = async (item_id: number) => {
    const toast = useToast();
    const apiInstance = new ApiInstance(baseConfig);
    try {
        await apiInstance.post(`/user/buy_next_time_items`, { item_id: item_id });
        await 
        toast.success("成功加入願望清單");
    }
    catch (err) {
        toast.error("無法加入願望清單");
    }
}
fetchData();
</script>

<template>
    <div class="container" v-if="isReady === true">
        <div class="row">
            <div class="col-12 col-md-3">
                <ItemCorousol :item="itemDetailStore.item" class="mb-3"/>
                <ImgBar :images="itemDetailStore.item?.images" />
            </div>
            <div class="col-12 col-md-9">
                <h4 class="mb-3">{{ itemDetailStore.item?.name }}</h4>
                <h3 class="text-danger mb-3">${{ itemDetailStore.item?.price }}</h3>
                <form @submit.prevent="">
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text bg-black text-light">數量</span>
                        <input type="number" class="form-control" min="1" step="1" placeholder="數量" v-model="data.count">
                        <button class="btn btn-danger" type="submit">加入購物車</button>
                        <button class="btn btn-success" type="button" @click="createBNTitem(itemDetailStore.item?.id)" v-if="itemDetailStore.item">加入願望清單</button>
                    </div>
                </form>
            </div>
        </div>
        <StoreInfo :store="itemDetailStore.item?.store" :from-item-page="true" />
        <ItemDetail :item="itemDetailStore.item"/>
    </div>
</template>