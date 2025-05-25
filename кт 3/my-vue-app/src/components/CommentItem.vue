<template>
  <div class="comment-item">
    <h4 class="author">{{ comment.author }}</h4>
    <p class="content">{{ comment.content }}</p>
    <small class="date">{{ comment.date }}</small>
  </div>
</template>

<script setup>
defineProps({
  comment: {
    type: Object,
    required: true,
    default: () => ({
      author: '',
      content: '',
      date: ''
    })
  }
})
</script>

<style scoped>
.comment-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
}
.author {
  font-weight: bold;
}
.content {
  margin-top: 5px;
}
.date {
  font-size: 0.8em;
  color: #666;
}
</style>