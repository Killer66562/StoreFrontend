import { defineStore } from "pinia";
import { ref } from "vue";
import { Item } from "../models";
import { useJsonGeneral } from "../composibles";

export const useItemsStore = defineStore("itemsStore", () => {
    const { apiInstance, toast } = useJsonGeneral();
    const params = ref<object>({});
    const items = ref<Item[]>([]);
    const fetchItems = async () => {
        try {
            items.value = await apiInstance.get("/general/items", params.value);
        }
        catch (err: any) {
            toast.error(err);
            throw err;
        }
        finally {

        }
    }
    return {
        params,
        items,
        fetchItems
    }
});