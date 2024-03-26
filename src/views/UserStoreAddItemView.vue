<script setup lang="ts">
import { ref } from 'vue';
import { useCustomToast } from '../composibles';
const imageUrl = ref<string | null>("");
const fileInputRef = ref<HTMLInputElement>();
const onInputFileChanged = () => {
    const targetFile = fileInputRef.value?.files?.item(0);
    if (!targetFile)
        imageUrl.value = null;
    else if (targetFile.size > 1024 * 1024) {
        const toast = useCustomToast();
        toast.error("檔案過大");
        imageUrl.value = null;
    }
    else
        imageUrl.value = URL.createObjectURL(targetFile);
}
</script>

<template>
    <h2 class="text-center">新增商品</h2>
    <form>
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="mb-3">
                    <label class="form-label" for="item-name-input">商品名稱</label>
                    <input class="form-control" type="text" maxlength="100" placeholder="請輸入商品名稱">
                </div>
                <div class="mb-3">
                    <label class="form-label" for="item-introduction-input">商品介紹</label>
                    <textarea class="form-control" rows="15" placeholder="請輸入商品介紹"></textarea>
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
</template>