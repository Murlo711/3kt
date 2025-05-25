<template>
<div class="container">
<h1>Дневник постов и комментариев</h1>

<AddPostForm />

<div v-for="post in posts" :key="post.id">
<PostItem :post="post" />
</div>

</div>
</template>

<script setup>
import { computed } from 'vue'
import { usePosts } from '../store/usePosts'
import AddPostForm from '../components/AddPostForm.vue'
import PostItem from '../components/PostItem.vue'

const store= usePosts()
const posts= computed(()=> store.posts)
</script>

<style scoped>
.container{
 max-width:800px; margin:auto; padding:20px;
}
</style>