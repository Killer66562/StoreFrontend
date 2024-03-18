<script setup lang="ts">
import { router } from '../routes';
import { ApiInstance, jsonConfig } from '../api';
import { Register } from '../models/register';
import { ref } from 'vue';
import { useLoading } from 'vue-loading-overlay';
import { useToast } from 'vue-toast-notification'
import ForceCenter from '../components/ForceCenter.vue';
const formContainer = ref();
const loading = useLoading();
const toast = useToast();
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
        toast.success("註冊成功");
        await router.replace("/login");
        toast.success("已將您重新導向至登入頁面");
    }
    catch (err) {
        throw (err);
    }
    finally {
        loader.hide();
    }

}
</script>

<template>
    <div class="container">
        <h2 class="text-center">註冊</h2>
        <div class="text-center mb-3">已有帳號？<RouterLink to="/login">登入</RouterLink></div>
        <form class="vl-parent" ref="formContainer" @submit.prevent="sendData">
            <loading v-model:active="loading" is-full-page />
            <ForceCenter>
                <div class="col-12 col-md-6 mb-3">
                    <label for="username-input" class="form-label">使用者名稱</label>
                    <input id="username-input" class="form-control" type="text" maxlength="20" v-model="data.username">
                </div>
            </ForceCenter>
            <ForceCenter>
                <div class="col-12 col-md-6 mb-3">
                    <label for="email-input" class="form-label">電子郵件</label>
                    <input id="email-input" class="form-control" type="email" maxlength="100" v-model="data.email">
                </div>
            </ForceCenter>
            <ForceCenter>
                <div class="col-12 col-md-6 mb-3">
                    <label for="password-input" class="form-label">密碼</label>
                    <input id="password-input" class="form-control" type="password" maxlength="100" v-model="data.password">
                </div>
            </ForceCenter>
            <div class="d-flex flex-row justify-content-center">
                <button type="submit" class="btn btn-success">點我立即註冊</button>
            </div>
        </form>
    </div>
</template>