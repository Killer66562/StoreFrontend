<script setup lang="ts">
import { useCreateItemStore } from '../stores/createItemStore';
import { useCustomToast } from '../composibles';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import LoginCheck from '../components/auth/LoginCheck.vue';
const createItemStore = useCreateItemStore();
const { data, iconData } = storeToRefs(createItemStore);
const imageUrl = ref<string | null>("");
const fileInputRef = ref<HTMLInputElement>();
const onInputFileChanged = () => {
    const targetFile = fileInputRef.value?.files?.item(0);
    if (targetFile === undefined || targetFile === null) {
        imageUrl.value = null;
        console.log(targetFile);
    }
    else if (targetFile.size > 1024 * 1024) {
        const toast = useCustomToast();
        toast.error("檔案過大");
        imageUrl.value = null;
    }
    else {
        iconData.value = targetFile;
        imageUrl.value = URL.createObjectURL(targetFile);
    }
}
</script>

<template>
    <LoginCheck>
        <h2 class="text-center">新增商品</h2>
        <form @submit.prevent="createItemStore.sendData">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="mb-3">
                        <label class="form-label" for="item-name-input">商品名稱</label>
                        <input class="form-control" type="text" maxlength="100" placeholder="請輸入商品名稱" v-model="data.name">
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="item-introduction-input">商品介紹</label>
                        <textarea class="form-control" rows="15" placeholder="請輸入商品介紹" v-model="data.introduction"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="item-introduction-input">商品價格</label>
                        <input class="form-control" type="number" placeholder="請輸入商品價格" min="0" max="999999" v-model="data.price">
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="item-introduction-input">商品數量</label>
                        <input class="form-control" type="number" placeholder="請輸入商品數量" min="0" max="999999" v-model="data.count">
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="mb-3">
                        <label class="form-label" for="item-image-input">商品縮圖</label>
                        <input ref="fileInputRef" class="form-control" type="file" accept=".jpeg,.jpg,.png,.bmp,.svg" @change="onInputFileChanged">
                    </div>
                    <div class="col-12 col-md-6 mb-3">
                        <label class="form-label" for="item-image-preview">縮圖預覽</label>
                        <img :src="imageUrl" class="img-fluid" style="aspect-ratio: 1 / 1;" v-if="imageUrl">
                        <img src="../assets/item.jpg" class="img-fluid" style="aspect-ratio: 1 / 1;" v-else>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-row justify-content-center">
                <div class="btn-group">
                    <button type="submit" class="btn btn-success">上架商品</button>
                </div>
            </div>
        </form>
    </LoginCheck>
</template>