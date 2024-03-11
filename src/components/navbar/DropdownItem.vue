<script setup lang="ts">
import { defineProps } from 'vue';
defineProps<{
    to: string,
    disabled?: boolean
}>();
</script>

<template>
    <li>
        <RouterLink :to="to" class="dropdown-item" :class="disabled ? 'disabled' : ''">
            <slot></slot>
        </RouterLink>
    </li>
</template>