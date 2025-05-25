<template>
  <div class="add-post-form">
    <input v-model="newTitle" placeholder="Введите заголовок поста" />
    <button @click="add">Добавить пост</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePosts } from '../store/usePosts'

const newTitle = ref('')
const store = usePosts()

const add = () => {
  if (newTitle.value.trim()) {
    store.addPost(newTitle.value.trim())
    newTitle.value = ''
  }
}
</script>

<style scoped>
.add-post-form {
  display: flex;
  gap: 8px;
}
</style>