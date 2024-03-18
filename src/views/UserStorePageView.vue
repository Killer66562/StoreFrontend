<script setup lang="ts">
import { ref } from 'vue';
import { ApiInstance, jsonConfig } from '../api';
import { Item, Page } from '../models';
import ItemCard from '../components/ItemCard.vue';
import { useEventListener } from '@vueuse/core';
const stop = ref<boolean>(false);
const loading = ref<boolean>(true);
const error = ref<boolean>(false);
const page = ref<number>(1);
const scrollElement = ref<HTMLElement | null>(null);
const data = ref<Item[]>([]);
const apiInstance = new ApiInstance(jsonConfig);
const haveStore = ref<boolean>(true);
const fetchData = async () => {
    loading.value = true;
    try {
        const fetched = await apiInstance.get<Page<Item>>("/user/store/items", {page: page.value, size: 60});
        data.value.push(...fetched.items);
        if (fetched.page >= fetched.pages)
            stop.value = true;
        else
            ++page.value;
    }
    catch (err: any) {
        console.error(err.status);
        if (err.status == 400)
            haveStore.value = false;
        error.value = true;
    }
    loading.value = false;
}
useEventListener(window, 'scroll', async () => {
    let bottomOfWindow = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight;
    if (bottomOfWindow && stop.value === false && loading.value === false)
        await fetchData();
});
fetchData();
</script>

<template>
    <div class="container" v-if="haveStore">
        <div ref="scrollElement" class="overflow-scroll row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6">
            <div class="col mb-3" v-for="item in data" :key="item.id">
                <ItemCard :item="item" />
            </div>
        </div>
        <div class="text-center" v-if="error">載入失敗。。。</div>
        <div class="d-flex flex-row justify-content-center" v-else-if="!stop">
            <img height="48" src="../assets/loading.gif" alt="讀取中。。。">
        </div>
    </div>
    <div class="container" v-else>
        <h3 class="text-center">你還沒有創建商店喔</h3>
        <RouterLink to="/user/create-store"><h4 class="text-center">點我創建</h4></RouterLink>
    </div>
</template>