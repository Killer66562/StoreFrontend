import { defineStore } from "pinia";
import { useUserStore } from "./userStore";
import { useRegisterStore } from "./registerStore";
import { useCartItemStore } from "./cartItemStore";
import { useUserStoreStore } from "./userStoreStore";
import { useItemsStore } from "./ItemsStore";
import { useCreateItemStore } from "./createItemStore";
import { useHomePageStore } from "./homePageStore";

export const useRootStore = defineStore("rootStore", () => {
    const userStore = useUserStore();
    const registerStore = useRegisterStore();
    const cartItemStore = useCartItemStore();
    const userStoreStore = useUserStoreStore();
    const itemsStore = useItemsStore();
    const createItemStore = useCreateItemStore();
    const homePageStore = useHomePageStore();
    return {
        userStore,
        registerStore,
        cartItemStore,
        userStoreStore,
        itemsStore,
        createItemStore,
        homePageStore
    }
});