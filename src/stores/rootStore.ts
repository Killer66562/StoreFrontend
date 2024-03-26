import { defineStore } from "pinia";
import { useUserStore } from "./userStore";
import { useRegisterStore } from "./registerStore";
import { useCartItemStore } from "./cartItemStore";
import { useUserStoreStore } from "./userStoreStore";
import { useItemsStore } from "./ItemsStore";

export const useRootStore = defineStore("rootStore", () => {
    const userStore = useUserStore();
    const registerStore = useRegisterStore();
    const cartItemStore = useCartItemStore();
    const userStoreStore = useUserStoreStore();
    const itemsStore = useItemsStore();
    return {
        userStore,
        registerStore,
        cartItemStore,
        userStoreStore,
        itemsStore
    }
});