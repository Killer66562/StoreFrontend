<script setup lang="ts">
import { useHomePageStore } from '../stores/homePageStore';
import ItemBar from '../components/ItemBar.vue';
import { storeToRefs } from 'pinia';
const homePageStore = useHomePageStore();
const { hotItems, goodItems, likedItems } = storeToRefs(homePageStore);
const fetchAll = async () => {
    try {
        await homePageStore.fetchAll();
    }
    catch (err) {
        console.log(err);
    }
}
fetchAll();
</script>

<template>
    <div class="container">
        <ItemBar title="熱門商品" :items="hotItems"></ItemBar>
        <h5>廣告商有給錢我得放上去😭</h5>
        <ItemBar title="精選好物" :items="goodItems"></ItemBar>
        <ItemBar title="你可能會喜歡" :items="likedItems"></ItemBar>
    </div>
</template>