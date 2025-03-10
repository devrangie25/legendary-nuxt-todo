import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { AppError } from '~/types/error'

export const useGlobalStore = defineStore('global', () => {
  const user = ref(null)
  const loading = ref(false)
  const showRightSideBar = ref(false)
  const error = ref<AppError>()

  const getLoadingState = computed(() => loading.value)
  const getUser = computed(() => user.value)
  const getShowRightSideBar = computed(() => showRightSideBar.value)
  const getError = computed(() => error.value)

  const setLoading = (value: boolean) => {
    loading.value = value
  }

  const setError = (value: AppError) => {
    error.value = value
    console.log('Check error =>', error.value)
  }

  const setShowRightSideBar = (value: boolean) => {
    showRightSideBar.value = value
  }

  const setUser = (currentUser: any) => {
    user.value = currentUser
  }

  return {
    user,
    loading,
    showRightSideBar,
    getLoadingState,
    getUser,
    getError,
    setError,
    getShowRightSideBar,
    setShowRightSideBar,
    setLoading,
    setUser,
  }
})
