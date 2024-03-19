import { defineStore } from "pinia";
import { useUserStore } from "./userStore";
import { useRegisterStore } from "./registerStore";
import { useCartItemStore } from "./cartItemStore";
import { useUserStoreStore } from "./userStoreStore";

export const useRootStore = defineStore("rootStore", () => {
    const userStore = useUserStore();
    const registerStore = useRegisterStore();
    const cartItemStore = useCartItemStore();
    const userStoreStore = useUserStoreStore();
    return {
        userStore,
        registerStore,
        cartItemStore,
        userStoreStore
    }
});