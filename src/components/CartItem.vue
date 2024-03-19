<script setup lang="ts">
import { defineProps } from 'vue';
import { CartItem } from '../models/cartItem';
defineProps<{
    cartItem: CartItem
}>();
</script>

<template>
    <tr>
        <td class="col-2" style="aspect-ratio: 1 / 1;"><img src="../assets/item.jpg"></td>
        <td class="col-2"></td>
    </tr>
</template>