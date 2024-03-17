import { defineStore } from "pinia";
import { ref } from "vue";
import { useAsyncState } from "@vueuse/core";
import { ApiInstance } from "../api";
import { Item } from "../models";

const useSearchStore = defineStore("searchStore", () => {
    const searchBarContent = ref<string>("");
    const {state, isLoading, isReady, error, execute} = useAsyncState<Item[]>(async () => {
        const apiInstance = new ApiInstance({});
        return apiInstance.get("/items", {"query": searchBarContent.value});
    }, []);
    return {
        searchBarContent,
        state,
        isLoading,
        isReady,
        error,
        execute
    }
});

export {
    useSearchStore
}