<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useLoginStore, useUserStore } from '../stores';
const loginStore = useLoginStore();
const userStore = useUserStore();
const { loginData } = storeToRefs(loginStore);
import ForceCenter from '../components/ForceCenter.vue';
import { useToast } from 'vue-toast-notification';
import { router } from '../routes';

const login = async () => {
    const toast = useToast();
    try {
        await loginStore.sendLoginData();
        try {
            await userStore.fetchUserData();
        }
        catch (err) {
            toast.error("無法獲取使用者資訊，請稍後重試。");
        }
        await router.replace("/");
    }
    catch (err) {
        toast.error("使用者帳號或密碼錯誤");
    }
}
</script>

<template>
    <div class="container">
        <h2 class="text-center">登入</h2>
        <div class="text-center mb-3">尚無帳號？<RouterLink to="/register">註冊</RouterLink></div>
        <form @submit.prevent="login">
            <ForceCenter>
                <div class="col-12 col-md-6 mb-3">
                    <label for="username-input" class="form-label">使用者名稱</label>
                    <input id="username-input" class="form-control" type="text" maxlength="20" v-model="loginData.username">
                </div>
            </ForceCenter>
            <ForceCenter>
                <div class="col-12 col-md-6 mb-3">
                    <label for="username-input" class="form-label">密碼</label>
                    <input id="username-input" class="form-control" type="password" maxlength="100" v-model="loginData.password">
                </div>
            </ForceCenter>
            <div class="d-flex flex-row justify-content-center">
                <button type="submit" class="btn btn-success">點我登入</button>
            </div>
        </form>
    </div>
</template>