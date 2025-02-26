import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { addDoc, collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import type { Task } from '~/types/task'

export const useTaskStore = defineStore('task', () => {
	const tasks = ref<Task[]>([])
	const currentTask = ref<Task>()
	const { $db } = useNuxtApp()

	const getTasks = computed(() => tasks.value)
	const getCurrentTask = computed(() => currentTask.value)

	const fetchTasks = async () => {
		try {
			const querySnapshot = await getDocs(collection($db, 'tasks'))
			console.log('querySnapshot', querySnapshot)
			tasks.value = querySnapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
		} catch (error) {
			console.error('Catch Error in Fetch Tasks', error)
		}
	}

	const createTask = async (newTask: Task) => {
		try {
			const docRef = await addDoc(collection($db, 'tasks'), newTask)
			tasks.value = [...tasks.value, { id: docRef.id, ...newTask }]
		} catch (error) {
			console.error('Catch Error in Add Task', error)
		}
	}

	const updateTask = async (id: string, updates: any) => {
		/**
		 * This updates params is an object that will be updated in the object Task
		 */
		try {
			const docRef = doc($db, 'tasks', id)
			await updateDoc(docRef, updates)

			tasks.value = tasks.value.map((task: any) => {
				if (task.id === id) {
					return {
						...task,
						...updates,
					}
				}
				return task
			})
		} catch (error) {
			console.error('Catch Error in Updating Task', error)
		}
	}

	const deleteTask = async (id: string) => {
		try {
			const docRef = doc($db, 'tasks', id)
			await deleteDoc(docRef)
			tasks.value = tasks.value.filter((task: any) => task.id !== id)
		} catch (error) {
			console.error('Catch Error in Delete Task', error)
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
		setCurrentTask,
		fetchTasks,
		createTask,
		updateTask,
		deleteTask,
	}
})
