<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTokenStore, useUserStore } from "../../stores";
import NeedLogin from "../effect/NeedLogin.vue";
const tokenStore = useTokenStore();
const userStore = useUserStore();
const { isLogin } = storeToRefs(tokenStore);
const { userData } = storeToRefs(userStore);
</script>

<template>
    <slot v-if="isLogin && userData"></slot>
    <slot name="fail" v-else>
        <NeedLogin />
    </slot>
</template>

<style></style>