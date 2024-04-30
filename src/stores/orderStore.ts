import { defineStore } from "pinia";
import { Order } from "../models/order";
import { ApiInstance, baseConfig } from "../api";
import { ref } from "vue";

export const useOrderStore = defineStore("orderStore", () => {
    const ordersData = ref<Order[]>([]);
    const fetchOrdersData = async () => {
        const apiInstance = new ApiInstance(baseConfig);
        try {
            ordersData.value = await apiInstance.get("/user/orders");
        }
        catch (err) {
            throw err;
        }
    }
    const resetOrdersData = () => {
        ordersData.value = [];
    }
    return { ordersData, fetchOrdersData, resetOrdersData };
});