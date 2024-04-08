import { defineStore, storeToRefs } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { computed, ref } from "vue";
import type { TokenData } from "../models/token";
import type { Login } from "../models/login";
import { router } from "../routes";
import { useJsonGeneral } from "../composibles";
import { useRootStore } from "./rootStore";
import { User } from "../models/user";
import { useLoading } from "vue-loading-overlay";

export const useUserStore = defineStore("userStore", () => {
    const userDataLoading = ref<boolean>(false);
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
            password: "",
        };
    }
    const login = async () => {
        const loading = useLoading({
            isFullPage: false,
            opacity: 0
        });
        const loader = loading.show();
        try {
            const tokenData: TokenData = await apiInstance.post<TokenData, Login>("/login", loginData.value);
            accessToken.value = tokenData.access_token;
            refreshToken.value = tokenData.refresh_token;
            await fetchUserData();
            await router.replace("/");
            clearData();
            toast.success("登入成功");
        }
        catch (err) {
            toast.error("使用者名稱或密碼錯誤。");
            throw err;
        }
        finally {
            loader.hide();
        }
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
        userDataLoading.value = true;
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
        userDataLoading.value = false;
    }
    return {
        accessToken,
        refreshToken,
        isLogin,
        loginData,
        userData,
        login,
        logout,
        fetchUserData,
        userDataLoading
    }
})