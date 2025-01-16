<template>
  <div class="flex flex-col items-center">
    <!-- Header -->
    <div class="w-full bg-white p-4 shadow-md flex items-center justify-between">
      <div class="text-xl font-semibold">Today’s Task</div>
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        @click="openModalForNewTodo"
      >
        + New Task
      </button>
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

    <o-todo-list :todos="getTodos" @on-update="showModalForUpdateTodo" />

    <m-modal :isOpen="showTodoModal" @close="handleCloseModal" @save-todo="handleSaveTodo">
      <m-todo-form :loading="isLoading" @form-submit="handleFormSubmit" @form-cancel="handleFormCancel" />
    </m-modal>
  </div>
</template>

<script setup lang="ts">
import type { Todo } from '~/types/todo'
import { useTodoStore } from '~/stores/todos'
import { useGlobalStore } from '~/stores/global'

definePageMeta({
  layout: 'default',
})

const todoStore = useTodoStore()
const globalStore = useGlobalStore()
const showTodoModal: boolean = ref(false)

onMounted(() => {
  todoStore.fetchTodos()
})

const isLoading = computed(() => globalStore.loading)
const getTodos = computed(() => todoStore.todos)

const openModalForNewTodo = () => {
  showTodoModal.value = true
}

const handleCloseModal = () => {
  showTodoModal.value = false
}

const handleSaveTodo = () => {
  showTodoModal.value = false
}

const handleFormCancel = () => {
  showTodoModal.value = false
}

const showModalForUpdateTodo = (todoToEdit: Todo) => {
  /** need to pass todoToEdit to the Form */
  console.log('Check Todo To Edit ==> ', todoToEdit)
  showTodoModal.value = true
}

// const handleUpdateTodo =  (todo: Todo) => {
//   console.log()
// }

const handleFormSubmit = async (todo: Todo) => {
  try {
    globalStore.setLoading(true)
    await todoStore.addTodo(todo)
    showTodoModal.value = false
  } catch (error) {
    console.error('An Error Occured', error)
  } finally {
    globalStore.setLoading(false)
  }
}
</script>

<style scoped>
/* You can add custom styles here if needed */
</style>
