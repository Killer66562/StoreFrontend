<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStoreStore } from '../../stores';
import { getStaticFile } from '../../funcs';
const userStoreStore = useUserStoreStore();
const { storeData } = storeToRefs(userStoreStore);
</script>

<template>
    <div class="row mb-3" v-if="userStoreStore.storeData">
        <div class="col-3 col-md-1">
            <RouterLink :to="`/stores/${storeData?.id}`" v-if="storeData?.icon">
                <img class="img-fluid rounded-circle" :src="getStaticFile(storeData.icon)" style="aspect-ratio: 1 / 1;" v-if="store.icon">
                <img class="img-fluid rounded-circle" src="../assets/store.png" style="aspect-ratio: 1 / 1;" v-else>
            </RouterLink>
            <template v-else>
                <img class="img-fluid rounded-circle" :src="getRealImagePath(store.icon)" style="aspect-ratio: 1 / 1;" v-if="store.icon">
                <img class="img-fluid rounded-circle" src="../assets/store.png" style="aspect-ratio: 1 / 1;" v-else>
            </template>
        </div>
        <div class="col-9 col-md-11">
            <div class="d-flex flex-column h-100 justify-content-end">
                <h4>{{ storeData?.name }}</h4>
                <p>{{ storeData?.introduction }}</p>
            </div>
        </div>
    </div>
</template>