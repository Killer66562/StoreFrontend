<script setup lang="ts">
import { useSearchStore } from '../stores/searchStore';
const searchStore = useSearchStore();
</script>


<template>
    <div class="continaer-fluid bg-warning pb-3">
        <div class="container">
            <form class="d-flex" @submit.prevent="searchStore.execute">
                <input id="search-bar" class="form-control me-2" type="search" placeholder="搜尋商品" aria-label="搜尋商品">
                <button class="btn btn-outline-success" type="submit">Go</button>
            </form>
        </div>
    </div>
</template>