<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "../../stores";
import NoPermission from "../effect/NoPermission.vue";
import UserLoading from "../effect/UserLoading.vue";
const userStore = useUserStore();
const { isLogin, userData, userDataLoading } = storeToRefs(userStore);
</script>

<template>
    <slot name="loading" v-if="userDataLoading">
        <UserLoading />
    </slot>
    <slot v-else-if="isLogin && userData?.is_admin"></slot>
    <slot name="fail" v-else>
        <NoPermission />
    </slot>
</template>

<style></style>