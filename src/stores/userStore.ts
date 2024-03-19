import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { computed, ref } from "vue";
import type { TokenData } from "../models/token";
import type { Login } from "../models/login";
import { router } from "../routes";
import { useJsonGeneral } from "../composibles";

export const useUserStore = defineStore("userStore", () => {
    const { apiInstance, toast } = useJsonGeneral();
    const accessToken = useLocalStorage<string | null>("access_token", null, {listenToStorageChanges: true});
    const refreshToken = useLocalStorage<string | null>("refresh_token", null, {listenToStorageChanges: true});
    const loginData = ref<Login>({
        username: "",
        password: ""
    });
    const isLogin = computed(() => {
        return accessToken.value !== null && refreshToken.value !== null;
    });
    const clearData = () => {
        loginData.value = {
            username: "",
            password: ""
        };
    }
    const login = async () => {
        const tokenData: TokenData = await apiInstance.post<TokenData, Login>("/login", loginData.value);
        accessToken.value = tokenData.access_token;
        refreshToken.value = tokenData.refresh_token;
        await router.replace("/");
        clearData();
        toast.success("登入成功");
    }
    const logout = async () => {
        accessToken.value = null;
        refreshToken.value = null;
        await router.replace("/");
        toast.success("登出成功");
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