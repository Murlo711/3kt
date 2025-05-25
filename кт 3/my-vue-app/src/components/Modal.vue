<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <slot></slot>
      <div class="buttons">
        <button @click="save">Сохранить</button>
        <button @click="close">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'
import { ref } from 'vue'

const emit = defineEmits(['close', 'save'])

const saveRef = ref(null)

const save = () => {
  emit('save')
}

const close = () => {
  emit('close')
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top:0; left:0; right:0; bottom:0;
  background-color: rgba(0,0,0,0.5);
  display:flex;
  justify-content:center;
  align-items:center;
}
.modal-content {
  background:#fff;
  padding:20px;
  border-radius:8px;
}
.buttons {
  margin-top:10px;
 display:flex; gap:10px; justify-content:flex-end;
}
</style>