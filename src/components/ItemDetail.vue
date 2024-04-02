<script setup lang="ts">
import { defineProps } from 'vue';
import { Item } from '../models';
import CommentBoard from '../components/CommentBoard.vue';
defineProps<{
    item?: Item
}>();
</script>

<template>
    <ul class="nav nav-tabs" id="itemTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link text-dark active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">商品介紹</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link text-dark" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">店家資訊</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link text-dark" id="profile-tab" data-bs-toggle="tab" data-bs-target="#comments" type="button" role="tab" aria-controls="comments" aria-selected="false">留言板</button>
        </li>
    </ul>
    <div class="tab-content" style="background-color: antiquewhite;">
        <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">{{ item?.introduction }}</div>
        <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <ul>
                <li>店家名稱：{{ item?.store?.name }}</li>
                <li>店家介紹：<br>{{ item?.store?.introduction }}</li>
            </ul>
        </div>
        <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">
            <ul>
                <li>{{ item?.store?.user_id }}</li>
                <li>{{ item?.store?.user_id }}</li>
            </ul>
        </div>
        <CommentBoard id="comments" :comments="[]" />
    </div>
</template>

<style></style>