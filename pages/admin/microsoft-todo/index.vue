<template>
	<div class="relative bg-gray-500 text-white w-full p-6 bg-gradient-to-b from-gray-800 to-transparent">
		<div class="p-4">
			<h1 class="text-2xl font-semibold">My Day</h1>
			<p class="text-gray-400">Thursday, February 20</p>
		</div>

		<div class="flex-1 overflow-y-auto p-4 space-y-2 md:max-h-[75vh] max-h-[60vh]">
			<m-tasks-task v-for="(task, index) in getTasks" :key="index" :task="task" @show-task-details="showTaskDetails" />
		</div>

		<div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:w-[60%] w-[80%] bg-gray-800 p-4 rounded-lg">
			<div class="relative">
				<input
					v-model="newTask.title"
					@keyup.enter="createNewTask"
					type="text"
					placeholder="Add a task"
					class="w-[80%] bg-transparent text-white outline-none ml-8"
				/>
				<a-icon name="Plus" class="absolute left-0 top-1/2 transform -translate-y-1/2" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import type { Task } from '~/types/task'
import { useTaskStore } from '~/stores/tasks'
import { useGlobalStore } from '~/stores/global'

definePageMeta({
	layout: 'microsoft',
})

const taskStore = useTaskStore()
const globalStore = useGlobalStore()

const newTask: Ref<Task> = ref({ title: '' })

const getTasks = computed(() => taskStore.tasks)
const getCurrentTask = computed(() => taskStore.currentTask)
const isShowRightSideBar = computed(() => globalStore.showRightSideBar)

onMounted(() => {
	taskStore.fetchTasks()
})

const createNewTask = async () => {
	try {
		if (newTask.value.title === '') return
		await taskStore.createTask(newTask.value)
	} catch (error) {
		console.error('An Error Occured', error)
	} finally {
		newTask.value = { title: '' }
	}
}

const showTaskDetails = (currentTask: Task) => {
	const storedTask = getCurrentTask.value
	const isSidebarOpen = isShowRightSideBar.value

	if (!storedTask || storedTask.id !== currentTask.id) {
		// First & Third scenario: Set new task and open sidebar
		taskStore.setCurrentTask(currentTask)
		globalStore.setShowRightSideBar(true)
	} else {
		// Fourth scenario: Toggle sidebar if same task is selected
		globalStore.setShowRightSideBar(!isSidebarOpen)
	}
}
</script>
