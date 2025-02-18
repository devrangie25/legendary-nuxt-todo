<template>
	<div class="flex flex-col items-center">
		<!-- Header -->
		<div class="w-full bg-white md:p-4 p-6 shadow-md flex items-center justify-between sticky top-0">
			<div>
				<span class="text-gray-600 text-2xl font-bold">Today's Task</span>
				<p class="text-gray-600">{{ dayjs().format('dddd, DD MMM') }}</p>
			</div>
			<button class="bg-[#e0ecfa] text-blue-600 h-12 w-32 rounded-md hover:bg-blue-600 hover:text-[#e0ecfa] transition" @click="openModalForNewTodo">
				+ New Task
			</button>
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
import { useDayjs } from '#dayjs'

definePageMeta({
	layout: 'default',
})

const dayjs = useDayjs()
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
