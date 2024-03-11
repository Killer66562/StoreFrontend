<script setup lang="ts">
import { defineProps } from 'vue';
defineProps<{
    collapseId: string
}>();
</script>

<template>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" :data-bs-target="`#${collapseId}`" :aria-controls="collapseId" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" :id="collapseId">

        <slot></slot>
    </div>
</template>