<script setup lang="ts">
import ItemCorousol from '../ItemCorousol.vue';
import ImgBar from '../ImgBar.vue';

import { Item } from '../../models';
import { CreateCartItem } from '../../models/createCartItem';
import { useCartItemStore } from '../../stores/cartItemStore';
import { useBuyNextTimeItemStore } from '../../stores/buyNextTimeItemStore';

defineProps<{
    item?: Item,
    data: CreateCartItem
}>();

const buyNextTimeItemStore = useBuyNextTimeItemStore();
const cartItemStore = useCartItemStore();
</script>

<template>
    <div class="row">
        <div class="col-12 col-md-3">
            <ItemCorousol :item="item" class="mb-3"/>
            <ImgBar :images="item?.images" />
        </div>
        <div class="col-12 col-md-9">
            <h4 class="mb-3">{{ item?.name }}</h4>
            <h3 class="text-danger mb-3">${{ item?.price }}</h3>
            <form @submit.prevent="cartItemStore.createCartItem(item?.id, data.count)">
                <div class="input-group input-group-sm mb-3">
                    <span class="input-group-text bg-black text-light">數量</span>
                    <input type="number" class="form-control" min="1" step="1" placeholder="數量" v-model="data.count">
                    <button class="btn btn-danger" type="submit">加入購物車</button>
                    <button class="btn btn-success" type="button" @click="buyNextTimeItemStore.createBNTitem(item?.id)" v-if="item">加入願望清單</button>
                </div>
            </form>
        </div>
    </div>
</template>