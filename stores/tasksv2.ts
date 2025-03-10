import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Task } from '~/types/task'
import type { ApiResponse } from '~/types/api'
import { useGlobalStore } from '~/stores/global'

export const useTaskv2Store = defineStore('taskv2', () => {
  const globalStore = useGlobalStore()

  const tasks = ref<Task[]>([])
  const currentTask = ref<Task>()

  const getTasks = computed(() => tasks.value)
  const getCurrentTask = computed(() => currentTask.value)

  const fetchTasks = async () => {
    try {
      const response = await $fetch<ApiResponse<Task[]>>('/api/tasks/get-tasks', {
        method: 'GET',
      })
      if (response.status === 'error') {
        globalStore.setError({
          title: 'task',
          action: 'fetchTasks',
          status: response.status,
          message: response.message || 'An Error Occured',
          success: false,
        })
      } else {
        tasks.value = [...response.data]
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      globalStore.setError({
        title: 'task',
        action: 'fetchTasks',
        status: error.status,
        message: error.message || 'An Error Occured',
        success: false,
      })
    }
  }

  const createTask = async (newTask: Task) => {
    try {
      const response = await $fetch<Task>('/api/tasks/create-task', {
        method: 'POST',
        body: newTask,
      })

      if (response.status === 'error') {
        globalStore.setError({
          title: 'task',
          action: 'fetchTasks',
          status: response.status,
          message: response.message || 'An Error Occured',
          success: false,
        })
      } else {
        console.log('check response =>', response)
      }
    } catch (error) {
      globalStore.setError({
        title: 'task',
        action: 'fetchTasks',
        status: error.status,
        message: error.message || 'An Error Occured',
        success: false,
      })
    }
  }

  const setCurrentTask = (task: Task) => {
    currentTask.value = task
  }

  return {
    tasks,
    currentTask,
    getCurrentTask,
    getTasks,
    createTask,
    setCurrentTask,
    fetchTasks,
  }
})
