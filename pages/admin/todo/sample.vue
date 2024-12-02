<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
    <!-- Todo Form -->
    <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-semibold text-center mb-4">Todo App</h2>

      <!-- Todo Input Field with Add Button -->
      <div class="flex items-center space-x-4 mb-6">
        <input
          v-model="newTodo"
          type="text"
          placeholder="Enter a new task"
          class="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          @click="addTodo"
          class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Add
        </button>
      </div>

      <!-- Todo List -->
      <ul class="space-y-3">
        <li
          v-for="(todo, index) in todos"
          :key="index"
          class="flex items-center justify-between p-2 border rounded-md bg-gray-50"
        >
          <div class="flex items-center space-x-2">
            <input
              type="checkbox"
              :checked="todo.completed"
              @click="toggleComplete(index)"
              class="form-checkbox h-5 w-5 text-blue-500"
            />
            <span :class="{ 'line-through text-gray-400': todo.completed }">
              {{ todo.title }}
            </span>
          </div>
          <button @click="deleteTodo(index)" class="text-red-500 hover:text-red-700">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '~/stores/todos'

const todoStore = useTodoStore()

interface Todo {
  title: string
  completed: boolean
}

const newTodo = ref('')
const todos = ref<Todo[]>([])

const addTodo = async () => {
  if (newTodo.value.trim() !== '') {
    await todoStore.addTodo({ title: newTodo.value.trim(), completed: false,})
    newTodo.value = ''
  }
}

const toggleComplete = (index: number) => {
  todos.value[index].completed = !todos.value[index].completed
}

const deleteTodo = (index: number) => {
  todos.value.splice(index, 1)
}
</script>

<style scoped>
/* You can add custom styles here if needed */
</style>
