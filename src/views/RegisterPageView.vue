<script setup lang="ts">
import { ref } from 'vue';
import { useLoading } from 'vue-loading-overlay';
import ForceCenter from '../components/ForceCenter.vue';
import { useRegisterStore } from '../stores/registerStore';
import { storeToRefs } from 'pinia';
const registerStore = useRegisterStore();
const { data } = storeToRefs(registerStore);
const formContainer = ref();
const loading = useLoading({
    color: 'blue',
    isFullPage: true,
    opacity: 0
});
const sendData = async () => {
    const loader = loading.show();
    try {
        await registerStore.sendData();
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
        <form class="vl-element" ref="formContainer" @submit.prevent="sendData">
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