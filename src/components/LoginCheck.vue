<script setup lang="ts">
import { router } from '../routes';
import { useTokenStore } from '../stores';
const tokenStore = useTokenStore();
const redirectCheck = async () => {
    if (!tokenStore.isLogin)
        await router.replace("/login");
}
redirectCheck();
</script>

<template>
    <slot v-if="tokenStore.isLogin"></slot>
</template>