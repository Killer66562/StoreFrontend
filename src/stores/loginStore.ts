import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";
import { Login, TokenData } from "../models";
import { ApiInstance, baseConfig } from "../api";
import { useTokenStore } from "./tokenStore";


export const useLoginStore = defineStore("loginStore", () => {
    const loginData = ref<Login>({
        username: "",
        password: ""
    });
    const sendLoginData = async () => {
        const apiInstance = new ApiInstance(baseConfig);
        try {
            const tokenData: TokenData = await apiInstance.post<TokenData, Login>("/login", loginData.value);
            const tokenStore = useTokenStore();
            const { accessToken, refreshToken } = storeToRefs(tokenStore);
            accessToken.value = tokenData.access_token;
            refreshToken.value = tokenData.refresh_token;
            resetLoginData();
        }
        catch (err) {
            throw err;
        }
    }
    const resetLoginData = () => {
        loginData.value = {
            username: "",
            password: ""
        }
    }
    return {
        loginData, sendLoginData, resetLoginData
    }
});