<script setup lang="ts">
import { ref } from 'vue';
import ItemCard from '../components/ItemCard.vue';
import { useEventListener } from '@vueuse/core';
import StoreInfo from '../components/StoreInfo.vue';
import { useUserStoreStore } from '../stores/userStoreStore';
import { storeToRefs } from 'pinia';
import { useLoading } from 'vue-loading-overlay';
import LoginCheck from '../components/auth/LoginCheck.vue';
import { router } from '../routes';
const userStoreStore = useUserStoreStore();
const { storeData, storeItems, stop } = storeToRefs(userStoreStore);
const loading = ref<boolean>(true);
const error = ref<boolean>(false);
const loadingComposition = useLoading({
    isFullPage: true,
    opacity: 0
});
const scrollElement = ref<HTMLElement | null>(null);
const fetchData = async () => {
    loading.value = true;
    const loader = loadingComposition.show();
    try {
        await userStoreStore.fetchStore();
        await userStoreStore.fetchItems();
    }
    catch (err) {
        error.value = true;
        throw err;
    }
    finally {
        loader.hide();
        loading.value = false;
    }
}
const reRoute = async () => {
    await router.push("/user/add-item");
}
useEventListener(window, 'scroll', async () => {
    let bottomOfWindow = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight;
    if (bottomOfWindow && stop.value === false && loading.value === false)
        await fetchData();
});
fetchData();
</script>

<template>
    <LoginCheck>
        <template v-if="!loading">
            <h2 class="text-center">你的商店</h2>
            <StoreInfo :store="storeData" :from-item-page="false"/>
            <template v-if="storeData">
                <div class="d-grid mb-3">
                    <button type="button" class="btn btn-success btn-fluid" @click="reRoute">點我新增商品</button>
                </div>
                <h3 class="text-center" v-if="storeItems.length == 0">商店空空如也</h3>
                <div ref="scrollElement" v-else class="overflow-scroll row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6">
                    <div class="col mb-3" v-for="item in storeItems" :key="item.id">
                        <ItemCard :item="item" />
                    </div>
                </div>
                <div class="text-center" v-if="error">載入失敗。。。</div>
                <div class="d-flex flex-row justify-content-center" v-else-if="!stop">
                    <img height="48" src="../assets/loading.gif" alt="讀取中。。。">
                </div>
            </template>
            <template v-else>
                <h3 class="text-center">你還沒有創建商店喔</h3>
                <RouterLink to="/user/create-store"><h4 class="text-center">點我創建</h4></RouterLink>
            </template>
        </template>
    </LoginCheck>
</template>