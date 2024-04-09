import { defineStore } from "pinia";
import { Item } from "../models";
import { ref } from "vue";
import { ApiInstance, jsonConfig } from "../api";
import { router } from "../routes";
import { CreateCartItem } from "../models/createCartItem";

export const useItemDetailStore = defineStore("itemDetailStore", () => {
    const item = ref<Item>();
    const data = ref<CreateCartItem>({
        item_id: 0,
        count: 1
    })
    const fetchData = async () => {
        const apiInstance = new ApiInstance(jsonConfig);
        item.value = await apiInstance.get(`/general/items/${router.currentRoute.value.params.id}` as string, {});
    }
    const addToCart = async () => {
        if (item.value !== undefined) {
            const apiInstance = new ApiInstance(jsonConfig);
            data.value.item_id = item.value?.id
            try {
                await apiInstance.post("/user/cart_items", data.value);
            }
            catch (err) {
                throw err;
            }
        }
    }
    return { item, data, fetchData, addToCart };
});