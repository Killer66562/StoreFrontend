import { defineStore, storeToRefs } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { computed, ref } from "vue";
import type { TokenData } from "../models/token";
import type { Login } from "../models/login";
import { router } from "../routes";
import { useJsonGeneral } from "../composibles";
import { useRootStore } from "./rootStore";
import { User } from "../models/user";

export const useUserStore = defineStore("userStore", () => {
    const rootStore = useRootStore();
    const { registerStore, cartItemStore, userStoreStore } = storeToRefs(rootStore);
    const { apiInstance, toast } = useJsonGeneral();
    const accessToken = useLocalStorage<string | null>("access_token", null, {listenToStorageChanges: true});
    const refreshToken = useLocalStorage<string | null>("refresh_token", null, {listenToStorageChanges: true});
    const userData = ref<User>();
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
        await fetchUserData();
        toast.success("登入成功");
    }
    const logout = async () => {
        accessToken.value = null;
        refreshToken.value = null;
        await router.replace("/");
        clearData();
        userData.value = undefined;
        registerStore.value.clearData();
        cartItemStore.value.clearCartItems();
        cartItemStore.value.clearSelectedCartItems();
        userStoreStore.value.reset();
        toast.success("登出成功");
    }
    const fetchUserData = async () => {
        if (isLogin.value === true) {
            try {
                userData.value = await apiInstance.get("/user", {});
            }
            catch (err) {
                await logout();
                throw err;
            }
            finally {
                clearData();
            }
        }
    }
    return {
        accessToken,
        refreshToken,
        isLogin,
        loginData,
        userData,
        login,
        logout,
        fetchUserData
    }
})