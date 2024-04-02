import { defineStore } from "pinia";
import { ref } from "vue";
import { Item } from "../models";
import { ApiInstance, jsonConfig } from "../api";

export const useHomePageStore = defineStore("homePageStore", () => {
    const hotItems = ref<Item[]>([]);
    const goodItems = ref<Item[]>([]);
    const likedItems = ref<Item[]>([]);
    const fetchHotItems = async () => {
        const apiInstance = new ApiInstance(jsonConfig);
        try {
            hotItems.value = await apiInstance.get<Item[]>("/general/items/hot");
        }
        catch (err) {
            throw err;
        }
    }
    const fetchGoodItems = async () => {
        const apiInstance = new ApiInstance(jsonConfig);
        try {
            goodItems.value = await apiInstance.get<Item[]>("/general/items/good");
        }
        catch (err) {
            throw err;
        }
    }
    const fetchLikedItems = async () => {
        const apiInstance = new ApiInstance(jsonConfig);
        try {
            likedItems.value = await apiInstance.get<Item[]>("/general/items/liked");
        }
        catch (err) {
            throw err;
        }
    }
    const reset = () => {
        hotItems.value = [];
        goodItems.value = [];
        likedItems.value = [];
    }
    const fetchAll = async () => {
        try {
            await Promise.all([fetchHotItems(), fetchGoodItems(), fetchLikedItems()]);
        }
        catch (err) {
            throw err;
        }
    }
    return {
        hotItems,
        goodItems,
        likedItems,
        fetchHotItems,
        fetchGoodItems,
        fetchLikedItems,
        reset,
        fetchAll
    }
});