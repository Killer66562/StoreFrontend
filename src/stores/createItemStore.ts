import { defineStore } from "pinia";
import { ref } from "vue";
import { CreateItem } from "../models/createItem";
import { ApiInstance, jsonConfig } from "../api";
import { Item } from "../models";
import { multipartConfig } from "../api/config";

export const useCreateItemStore = defineStore("createItemStore", () => {
    const data = ref<CreateItem>({
        name: "",
        introduction: "",
        price: 0,
        count: 1
    });
    const iconData = ref<File | null>();
    const sendData = async () => {
        if (iconData.value !== null && iconData.value !== undefined) {
            const jsonApiInstance = new ApiInstance(jsonConfig);
            try {
                const itemRaw = await jsonApiInstance.post<Item, CreateItem>("/user/store/items", data.value);
                const fdApiInstance = new ApiInstance(multipartConfig);
                const fd = new FormData();
                fd.append("icon", iconData.value as Blob);
                await fdApiInstance.put(`/user/store/items/${itemRaw.id}/icon`, fd);
            }
            catch (err) {
                throw err;
            }
        }
    }
    const reset = () => {
        data.value = {
            name: "",
            introduction: "",
            price: 0,
            count: 1
        };
        iconData.value = undefined;
    }
    return { data, iconData, sendData, reset };
});