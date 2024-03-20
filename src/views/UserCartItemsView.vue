<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCartItemStore } from '../stores/cartItemStore';
import { ref } from 'vue';
import { useLoading } from 'vue-loading-overlay';
import LoginCheck from '../components/LoginCheck.vue';
const loadingComposition = useLoading({
    opacity: 0,
    isFullPage: true
});
const cartItemStore = useCartItemStore();
const { cartItems, selectedCartItems, totalPrice } = storeToRefs(cartItemStore);
const loading = ref<boolean>(true);
const ready = ref<boolean>(false);
const fetchData = async () => {
    loading.value = true;
    const loader = loadingComposition.show();
    try {
        await cartItemStore.fetchCartItems();
        ready.value = true;
    }
    catch (err) {
        throw err;
    }
    finally {
        loader.hide();
        loading.value = false;
    }
}
fetchData();
</script>

<template>
    <LoginCheck>
        <h3 class="text-center" v-if="loading === true">讀取中。。。</h3>
        <template v-else-if="ready === true">
            <div class="table-responsive">
                <table class="table">
                    <thead>
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
                    </thead>
                    <tbody>
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
                    </tbody>
                </table>
            </div>
            <form class="sticky-bottom" style="background-color: antiquewhite;" @submit.prevent="cartItemStore.sendOrders">
                <h4>訂單總價：<span class="text-danger">${{ totalPrice }}</span></h4>
                <button type="submit" class="btn btn-danger">送出訂單</button>
            </form>
        </template>
        <h3 class="text-center" v-else>載入失敗。。。</h3>
        <template #notLogin>
            <h3 class="text-center">請先登入</h3>
        </template>
    </LoginCheck>
</template>