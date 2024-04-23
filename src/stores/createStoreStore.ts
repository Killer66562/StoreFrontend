import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { CreateStore } from "../models/createStore";
import { useJsonGeneral } from "../composibles";
import { City } from "../models/city";
import { District } from "../models/district";

export const useCreateStoreStore = defineStore("createStoreStore", () => {
    const currentCity = ref<City | null>(null);
    const cities = ref<City[]>([]);
    const districts = ref<District[]>([]);
    watch(currentCity, () => {
        if (currentCity.value === null)
            districts.value = [];
        else
            districts.value = currentCity.value.districts;
    });
    const data = ref<CreateStore>({
        name: "",
        introduction: "",
        district_id: null
    });
    const resetData = () => {
        data.value = {
            name: "",
            introduction: "",
            district_id: null
        };
    }
    const resetCurrentCity = () => {
        currentCity.value = null;
    }
    const fetchCities = async () => {
        resetCurrentCity();
        const { apiInstance } = useJsonGeneral();
        try {
            cities.value = await apiInstance.get("/general/cities", {});
        }
        catch (err) {
            throw err;
        }
    }
    const sendData = async () => {
        const { apiInstance } = useJsonGeneral();
        try {
            await apiInstance.post("/user/store", data.value);
            resetData();
        }
        catch (err) {
            throw err;
        }
    }
    return {
        currentCity,
        cities,
        districts,
        data,
        fetchCities,
        sendData,
        resetData,
        resetCurrentCity
    }
})