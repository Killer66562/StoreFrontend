<script setup lang="ts">
import { CartItem } from '../models/cartItem';
import { ref, computed } from 'vue';
const cartItems = ref<CartItem[]>([
    {
        id: 1,
        item_id: 1,
        user_id: 1,
        count: 10,
        created_at: new Date(),
        item: {
            id: 1,
            name: "aaa",
            introduction: "aaaaaa",
            price: 100,
            count: 100
        }
    },
    {
        id: 2,
        item_id: 1,
        user_id: 1,
        count: 10,
        created_at: new Date(),
        item: {
            id: 1,
            name: "aaa",
            introduction: "aaaaaa",
            price: 100,
            count: 100
        }
    },
    {
        id: 3,
        item_id: 1,
        user_id: 1,
        count: 10,
        created_at: new Date(),
        item: {
            id: 1,
            name: "aaa",
            introduction: "aaaaaa",
            price: 100,
            count: 100
        }
    },
    {
        id: 4,
        item_id: 1,
        user_id: 1,
        count: 10,
        created_at: new Date(),
        item: {
            id: 1,
            name: "aaa",
            introduction: "aaaaaa",
            price: 100,
            count: 100
        }
    },
    {
        id: 1,
        item_id: 1,
        user_id: 1,
        count: 10,
        created_at: new Date(),
        item: {
            id: 1,
            name: "aaa",
            introduction: "aaaaaa",
            price: 100,
            count: 100
        }
    },
    {
        id: 1,
        item_id: 1,
        user_id: 1,
        count: 10,
        created_at: new Date(),
        item: {
            id: 1,
            name: "aaa",
            introduction: "aaaaaa",
            price: 100,
            count: 100
        }
    },
    {
        id: 1,
        item_id: 1,
        user_id: 1,
        count: 10,
        created_at: new Date(),
        item: {
            id: 1,
            name: "aaa",
            introduction: "aaaaaa",
            price: 100,
            count: 100
        }
    },
    {
        id: 1,
        item_id: 1,
        user_id: 1,
        count: 10,
        created_at: new Date(),
        item: {
            id: 1,
            name: "aaa",
            introduction: "aaaaaa",
            price: 100,
            count: 100
        }
    },
    {
        id: 1,
        item_id: 1,
        user_id: 1,
        count: 10,
        created_at: new Date(),
        item: {
            id: 1,
            name: "aaa",
            introduction: "aaaaaa",
            price: 100,
            count: 100
        }
    }
]);
const selectedCartItems = ref<CartItem[]>([]);
const getTotalPrice = computed(() => {
    let total = 0;
    selectedCartItems.value.forEach(element => {
        total += element.item.price * element.count;
    });
    return total;
});
</script>

<template>
    <div class="table-responsive">
        <table class="table">
            <tr>
                <th class="col-1"></th>
                <th class="col-1"></th>
                <th class="col-1"></th>
                <th class="col-2">商品名稱</th>
                <th class="col-2">單價</th>
                <th class="col-2">數量</th>
                <th class="col-2">總計</th>
                <th class="col-1">操作</th>
            </tr>
            <tr v-for="cartItem in cartItems" :key="cartItem.id">
                <td><input type="checkbox" v-model="selectedCartItems" :value="cartItem"></td>
                <td><img class="img-fluid" src="../assets/item.jpg" alt="cart-item" style="aspect-ratio: 1 / 1;"></td>
                <td></td>
                <td class="text-wrap">{{ cartItem.item.name }}</td>
                <td>{{ cartItem.item.price }}</td>
                <td>{{ cartItem.count }}</td>
                <td>{{ cartItem.item.price * cartItem.count }}</td>
                <td>
                    <button type="button" class="btn btn-danger">刪除</button>
                </td>
            </tr>
        </table>
    </div>
    <form class="sticky-bottom" style="background-color: antiquewhite;">
        <h4>訂單總價：<span class="text-danger">${{ getTotalPrice }}</span></h4>
        <button type="submit" class="btn btn-danger">送出訂單</button>
    </form>
</template>