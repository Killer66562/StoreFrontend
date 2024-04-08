<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "../../stores";
import UserLoading from "../effect/UserLoading.vue";
import NeedLogin from "../effect/NeedLogin.vue";
const userStore = useUserStore();
const { isLogin, userData, userDataLoading } = storeToRefs(userStore);
</script>

<template>
    <slot name="loading" v-if="userDataLoading">
        <UserLoading />
    </slot>
    <slot v-else-if="isLogin && userData"></slot>
    <slot name="fail" v-else>
        <NeedLogin />
    </slot>
</template>

<style></style>