<template>
  <div class="max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-4">Todo Form</h2>
    <form @submit.prevent="handleSubmit">
      <!-- Title -->
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <input
          id="title"
          type="text"
          v-model="todo.title"
          class="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter a title"
        />
      </div>

      <!-- Description -->
      <div class="mb-4">
        <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          id="description"
          v-model="todo.description"
          class="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter a description"
        ></textarea>
      </div>

      <!-- Completed -->
      <div class="mb-4 flex items-center">
        <input id="completed" type="checkbox" v-model="todo.completed" class="mr-2" />
        <label for="completed" class="text-sm font-medium text-gray-700">Completed</label>
      </div>

      <!-- Date Created -->
      <div class="mb-4">
        <label for="dateCreated" class="block text-sm font-medium text-gray-700 mb-1">Date Created</label>
        <input
          id="dateCreated"
          type="date"
          v-model="todo.dateCreated"
          class="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <!-- Date Completed -->
      <div class="mb-4">
        <label for="dateCompleted" class="block text-sm font-medium text-gray-700 mb-1">Date Completed</label>
        <input
          id="dateCompleted"
          type="date"
          v-model="todo.dateCompleted"
          class="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          :disabled="!todo.completed"
        />
      </div>

      <!-- Submit Button -->
      <div class="flex justify-end gap-x-2 mt-6">
        <button
          type="button"
          class="px-6 py-2 w-1/2 sm:w-1/3 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          :disabled="loading"
          @click="onCancel"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="px-6 py-2 w-1/2 sm:w-1/3 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          :disabled="loading"
        >
          {{ loading ? 'Saving' : 'Save' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import type { Todo } from '~/types/todo'

const props = defineProps<{
  loading?: boolean
}>()

const todo: Todo = ref({
  title: '',
  description: '',
  completed: false,
  dateCreated: '',
  dateCompleted: '',
})

const emit = defineEmits(['form-submit', 'form-cancel'])

// Form submission handler
const handleSubmit = () => {
  emit('form-submit', todo.value)
}

const onCancel = () => {
  todo.value = {
    title: '',
    description: '',
    completed: false,
    dateCreated: '',
    dateCompleted: '',
  }
  emit('form-cancel')
}
</script>
