<template>
  <div class="flex justify-between items-center p-4 bg-gray-50 rounded-md shadow-sm">
    <div class="flex flex-col">
      <span :class="`text-lg font-semibold ${props.todo.completed ? 'line-through' : ''} text-gray-500`">{{
        props.todo.title
      }}</span>
      <span class="text-sm text-gray-600">{{ props.todo.description }}</span>
      <span class="text-xs text-gray-500">Today 10:00 PM - 11:45 PM</span>
    </div>
    <div class="flex items-center space-x-2">
      <button class="text-red-500" @click="onDeleteTodo(props.todo.id)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-6 h-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 6h18M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2m2 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h12z"
          />
        </svg>
      </button>
      <button class="text-blue-500" @click="onEditTodo(todo)">Edit</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Todo } from '~/types/todo'

const props = defineProps<{
  todo: Todo
}>()

const emit = defineEmits(['delete-todo', 'edit-todo'])

const onDeleteTodo = (id) => {
  emit('delete-todo', id)
}

const onEditTodo = (todoToEdit: Todo) => {
  emit('edit-todo', todoToEdit)
}
</script>

<style scoped></style>
