<script setup lang="ts">
import { useOrderStore } from '../stores/orderStore';
const orderStore = useOrderStore();
const getStatus = (item_status: number) => {
    switch (item_status) {
        case 1:
            return "尚未處理"
        default:
            return "未知"
    }
}
orderStore.fetchOrdersData();
</script>

<template>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th class="col-1"></th>
                    <th class="col-1"></th>
                    <th class="col-1"></th>
                    <th class="col-2">商品名稱</th>
                    <th class="col-2">數量</th>
                    <th class="col-2">總計</th>
                    <th class="col-2">當前狀態</th>
                    <th class="col-1">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orderStore.ordersData" :key="order.id">
                    <td>{{  }}</td>
                    <td>{{  }}</td>
                    <td>{{  }}</td>
                    <td>{{ order.item.name }}</td>
                    <td>{{ order.count }}</td>
                    <td>{{ order.item.price * order.count }}</td>
                    <td>{{ getStatus(order.status) }}</td>
                    <td>
                        <button class="btn btn-danger">棄單</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>