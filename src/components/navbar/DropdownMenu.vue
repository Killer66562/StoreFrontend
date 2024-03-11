<script setup lang="ts">
import { defineProps } from 'vue';
defineProps<{
    dropdownId: string,
    dropdownText: string,
    disabled?: boolean
}>();
</script>

<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" :id="dropdownId" role="button" data-bs-toggle="dropdown" aria-expanded="false" :class="disabled ? 'disabled' : ''">{{ dropdownText }}</a>
        <ul class="dropdown-menu" :aria-labelledby="dropdownId">
            <slot></slot>
        </ul>
    </li>
</template>