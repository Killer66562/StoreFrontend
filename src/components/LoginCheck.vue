<script setup lang="ts">
import { router } from '../routes';
import { useUserStore } from '../stores/userStore';
const userStore = useUserStore();
const redirectCheck = async () => {
    if (!userStore.isLogin)
        await router.replace("/login");
}
redirectCheck();
</script>

<template>
    <slot v-if="userStore.isLogin"></slot>
</template>