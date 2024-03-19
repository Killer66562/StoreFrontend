import { defineStore } from "pinia";
import { useUserStore } from "./userStore";
import { useRegisterStore } from "./registerStore";
import { useCartItemStore } from "./cartItemStore";

export const useRootStore = defineStore("rootStore", () => {
    const userStore = useUserStore();
    const registerStore = useRegisterStore();
    const cartItemStore = useCartItemStore();
    return {
        userStore,
        registerStore,
        cartItemStore,
    }
});