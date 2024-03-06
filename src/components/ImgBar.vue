<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
    sources: string[]
}>();
</script>

<template>
    <div class="row flex-nowrap overflow-auto mb-3">
        <div class="col-4 col-md-3 pb-3" v-for="src in sources" :key="src">
            <img :src="src" class="img-fluid" alt="item">
        </div>
    </div>
</template>