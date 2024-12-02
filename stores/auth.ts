import { defineStore } from 'pinia'
import type { PublicUser } from '~/types/user'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null) // To store authenticated user details
  const token = ref('') // To store JWT or authentication token
  const isLoading = ref(false)
  const errorMessage = ref('')

  // Composable to call API
  const api = $fetch.create({
    baseURL: '/api', // Ensure your API is correctly configured
  })

  // Login method
  const login = async (_user: PublicUser) => {
    const { email, password } = _user
    isLoading.value = true
    errorMessage.value = ''
    try {
      const response: any = await api('/auth/login', {
        method: 'POST',
        body: { email, password },
      })
      user.value = response.user
      // token.value = response.token
      localStorage.setItem('authToken', response.token) // Optional: persist token
    } catch (error: any) {
      errorMessage.value = error?.data?.message || 'Login failed. Please try again.'
    } finally {
      isLoading.value = false
    }
  }

  // Signup method
  const signup = async (_newUser: PublicUser) => {
    const { email, password } = _newUser
    isLoading.value = true
    errorMessage.value = ''
    try {
      const response: any = await api('/auth/signup', {
        method: 'POST',
        body: { email, password },
      })
      user.value = response.user
      token.value = response.token
      localStorage.setItem('authToken', response.token) // Optional: persist token
    } catch (error: any) {
      errorMessage.value = error?.data?.message || 'Signup failed. Please try again.'
    } finally {
      isLoading.value = false
    }
  }

  // Logout method
  const logout = () => {
    user.value = null
    token.value = ''
    localStorage.removeItem('authToken')
  }

  // Check if the user is authenticated
  const isAuthenticated = computed(() => !!token.value)

  return {
    user,
    token,
    isLoading,
    errorMessage,
    login,
    signup,
    logout,
    isAuthenticated,
  }
})
