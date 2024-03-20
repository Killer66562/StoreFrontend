<script setup lang="ts">
import LoginCheck from './LoginCheck.vue';
import { useUserStore } from '../stores/userStore';
import { router } from '../routes';
const userStore = useUserStore();
const refetchCheck = async () => {
    if (userStore.userData)
        await router.replace("/login");
}
refetchCheck();
</script>

<template>
    <LoginCheck>
        <slot name="loading" v-if="userStore.userDataLoading"></slot>
        <slot name="failed" v-else-if="!userStore.userData"></slot>
        <slot v-else></slot>
    </LoginCheck>
</template>