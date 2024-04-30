<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTokenStore } from '../stores';
import { useUserStore } from '../stores/userStore';
import { router } from '../routes';
const userStore = useUserStore();
const tokenStore = useTokenStore();
const { userData } = storeToRefs(userStore);
userStore.fetchUserData();
const logout = async () => {
    tokenStore.logout();
    await router.replace("/login");
}
</script>


<template>
    <nav class="navbar navbar-expand-lg navbar-warning bg-warning">
        <div class="container">
            <RouterLink to="/" class="navbar-brand">
                <h1 class="fs-2">Store</h1>
            </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav ms-auto mb-1 mb-lg-0">
                    <template v-if="userData">
                        <li class="nav-item">
                            <RouterLink to="/user/buy-next-time-items" class="nav-link active text-center">
                                <img class="nav-brand" src="../assets/heart.png" alt="願望清單" height="24" width="24">
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/user/cart-items" class="nav-link active text-center">
                                <img class="nav-brand" src="../assets/cart.png" alt="購物車" height="24" width="24">
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/user/orders" class="nav-link active text-center">
                                <img class="nav-brand" src="../assets/record.png" alt="訂單一覽" height="24" width="24">
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/user/store" class="nav-link active text-center">
                                <img class="nav-brand" src="../assets/store.png" alt="我的商店" height="24" width="24">
                            </RouterLink>
                        </li>
                    </template>
                    <li class="nav-item nav-link" v-else>登入以使用使用者相關功能</li>
                    <li class="nav-item nav-link active" v-if="userData">您好，{{ userData?.username }}！</li>
                    <li class="nav-item">
                        <RouterLink class="nav-link active text-center" to="/login" v-if="!userData">註冊｜登入</RouterLink>
                        <RouterLink to="/" class="nav-link active text-center" v-else @click="logout">登出</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>