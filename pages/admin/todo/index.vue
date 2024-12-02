<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center">
    <!-- Header -->
    <div class="w-full bg-white p-4 shadow-md flex items-center justify-between">
      <div class="text-xl font-semibold">Today’s Task</div>
      <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">+ New Task</button>
    </div>

    <!-- Date and Task Filters -->
    <div class="w-full bg-white p-4 flex items-center justify-between border-b">
      <div class="text-gray-600">Wednesday, 11 May</div>
      <div class="space-x-4">
        <span class="text-sm text-blue-600 cursor-pointer">All (35)</span>
        <span class="text-sm text-gray-600 cursor-pointer">Open (14)</span>
        <span class="text-sm text-gray-600 cursor-pointer">Closed (19)</span>
        <span class="text-sm text-gray-600 cursor-pointer">Archived (2)</span>
      </div>
    </div>

    <!-- Task List -->
    <o-todo-list :todos="todos" />
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

// Task data example (this can come from a store or API in a real app)
const todos: Array<Todo> = ref([
  {
    id: '1',
    title: 'Running on the mountain',
    description: '100 km running',
    completed: false,
    dateCreated: '2024-12-01T10:00:00',
  },
  {
    id: '2',
    title: 'Create Wireframe',
    description: 'Crypto Wallet Redesign',
    completed: true,
    dateCreated: '2024-12-01T09:15:00',
    dateCompleted: '2024-12-01T10:00:00',
  },
  {
    id: '3',
    title: 'Prepare Presentation',
    description: 'Quarterly Performance Report',
    completed: false,
    dateCreated: '2024-12-01T15:00:00',
  },
  {
    id: '4',
    title: 'Team Meeting',
    description: 'Project Progress Discussion',
    completed: false,
    dateCreated: '2024-12-01T13:00:00',
  },
  {
    id: '5',
    title: 'Design Landing Page',
    description: 'Marketing Campaign Launch',
    completed: false,
    dateCreated: '2024-12-01T18:00:00',
  },
  {
    id: '6',
    title: 'Brainstorm Ideas',
    description: 'New Product Strategy',
    completed: false,
    dateCreated: '2024-12-01T11:00:00',
  },
  {
    id: '7',
    title: 'Update Documentation',
    description: 'Project Wiki Update',
    completed: false,
    dateCreated: '2024-12-01T14:30:00',
  },
  {
    id: '8',
    title: 'Code Review',
    description: 'Review Pull Requests',
    completed: true,
    dateCreated: '2024-12-01T17:00:00',
    dateCompleted: '2024-12-01T18:00:00',
  },
])
</script>

<style scoped>
/* You can add custom styles here if needed */
</style>
