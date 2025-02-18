import { defineStore } from 'pinia'
import type { PublicUser } from '~/types/user'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref('')
  const isLoading = ref(false)
  const errorMessage = ref('')

  // Composable to call API
  const apiHandler = $fetch.create({
    baseURL: '/api',
  })

  // Login method
  const login = async (_user: PublicUser) => {
    console.log('check login ==> ', _user)
    const { email, password } = _user
    isLoading.value = true
    errorMessage.value = ''
    try {
      const response: any = await apiHandler('/auth/login', {
        method: 'POST',
        body: { email, password },
      })
      user.value = response.user
      // token.value = response.token
      // Optional: persist token
      localStorage.setItem('authToken', response.token)
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
      const response: any = await apiHandler('/auth/signup', {
        method: 'POST',
        body: { email, password },
      })
      user.value = response.user
      token.value = response.token
      // Optional: persist token
      localStorage.setItem('authToken', response.token)
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
