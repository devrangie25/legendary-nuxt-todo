<template>
  <div class="w-11/12 max-w-3xl p-4 mt-4 space-y-4 rounded">
    <m-todo-card-v2
      v-for="todo in todosRef"
      :key="todo.id"
      :todo="todo"
      @delete-todo="handleDeleteTodo"
      @edit-todo="handleEditTodo"
    />
  </div>
</template>

<script setup lang="ts">
import type { Todo } from '~/types/todo'
import { useTodoStore } from '~/stores/todos'

const props = defineProps<{
  todos: Todo[]
}>()
const emit = defineEmits(['on-update'])

const todoStore = useTodoStore()

const todosRef = toRef(props, 'todos')

watch(todosRef, (newVal: any) => {
  console.log('watch todos ==> ', newVal)
})

const handleDeleteTodo = async (id: any) => {
  await todoStore.deleteTodo(id)
}

const handleEditTodo = (todoToEdit: Todo) => {
  emit('on-update', todoToEdit)
}
</script>

<style scoped></style>
