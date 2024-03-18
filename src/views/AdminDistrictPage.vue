<script setup lang="ts">
import { ref } from 'vue';
import { City } from '../models/city';
import { ApiInstance, jsonConfig } from '../api';
import { useLoading } from 'vue-loading-overlay';

</script>

<template>
    <h2 class="text-center">新增鄉鎮市區</h2>
    <form class="vl-element" ref="loadingForm" @submit.prevent="">
        <div class="row">
            <div class="col-12 col-md-6 mb-3">
                <label for="district-name-input" class="form-label">鄉鎮市區名稱</label>
                <input id="district-name-input" class="form-control" type="text" maxlength="10">
            </div>
            <div class="col-12 col-md-6 mb-3">
                <label class="form-label" for="city-select">縣市選擇</label>
                <select id="city-select" class="form-select">
                    <option :value="null" selected>請選擇縣市</option>
                    <option></option>
                </select>
            </div>
        </div>
        <div class="col-12 col-md-6 mb-3">
            <button type="submit" class="btn btn-success">送出</button>
        </div>
    </form>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <td class="col-2">ID</td>
                    <td class="col-10">名稱</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>