<script setup lang="ts">
import { defineProps } from 'vue';
defineProps<{
    to: string
}>();
</script>

<template>
    <li class="nav-item">
        <RouterLink :to="to" class="nav-link" href="#">
            <slot></slot>
        </RouterLink>
    </li>
</template>