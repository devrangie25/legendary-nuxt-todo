<template>
  <div class="w-full max-w-md rounded-lg bg-gray-800 p-8 shadow-lg">
    <!-- Logo -->
    <div class="mb-6 flex justify-center">
      <div class="flex h-16 w-16 items-center justify-center rounded-full bg-gray-700">
        <!-- Placeholder for logo -->
        <span class="text-2xl font-bold text-white">Logo</span>
      </div>
    </div>

    <!-- Title -->
    <h2 class="mb-2 text-center text-2xl font-bold text-white">Welcome Back</h2>
    <p class="mb-6 text-center text-sm text-gray-400">
      Already have an account?
      <NuxtLink to="/auth/login" class="text-blue-500 hover:underline">Login</NuxtLink>
    </p>

    <!-- Form -->
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <a-label for="email" text="Email Address" />
        <input
          type="email"
          id="email"
          placeholder="johndoe@example.com"
          class="w-full rounded bg-gray-700 px-4 py-2 text-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      <div class="mb-6">
        <a-label for="password" text="Password" />
        <input
          type="password"
          id="password"
          placeholder="********"
          class="w-full rounded bg-gray-700 px-4 py-2 text-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        class="w-full rounded bg-blue-500 px-4 py-2 font-semibold text-white transition hover:bg-blue-600"
      >
        Sign up
      </button>
    </form>

    <!-- Divider -->
    <div class="my-6 flex items-center">
      <hr class="flex-grow border-gray-600" />
      <span class="px-4 text-sm text-gray-400">OR</span>
      <hr class="flex-grow border-gray-600" />
    </div>

    <!-- Social Login Buttons -->
    <div class="flex justify-center space-x-4">
      <button
        class="flex h-12 w-12 items-center justify-center rounded bg-gray-700 text-gray-300 transition hover:bg-gray-600"
      >
        <i class="fab fa-apple"></i>
      </button>
      <button
        class="flex h-12 w-12 items-center justify-center rounded bg-gray-700 text-gray-300 transition hover:bg-gray-600"
      >
        <i class="fab fa-google"></i>
      </button>
      <button
        class="flex h-12 w-12 items-center justify-center rounded bg-gray-700 text-gray-300 transition hover:bg-gray-600"
      >
        <i class="fab fa-facebook"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '/stores/auth.ts'

definePageMeta({
  layout: 'auth',
})

const authStore = useAuthStore()

const user = ref({
  email: '',
  password: '',
})

const submitForm = () => {
  console.log('Sign Up Page: Check User -> ', user.value)

  authStore.signup(user.value)
}
</script>

<style scoped>
/* Include FontAwesome icons if needed */
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
</style>
