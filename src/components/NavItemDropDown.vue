<script setup lang="ts">
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
interface ItemInfo {
    to: string,
    displayText: string
};
defineProps<{
    dropdownId: string,
    dropdownText: string,
    dropitemInfos: (ItemInfo | null)[]
}>();
</script>

<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" :id="dropdownId" role="button" data-bs-toggle="dropdown" aria-expanded="false">{{ dropdownText }}</a>
        <ul class="dropdown-menu" :aria-labelledby="dropdownId">
            <li v-for="itemInfo in dropitemInfos">
                <hr class="dropdown-divider" v-if="itemInfo === null">
                <RouterLink v-else :to="itemInfo.to"  class="dropdown-item">{{ itemInfo.displayText }}</RouterLink>
            </li>
        </ul>
    </li>
</template>