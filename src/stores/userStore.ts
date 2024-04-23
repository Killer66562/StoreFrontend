import { defineStore } from "pinia";
import { ref } from 'vue'
import { User } from "../models/user";
import { ApiInstance, baseConfig } from "../api";

export const useUserStore = defineStore("userStore", () => {
    const userData = ref<User>();
    const fetchUserData = async () => {
        const apiInstance = new ApiInstance(baseConfig);
        try {
            userData.value = await apiInstance.get("/user");
        }
        catch (err) {
            throw err;
        }
    }
    const resetUserData = () => {
        userData.value = undefined;
    }
    return { userData, fetchUserData, resetUserData }
});