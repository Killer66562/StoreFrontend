<script setup lang="ts">
import { defineProps } from 'vue'
import { ItemImage } from '../models/itemImage';
import { getStaticFile } from '../funcs';
defineProps<{
    images?: ItemImage[]
}>();
</script>

<template>
    <div class="row flex-nowrap overflow-auto mb-3">
        <div class="col-4 col-md-3 pb-3" v-for="src in images" :key="src.id">
            <img :src="getStaticFile(src.path)" class="img-fluid" alt="image">
        </div>
    </div>
</template>