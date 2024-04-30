<script setup lang="ts">
import { useBuyNextTimeItemStore } from '../stores/buyNextTimeItemStore';
const buyNextTimeItemStore = useBuyNextTimeItemStore();
buyNextTimeItemStore.fetchBuyNextTimeItemsData();
</script>

<template>
    <h2 class="text-center mb-3">願望清單</h2>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th class="col-4">商品名稱</th>
                    <th class="col-3">商店名稱</th>
                    <th class="col-3">加入願望清單時間</th>
                    <th class="col-2">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="BNTItem in buyNextTimeItemStore.bntItemsData" :key="BNTItem.id">
                    <td>{{ BNTItem.item.name }}</td>
                    <td>{{ BNTItem.item.store?.name }}</td>
                    <td>{{ BNTItem.created_at }}</td>
                    <td>
                        <button class="btn btn-danger" @click="buyNextTimeItemStore.removeBuyNextTimeItem(BNTItem.id)">從願望清單中移除</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>