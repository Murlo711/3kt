<template>
<div class="post-item">
  
<div class="post-header">
<h3>Пост #{{ post.id }}</h3>
<p>{{ post.title }}</p>

<div class="buttons">
<button @click="() => openEdit(post)">Редактировать</button>
<button @click="() => store.deletePost(post.id)">Удалить</button>
<button @click="toggleComments">{{ showComments ? 'Спрятать комментарии' : 'Показать комментарии' }}</button>
</div>
</div>

<div v-if="showComments" class="comments-section">
<h4>Комментарии:</h4>
<div v-for="comment in post.comments" :key="comment.id" class="comment-item">
<p>{{ comment.text }}</p>
<button @click="deleteComment(comment.id)">Удалить комментарий</button>
</div>

<input v-model="newCommentText" placeholder="Новый комментарий" />
<button @click="addComment">Добавить комментарий</button>
</div>

<Modal v-if="isEditModalOpen" @close="closeEditModal" @save="() => saveEdit(post)">
  <textarea v-model="editedText" rows="4"></textarea>
</Modal>

</div>
</template>

<script setup>
import { ref } from 'vue'
import { usePosts } from '../store/usePosts'
import Modal from './Modal.vue'

defineProps({
 post: Object,
})

const store = usePosts()

const showComments = ref(false)

const isEditModalOpen = ref(false)
const editedText = ref('')
const originalTextRef = ref('')

const toggleComments= () => {
 showComments.value= !showComments.value
}

const deletePost= () => {
 store.deletePost(post.id)
}

const addComment= () => {
 if (newCommentText.value.trim()) {
   store.addComment(post.id, newCommentText.value.trim())
   newCommentText.value= ''
 }
}

const deleteComment= (commentId) => {
 store.deleteComment(post.id, commentId)
}

const newCommentText= ref('')

const openEdit = (post) => {
  editedText.value = post.title;
  originalTextRef.value = post.title;
  isEditModalOpen.value = true;
}

const closeEditModal= () => {
 isEditModalOpen.value= false
}

const saveEdit = (post) => {
  store.updatePost(post.id, editedText.value)
  isEditModalOpen.value= false
}
</script>

<style scoped>
.post-item {
 border:1px solid #ccc; padding:10px; margin-bottom:10px; border-radius:5px;
}
.buttons button{
 margin-right:5px;
}
.comments-section{
 margin-top:10px; background:#f9f9f9; padding:10px; border-radius:5px;
}
.comment-item{
 display:flex; justify-content:flex-between; align-items:center; margin-bottom:5px;
}
</style>