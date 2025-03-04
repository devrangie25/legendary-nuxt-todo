<template>
  <div class="relative w-full bg-gray-500 bg-gradient-to-b from-gray-800 to-transparent p-6 text-white">
    <div class="p-4">
      <h1 class="text-2xl font-semibold">My Day</h1>
      <p class="text-gray-400">Thursday, February 20</p>
    </div>

    <div class="max-h-[60vh] flex-1 space-y-2 overflow-y-auto p-4 md:max-h-[75vh]">
      <m-tasks-task v-for="(task, index) in getTasks" :key="index" :task="task" @show-task-details="showTaskDetails" />
    </div>

    <div class="absolute bottom-4 left-1/2 w-[80%] -translate-x-1/2 transform rounded-lg bg-gray-800 p-4 md:w-[60%]">
      <div class="relative">
        <input
          v-model="newTask.title"
          @keyup.enter="createNewTask"
          type="text"
          placeholder="Add a task"
          class="ml-8 w-[80%] bg-transparent text-white outline-none"
        />
        <a-icon name="Plus" class="absolute left-0 top-1/2 -translate-y-1/2 transform" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import type { Task } from '~/types/task'
import { useTaskStore } from '~/stores/tasks'
import { useGlobalStore } from '~/stores/global'
import { useDayjs } from '#dayjs'

definePageMeta({
  layout: 'microsoft',
})

const taskStore = useTaskStore()
const globalStore = useGlobalStore()
const dayjs = useDayjs()

const newTask: Ref<Task> = ref({
  title: '',
  currentDate: '',
  dateCreated: '',
  dueDate: '',
  addToCurrentDate: true,
  important: true,
  type: 'Tasks',
})

const getTasks = computed(() => taskStore.tasks)
const getCurrentTask = computed(() => taskStore.currentTask)
const isShowRightSideBar = computed(() => globalStore.showRightSideBar)

onMounted(() => {
  taskStore.fetchImportantTasks()
})

const createNewTask = async () => {
  try {
    if (newTask.value.title === '') return
    /** Get current UTC timestamp */
    const now = dayjs.utc().toISOString()
    newTask.value.dateCreated = now
    newTask.value.currentDate = newTask.value.currentDate ? dayjs.utc(newTask.value.currentDate).toISOString() : now
    newTask.value.dueDate = newTask.value.dueDate ? dayjs.utc(newTask.value.dueDate).toISOString() : null
    console.log('Task to be saved:', newTask.value)
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
