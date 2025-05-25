import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePosts = defineStore('posts', () => {
  const posts = ref([
    {
      id: 1,
      title: "Сегодня было замечательное предложение пойти поужинать этим вечером. Главное, чтобы погода была преимущественно теплой.",
      comments: [
        { id: 1, text: "Самый яркий комментарий в этом посте" },
        { id: 2, text: "Один из бессмысленных комментариев в этом посте" }
      ],
    },
    {
      id: 2,
      title: "Краткосрочное вымышленное преломление может выполнять особую роль в пространстве главной роли игрока",
      comments: [
        { id: 1, text: "Очень научно и непонятно" },
      ],
    },
  ])

  const addPost = (title) => {
    const newId = posts.value.length ? Math.max(...posts.value.map(p => p.id)) + 1 : 1
    posts.value.push({ id: newId, title, comments: [] })
  }

  const deletePost = (id) => {
    posts.value = posts.value.filter(p => p.id !== id)
  }

  const updatePost = (id, newTitle) => {
    const post = posts.value.find(p => p.id === id)
    if (post) {
      post.title = newTitle
    }
  }

  const addComment = (postId, commentText) => {
    const post = posts.value.find(p => p.id === postId)
    if (post) {
      const newCommentId = post.comments.length ? Math.max(...post.comments.map(c => c.id)) + 1 : 1
      post.comments.push({ id: newCommentId, text: commentText })
    }
  }

  const deleteComment = (postId, commentId) => {
    const post = posts.value.find(p => p.id === postId)
    if (post) {
      post.comments = post.comments.filter(c => c.id !== commentId)
    }
  }

  return {
    posts,
    addPost,
    deletePost,
    updatePost,
    addComment,
    deleteComment,
  }
})