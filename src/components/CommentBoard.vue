<script setup lang="ts">
import Comment from './items/Comment.vue';
import { useItemDetailStore } from '../stores/itemDetailStore';
import { useAsyncState } from '@vueuse/core';
const itemDetailStore = useItemDetailStore();

defineProps<{
    id: string
}>();

const fetchState = useAsyncState(() => itemDetailStore.fetchData(), undefined, { immediate: false });

fetchState.execute();
</script>

<template>
    <div class="tab-pane" :id="id" role="tabpanel" :aria-labelledby="`${id}-tab`">
        <div class="col-12 col-md-8">
            <form class="mt-3" @submit.prevent="itemDetailStore.leaveComment">
                <div class="row mb-3">
                    <div class="col-12 col-md-auto">
                        <label class="form-label">新增/修改留言</label>
                    </div>
                    <div class="col-12 col-md">
                        <input type="text" class="form-control" v-model="itemDetailStore.comment">
                    </div>
                    <div class="col-12 col-md-auto">
                        <button type="submit" class="btn btn-success">送出</button>
                    </div>
                </div>
            </form>
            <Comment v-for="comment in itemDetailStore.item?.comments" :key="comment.id" :comment="comment" />
        </div>
    </div>
</template>

<style></style>