import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { addDoc, collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import type { Todo } from '~/types/todo'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([])
  const { $db } = useNuxtApp()

  const getTodos = computed(() => todos.value)

  const fetchTodos = async () => {
    try {
      const querySnapshot = await getDocs(collection($db, 'todos'))
      console.log("querySnapshot", querySnapshot)
      todos.value = querySnapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
    } catch (error) {
      console.error('Catch Error in Fetch Todos', error)
    }
  }

  const addTodo = async (newTodo: Todo) => {
    try {
      const docRef = await addDoc(collection($db, 'todos'), newTodo)
      todos.value = [...todos.value, { id: docRef.id, ...newTodo }]
    } catch (error) {
      console.error('Catch Error in Add Todo', error)
    }
  }

  const updateTodo = async (id: string, updates: any) => {
    /**
     * This updates params is an object that will be updated in the object Todo
     */
    try {
      const docRef = doc($db, 'todos', id)
      await updateDoc(docRef, updates)

      todos.value = todos.value.map((todo: any) => {
        if (todo.id === id) {
          return {
            ...todo,
            ...updates,
          }
        }
        return todo
      })
    } catch (error) {
      console.error('Catch Error in Updating Todo', error)
    }
  }

  const deleteTodo = async (id: string) => {
    try {
      const docRef = doc($db, 'todos', id)
      await deleteDoc(docRef)
      todos.value = todos.value.filter((todo: any) => todo.id !== id)
    } catch (error) {
      console.error('Catch Error in Delete Todo', error)
    }
  }

  return {
    todos,
    getTodos,
    fetchTodos,
    addTodo,
    updateTodo,
    deleteTodo,
  }
})
