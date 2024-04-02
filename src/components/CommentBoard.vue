<script setup lang="ts">
defineProps<{
    id: string,
    comments: any[]
}>();
</script>

<template>
    <div class="tab-pane" :id="id" role="tabpanel" :aria-labelledby="`${id}-tab`">
        <div class="row" v-for="comment in comments">
            <div class="col-12 col-md-2">{{ comment.user.username }}</div>
            <div class="col-12 col-md-10">{{ comment.content }}</div>
        </div>
    </div>
</template>

<style></style>