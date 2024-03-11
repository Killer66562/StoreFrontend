<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
    submitBtnText: string,
    resetBtnText: string
}>();
</script>

<template>
    <div class="btn-group mb-3">
        <button type="submit">{{ submitBtnText }}</button>
        <button type="reset">{{ resetBtnText }}</button>
    </div>
</template>