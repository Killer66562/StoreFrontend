<script setup lang="ts">
import { ref } from 'vue';
import { CreateCity } from '../models/createCity';
import { City } from '../models/city';
import { ApiInstance, jsonConfig } from '../api';
import { useLoading } from 'vue-loading-overlay';
import AdminCheck from '../components/auth/AdminCheck.vue';
const loadingForm = ref();
const loadingTable = ref();
const loadingFormLoading = useLoading({
    container: loadingForm.value,
    opacity: 0,
    isFullPage: false
});
const loadingTableLoading = useLoading({
    container: loadingTable.value,
    opacity: 0,
    isFullPage: false
});
const apiInstance = new ApiInstance(jsonConfig);
const cities = ref<City[]>([]);
const data = ref<CreateCity>({
    name: ""
});
const fetchData = async () => {
    let loader = loadingTableLoading.show();
    try {
        cities.value = await apiInstance.get("/general/cities", {});
    }
    catch (err: any) {
        if (err.status / 100 == 5)
            console.error("伺服器錯誤");
    }
    loader.hide();
}
const sendData = async () => {
    let loader = loadingFormLoading.show();
    try {
        await apiInstance.post("/admin/cities", data.value);
    }
    catch (err: any) {
        if (err.status / 100 == 5)
            console.error("伺服器錯誤");
    }
    loader.hide();
    await fetchData();
}
fetchData();
</script>

<template>
    <AdminCheck>
        <form class="vl-element" ref="loadingForm" @submit.prevent="sendData">
            <div class="row">
                <div class="col-12 col-md-6 mb-3">
                    <label for="city-name-input" class="form-label">縣市名稱</label>
                    <input id="city-name-input" class="form-control" type="text" maxlength="10" v-model="data.name">
                </div>
            </div>
            <div class="col-12 col-md-6 mb-3">
                <button type="submit" class="btn btn-success">送出</button>
            </div>
        </form>
        <div class="table-responsive">
            <table class="table vl-element" ref="loadingTable">
                <thead>
                    <tr>
                        <th class="col-2">ID</th>
                        <th class="col-10">名稱</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="city in cities">
                        <td>{{ city.id }}</td>
                        <td>{{ city.name }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </AdminCheck>
</template>