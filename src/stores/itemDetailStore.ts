import { defineStore } from "pinia";
import { Item } from "../models";
import { ref } from "vue";
import { ApiInstance, jsonConfig } from "../api";
import { router } from "../routes";

export const useItemDetailStore = defineStore("itemDetailStore", () => {
    const item = ref<Item>();
    const fetchData = async () => {
        const apiInstance = new ApiInstance(jsonConfig);
        item.value = await apiInstance.get(`/general/items/${router.currentRoute.value.params.id}` as string, {});
    }
    return { item, fetchData };
});