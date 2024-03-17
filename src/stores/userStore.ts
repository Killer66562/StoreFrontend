import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { computed, ref } from "vue";
import { ApiInstance, jsonConfig } from "../api";
import type { TokenData } from "../models/token";
import type { Login } from "../models/login";
import { router } from "../routes";

export const useUserStore = defineStore("userStore", () => {
    const accessToken = useLocalStorage<string | null>("access_token", null, {listenToStorageChanges: true});
    const refreshToken = useLocalStorage<string | null>("refresh_token", null, {listenToStorageChanges: true});
    const loginData = ref<Login>({
        username: "",
        password: ""
    });
    const isLogin = computed(() => {
        return accessToken.value !== null && refreshToken.value !== null;
    })
    const login = async () => {
        console.log("test");
        const apiInstance = new ApiInstance(jsonConfig);
        const tokenData: TokenData = await apiInstance.post<TokenData, Login>("/login", loginData.value);
        loginData.value = {
            username: "",
            password: ""
        };
        accessToken.value = tokenData.access_token;
        refreshToken.value = tokenData.refresh_token;
        await router.replace("/");
    }
    const logout = () => {
        accessToken.value = null;
        refreshToken.value = null;
    }
    return {
        accessToken,
        refreshToken,
        isLogin,
        loginData,
        login,
        logout,
    }
})