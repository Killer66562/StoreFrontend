import { defineStore } from "pinia";
import { Store } from "../models/store";
import { ref } from "vue";
import { Item, Page } from "../models";
import { useJsonGeneral } from "../composibles";

export const useUserStoreStore = defineStore("userStoreStore", () => {
    const { apiInstance } = useJsonGeneral();
    const page = ref<number>(1);
    const stop = ref<boolean>(false);
    const storeData = ref<Store>();
    const storeItems = ref<Item[]>([]);
    const fetchStore = async () => {
        try {
            storeData.value = await apiInstance.get<Store>("/user/store", {});
        }
        catch (err) {
            throw err;
        }
    }
    const fetchItems = async () => {
        try {
            const fetched = await apiInstance.get<Page<Item>>("/user/store/items", {page: page.value, size: 60});
            storeItems.value.push(...fetched.items);
            if (fetched.page >= fetched.pages)
                stop.value = true;
            else
                ++page.value;
        }
        catch (err) {
            throw err
        }
    }
    const reset = () => {
        storeData.value = undefined;
        storeItems.value = [];
        page.value = 1;
        stop.value = false;
    }
    return {
        page,
        stop,
        storeData,
        storeItems,
        fetchStore,
        fetchItems,
        reset
    }
});