import { defineStore } from "pinia";
import { CartItem } from "../models/cartItem";
import { ref, computed } from "vue";
import { ApiInstance, jsonConfig } from "../api";

export const useCartItemStore = defineStore("cartItemStore", () => {
    const apiInstance = new ApiInstance(jsonConfig);
    const cartItems = ref<CartItem[]>([]);
    const clearCartItems = () => {
        cartItems.value = [];
    }
    const selectedCartItems = ref<CartItem[]>([]);
    const clearSelectedCartItems = () => {
        selectedCartItems.value = [];
    }
    const totalPrice = computed(() => {
        let total = 0;
        selectedCartItems.value.forEach((cartItem) => {
            total += cartItem.item.price * cartItem.count;
        });
        return total;
    });
    const addCartItem = (cartItem: CartItem) => {
        cartItems.value.push(cartItem);
    }
    const fetchCartItems = async () => {
        try {
            cartItems.value = await apiInstance.get<CartItem[]>("/user/cart_items", {});
        }
        catch (err) {
            throw err;
        }
        
    }
    const createCartItem = async (itemId?: number, count: number = 1) => {
        if (itemId) {
            const apiInstance = new ApiInstance(jsonConfig);
            try {
                await apiInstance.post("/user/cart_items", { item_id: itemId, count: count });
            }
            catch (err) {
                throw err;
            }
            finally {
                await fetchCartItems();
            }
        }
    }
    const sendOrders = async () => {
        try {
            await apiInstance.post("/user/orders/bulk", selectedCartItems.value);
            await fetchCartItems();
        }
        catch (err) {
            throw err;
        }
    }
    return {
        cartItems,
        clearCartItems,
        selectedCartItems,
        clearSelectedCartItems,
        totalPrice,
        addCartItem,
        fetchCartItems,
        sendOrders,
        createCartItem
    }
});