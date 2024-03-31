<script setup lang="ts">
import { ref, watch } from 'vue';
import { City } from '../models/city';
import { ApiInstance, jsonConfig } from '../api';
import { District } from '../models/district';
const name = ref<string>("");
const city_id = ref<number | null>(null);
const districts = ref<District[]>([]);
const apiInstance = new ApiInstance(jsonConfig);
const cities = ref<City[]>([]);
const fetchCities = async () => {
    try {
        cities.value = await apiInstance.get("/general/cities", {});
    }
    catch (err) {}
}
const fetchDistricts = async () => {
    if (city_id.value === null)
        districts.value = [];
    else {
        try {
            const fetched = await apiInstance.get<City>(`/general/cities/${city_id.value}`, {});
            districts.value = fetched.districts;
        }
        catch (err) {}
    }
}
const sendData = async () => {
    try {
        await apiInstance.post("/admin/districts", {name: name.value, city_id: city_id.value});
    }
    catch (err) {}
    await fetchDistricts();
}
watch(city_id, async () => {
    await fetchDistricts();
})
fetchCities();
</script>

<template>
    <h2 class="text-center">新增鄉鎮市區</h2>
    <form class="vl-element" ref="loadingForm" @submit.prevent="sendData">
        <div class="row">
            <div class="col-12 col-md-6 mb-3">
                <label class="form-label" for="city-select">縣市選擇</label>
                <select id="city-select" class="form-select" v-model="city_id">
                    <option :value="null" selected>請選擇縣市</option>
                    <option v-for="city in cities" :value="city.id">{{ city.name }}</option>
                </select>
            </div>
            <div class="col-12 col-md-6 mb-3">
                <label for="district-name-input" class="form-label">鄉鎮市區名稱</label>
                <input id="district-name-input" class="form-control" type="text" maxlength="10" v-model="name">
            </div>
        </div>
        <div class="col-12 col-md-6 mb-3">
            <button type="submit" class="btn btn-success">送出</button>
        </div>
    </form>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <td class="col-2">ID</td>
                    <td class="col-10">名稱</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="district in districts" :key="district.id">
                    <td>{{ district.id }}</td>
                    <td>{{ district.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>