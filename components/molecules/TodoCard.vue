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
      <button class="text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
      <span class="text-sm text-gray-500">+4</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Todo {
  id?: string
  title?: string
  description?: string
  completed?: boolean
  dateCreated?: string
  dateCompleted?: string
}

const props = defineProps<{
  todo: Todo
}>()
</script>

<style scoped></style>
