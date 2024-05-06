import { defineStore } from "pinia";
import { BuyNextTimeItem } from "../models";
import { ref } from "vue";
import { ApiInstance, baseConfig } from "../api";
import { useToast } from "vue-toast-notification";

export const useBuyNextTimeItemStore = defineStore("buyNextTimeItemStore", () => {
    const bntItemsData = ref<BuyNextTimeItem[]>([]);
    const onlyItemIds = ref<number[]>([]);
    const createBNTitem = async (item_id: number) => {
        const toast = useToast();
        const apiInstance = new ApiInstance(baseConfig);
        try {
            await apiInstance.post(`/user/buy_next_time_items`, { item_id: item_id });
            toast.success("成功加入願望清單");
        }
        catch (err) {
            toast.error("無法加入願望清單");
        }
        finally {
            await fetchBuyNextTimeItemsData();
        }
    }
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
    const removeBuyNextTimeItem = async (itemId: number) => {
        const apiInstance = new ApiInstance(baseConfig);
        const bntItem = bntItemsData.value.find((bItem) => {
            return bItem.item_id == itemId;
        });
        if (bntItem) {
            try {
                await apiInstance.delete(`/user/buy_next_time_items/${bntItem.id}`);
            }
            catch (err) {
                throw err;
            }
            finally {
                await fetchBuyNextTimeItemsData();
            }
        }
    }
    const haveBNTitem = (itemId: number) => {
        return bntItemsData.value.find((bntItem) => {
            return bntItem.item_id == itemId;
        }) ? true : false;
    }
    return { bntItemsData, onlyItemIds, fetchBuyNextTimeItemsData, resetBuyNextTimeItemsData, removeBuyNextTimeItem, createBNTitem, haveBNTitem };
});