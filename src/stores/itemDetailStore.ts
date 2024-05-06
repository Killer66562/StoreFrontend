import { defineStore } from "pinia";
import { Item } from "../models";
import { ref } from "vue";
import { ApiInstance, baseConfig } from "../api";
import { router } from "../routes";
import { CreateCartItem } from "../models/createCartItem";
import { useUserStore } from "./userStore";

export const useItemDetailStore = defineStore("itemDetailStore", () => {
    const userStore = useUserStore();
    const item = ref<Item>();
    const data = ref<CreateCartItem>({
        item_id: 0,
        count: 1
    });
    const comment = ref<string>("");
    const resetComment = () => {
        const userComment = item.value?.comments.find((com) => {
            return com.user_id == userStore.userData?.id;
        });
        if (!userComment)
            comment.value = "";
        else
            comment.value = userComment.content;
    }
    const fetchData = async () => {
        const apiInstance = new ApiInstance(baseConfig);
        try {
            item.value = await apiInstance.get(`/general/items/${router.currentRoute.value.params.itemId}`);
        }
        catch (err) {
            throw err;
        }
        finally {
            resetComment();
        }
    }
    const leaveComment = async () => {
        const apiInstance = new ApiInstance(baseConfig);
        try {
            await apiInstance.put(`/general/items/${router.currentRoute.value.params.itemId}/comments`, { content: comment.value });
            await fetchData();
        }
        catch (err) {
            throw err;
        }
    }
    return { item, data, comment, leaveComment, fetchData };
});