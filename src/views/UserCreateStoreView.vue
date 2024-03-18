<script setup lang="ts">
import { computed, ref } from 'vue';
import { CreateStore } from '../models/createStore';
import { ApiInstance, jsonConfig } from '../api';
import { router } from '../routes';
const apiInstance = new ApiInstance(jsonConfig);
const error = ref<string>("");
const data = ref<CreateStore>({
    name: "",
    introduction: "",
    district_id: null
});
const canSend = computed(() => {
    return data.value.name.length > 0 && data.value.introduction.length > 0 && data.value.district_id !== null;
})
const sendData = async () => {
    try {
        await apiInstance.post("/user/store", data.value);
        await router.replace("/user/store");
    }
    catch (err: any) {
        if (err.status == 400 || err.status == 409)
            error.value = err.data.message;
        else if (err.status / 100 == 5)
            error.value = "伺服端錯誤";
    }
}
</script>

<template>
    <div class="container">
        <h2 class="text-center">創建商店</h2>
        <form @submit.prevent="sendData">
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
                    <select id="city-select" class="form-select">
                        <option :value="null" selected>請選擇縣市</option>
                        <option value="1">台中市</option>
                        <option value="2">彰化縣</option>
                    </select>
                </div>
                <div class="col-12 col-md-3 mb-3">
                    <label for="city-select" class="form-label">商店所在鄉鎮市區</label>
                    <select id="city-select" class="form-select" v-model="data.district_id">
                        <option :value="null" selected>請選擇鄉鎮市區</option>
                        <option value="1">彰化市</option>
                    </select>
                </div>
                <div class="col-12 col-md-3"></div>
            </div>
            <div class="d-flex flex-row justify-content-center">
                <button :disabled="!canSend" type="submit" class="btn btn-success">點我創建商店</button>
            </div>
        </form>
        <p class="text-center" v-if="error">錯誤：{{ error }}</p>
    </div>
</template>