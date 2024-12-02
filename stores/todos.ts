import { defineStore } from 'pinia'
import { addDoc, collection } from 'firebase/firestore'

interface Todo {
  id?: string
  title?: string
  description?: string
  completed?: boolean
  dateCreated?: string
  dateCompleted?: string
}

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todos: [] as Array<Todo>,
  }),
  actions: {
    /**
     * Fetching all todos
     */

    /**
     * Adding new todo
     */
    async addTodo(newTodo: Todo) {
      console.log('Check newTodo in store', newTodo)
      try {
        const { $db } = useNuxtApp()
        const response = await addDoc(collection($db, 'todos'), newTodo)

        console.log("response", response)
        // this.todos = [...this.todos, { id: response, newTodo }]
        this.todos.push({ id: response.id, ...newTodo })
        console.log("this.todos", this.todos)
      } catch (error) {
        console.error('Catch Error in Add Todo', error)
      }
    },
    /**
     * Updating new todo
     */

    /**
     * Completing a todo
     */

    /**
     * Deleting a todo
     */
  },
})
