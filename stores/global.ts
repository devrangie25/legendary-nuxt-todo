import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useGlobalStore = defineStore('global', () => {
	const user = ref(null)
	const loading = ref(false)
	const showRightSideBar = ref(false)

	const getLoadingState = computed(() => loading.value)
	const getUser = computed(() => user.value)
	const getShowRightSideBar = computed(() => showRightSideBar.value)

	const setLoading = (value: boolean) => {
		loading.value = value
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
		getShowRightSideBar,
		setShowRightSideBar,
		setLoading,
		setUser,
	}
})
