import { defineStore } from "pinia";
import { Store } from "../models/store";
import { ref } from "vue";
import { ApiInstance, baseConfig } from "../api";

export const useStoreStore = defineStore("storeStore", () => {
    const storeData = ref<Store>();
    const fetchStore = async (storeId?: number) => {
        if (storeId) {
            const apiInstance = new ApiInstance(baseConfig);
            try {
                storeData.value = await apiInstance.get(`/general/stores/${storeId}`);
            }
            catch (err) {
                throw err;
            }
        }
    }
    const resetStore = () => {
        storeData.value = undefined;
    }
    return { storeData, fetchStore, resetStore };
});