import { defineStore } from "pinia";
import { BuyNextTimeItem } from "../models";
import { ref } from "vue";
import { ApiInstance, baseConfig } from "../api";

export const useBuyNextTimeItemStore = defineStore("buyNextTimeItemStore", () => {
    const bntItemsData = ref<BuyNextTimeItem[]>([]);
    const fetchBuyNextTimeItemsData = async () => {
        const apiInstance = new ApiInstance(baseConfig);
        try {
            bntItemsData.value = await apiInstance.get("/user/buy_next_time_items");
        }
        catch (err) {
            throw err;
        }
    }
    const resetBuyNextTimeItemsData = () => {
        bntItemsData.value  = [];
    }
    return { bntItemsData, fetchBuyNextTimeItemsData, resetBuyNextTimeItemsData };
});