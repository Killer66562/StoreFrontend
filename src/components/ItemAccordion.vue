<script setup lang="ts">
import { defineProps } from 'vue';
import type { Item } from '../models';
defineProps<{
    item: Item | null
}>();
</script>

<template>
    <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    商品介紹
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                <div class="accordion-body">{{ item?.introduction }}</div>
            </div>
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    店家資訊
                </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show">
                <div class="accordion-body">
                    <p>名稱：{{ item?.store?.name }}</p>
                    <p>介紹：{{ item?.store?.introduction }}</p>
                </div>
            </div>
        </div>
    </div>
</template>