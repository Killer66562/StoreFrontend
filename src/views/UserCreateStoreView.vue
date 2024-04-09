<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCreateStoreStore } from '../stores/createStoreStore';
import { useToast } from 'vue-toast-notification';
const createStoreStore = useCreateStoreStore();
const { currentCity, cities, districts, data } = storeToRefs(createStoreStore);
const initial = async () => {
    try {
        await Promise.all([createStoreStore.fetchCities()]);
    }
    catch (err) {
        const toast = useToast();
        toast.error("發生錯誤", {position: "bottom"});
    }
}
initial();
</script>

<template>
    <LoginCheck>
        <h2 class="text-center">創建商店</h2>
        <form @submit.prevent="createStoreStore.sendData">
            <div class="row">
                <div class="col-12 col-md-3"></div>
                <div class="col-12 col-md-6 mb-3">
                    <label for="name-input" class="form-label">商店名稱</label>
                    <input id="name-input" class="form-control" type="text" maxlength="20" v-model="data.name">
                </div>
                <div class="col-12 col-md-3"></div>
            </div>
            <div class="row">
                <div class="col-12 col-md-3"></div>
                <div class="col-12 col-md-6 mb-3">
                    <label for="introduction-input" class="form-label">商店介紹</label>
                    <textarea id="introduction-input" class="form-control" rows="10" maxlength="500" v-model="data.introduction"></textarea>
                </div>
                <div class="col-12 col-md-3"></div>
            </div>
            <div class="row">
                <div class="col-12 col-md-3"></div>
                <div class="col-12 col-md-3 mb-3">
                    <label for="city-select" class="form-label">商店所在縣市</label>
                    <select id="city-select" class="form-select" v-model="currentCity">
                        <option :value="null" selected>請選擇縣市</option>
                        <option v-for="city in cities" :value="city">{{ city.name }}</option>
                    </select>
                </div>
                <div class="col-12 col-md-3 mb-3">
                    <label for="city-select" class="form-label">商店所在鄉鎮市區</label>
                    <select id="city-select" class="form-select" v-model="data.district_id">
                        <option :value="null" selected>請選擇鄉鎮市區</option>
                        <option v-for="district in districts" :value="district.id">{{ district.name }}</option>
                    </select>
                </div>
                <div class="col-12 col-md-3"></div>
            </div>
            <div class="d-flex flex-row justify-content-center">
                <button type="submit" class="btn btn-success">點我創建商店</button>
            </div>
        </form>
    </LoginCheck>
</template>