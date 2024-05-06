<script setup lang="ts">
import { getStaticFile } from '../../funcs';
import { Comment } from '../../models/comment';
defineProps<{
    comment?: Comment
}>();
</script>

<template>
    <div class="row mb-3" v-if="comment">
        <div class="col-3 col-sm-10 col-md-1">
            <RouterLink :to="`/users/${comment?.user_id}`">
                <img class="img-fluid rounded-circle" :src="getStaticFile(comment.user.icon)" style="aspect-ratio: 1 / 1;"  v-if="comment.user.icon">
                <img class="img-fluid rounded-circle" src="/src/assets/store.png" style="aspect-ratio: 1 / 1;" v-else>
            </RouterLink>
        </div>
        <div class="col-9 col-sm-10 col-md-11">
            <p>{{ comment?.user.username }}</p>
            <p>{{ comment?.content }}</p>
        </div>
    </div>
</template>