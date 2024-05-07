import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { computed } from "vue";
import { useUserStore } from "./userStore";


export const useTokenStore = defineStore("tokenStore", () => {
    const userStore = useUserStore();
    const refreshToken = useLocalStorage<string | null>("refresh_token", localStorage.getItem("refresh_token"), { listenToStorageChanges: true });
    const accessToken = useLocalStorage<string | null>("access-token", localStorage.getItem("access_token"), { listenToStorageChanges: true });
    const isLogin = computed<boolean>(() => {
        return refreshToken.value !== null && accessToken.value !== null;
    });
    const logout = () => {
        refreshToken.value = null;
        accessToken.value = null;
        userStore.resetUserData();
    }
    return {
        isLogin, refreshToken, accessToken, logout
    }
});