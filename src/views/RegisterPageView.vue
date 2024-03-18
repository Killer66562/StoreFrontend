<script setup lang="ts">
import { router } from '../routes';
import { ApiInstance, jsonConfig } from '../api';
import { Register } from '../models/register';
import { ref } from 'vue';
import { useLoading } from 'vue-loading-overlay';
const formContainer = ref();
const loading = useLoading();
const apiInstance = new ApiInstance(jsonConfig);
const data = ref<Register>({
    username: "",
    email: "",
    password: ""
});
const sendData = async () => {
    let loader = loading.show({
        color: 'blue',
        container: formContainer.value,
        isFullPage: false,
        opacity: 0
    });
    try {
        await apiInstance.post("/register", data.value);
        await router.replace("/login");
    }
    catch (err) {

    }
    loader.hide();
}
</script>

<template>
    <div class="container">
        <h2 class="text-center">註冊</h2>
        <div class="text-center mb-3">已有帳號？<RouterLink to="/login">登入</RouterLink></div>
        <form class="vl-parent" ref="formContainer" @submit.prevent="sendData">
            <loading v-model:active="loading" is-full-page />
            <div class="row">
                <div class="col-12 col-md-3"></div>
                <div class="col-12 col-md-6 mb-3">
                    <label for="username-input" class="form-label">使用者名稱</label>
                    <input id="username-input" class="form-control" type="text" maxlength="20" v-model="data.username">
                </div>
                <div class="col-12 col-md-3"></div>
            </div>
            <div class="row">
                <div class="col-12 col-md-3"></div>
                <div class="col-12 col-md-6 mb-3">
                    <label for="username-input" class="form-label">電子郵件</label>
                    <input id="username-input" class="form-control" type="email" maxlength="100" v-model="data.email">
                </div>
                <div class="col-12 col-md-3"></div>
            </div>
            <div class="row">
                <div class="col-12 col-md-3"></div>
                <div class="col-12 col-md-6 mb-3">
                    <label for="username-input" class="form-label">密碼</label>
                    <input id="username-input" class="form-control" type="password" maxlength="100" v-model="data.password">
                </div>
                <div class="col-12 col-md-3"></div>
            </div>
            <div class="d-flex flex-row justify-content-center">
                <button type="submit" class="btn btn-success">點我立即註冊</button>
            </div>
        </form>
    </div>
</template>