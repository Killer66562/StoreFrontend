<script setup lang="ts">
import { defineProps } from 'vue';
import { getStaticFile } from '../funcs'
import type { Item } from '../models';
import { useBuyNextTimeItemStore } from '../stores/buyNextTimeItemStore';
defineProps<{
    item: Item
}>();
const buyNextTimeStore = useBuyNextTimeItemStore();
const findTheBNTItemToRemove = (item_id: number) => {
    const bntItem = buyNextTimeStore.bntItemsData.find((bntIt) => {
        return bntIt.item_id == item_id;
    });
    return bntItem?.id;
}
</script>

<template>
    <div class="card">
        <RouterLink class="text-decoration-none text-dark" :to="`/items/${item.id}`">
            <div>
                <img :src="getStaticFile(item.icon)" class="card-img-top" :alt="`Item #${item.id}`" style="aspect-ratio: 1 / 1;" v-if="item.icon">
                <img src="../assets/loading.gif" class="card-img-top" :alt="`Item #${item.id}`" style="aspect-ratio: 1 / 1;" v-else>
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <p class="card-text"></p>
                <li class="list-group-item">${{ item.price }}</li>
                <li class="list-group-item">剩下{{ item.count }}個</li>
            </div>
        </RouterLink>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <div class="d-flex flex-row justify-content-evenly">
                    <button type="button" class="btn btn-circle" @click="buyNextTimeStore.createBNTitem(item.id)" v-if="!buyNextTimeStore.onlyItemIds.includes(item.id)">❤️</button>
                    <button type="button" class="btn btn-circle bg-danger" v-else @click="buyNextTimeStore.removeBuyNextTimeItem(findTheBNTItemToRemove(item.id) as number)">❤️</button>
                    <button class="btn btn-circle">🛒</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.btn-circle {
  width: 30px;
  height: 30px;
  text-align: center;
  padding: 0;
  font-size: 12px;
  line-height: 1.428571429;
  border-radius: 15px;
  border-width: 2;
  border-color: gray;
}
.btn-circle.btn-lg {
  width: 50px;
  height: 50px;
  padding: 0;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 25px;
}
.btn-circle.btn-xl {
  width: 70px;
  height: 70px;
  padding: 0;
  font-size: 24px;
  line-height: 1.33;
  border-radius: 35px;
}
</style>