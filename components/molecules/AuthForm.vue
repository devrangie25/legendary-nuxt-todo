<template>
  <div class="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
    <!-- Logo -->
    <div class="flex justify-center mb-6">
      <div class="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
        <!-- Placeholder for logo -->
        <span class="text-2xl font-bold text-white">Logo</span>
      </div>
    </div>

    <!-- Title -->
    <h2 class="text-2xl font-bold text-center text-white mb-2">Welcome Back</h2>
    <p class="text-sm text-center text-gray-400 mb-6">
      Don’t have an account yet?
      <NuxtLink to="/signup" class="text-blue-500 hover:underline">Sign up</NuxtLink>
    </p>

    <!-- Form -->
    <form>
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-300 mb-1" for="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Email address"
          class="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-300 mb-1" for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          class="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        class="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
      >
        Login
      </button>
    </form>

    <!-- Divider -->
    <div class="flex items-center my-6">
      <hr class="flex-grow border-gray-600" />
      <span class="px-4 text-sm text-gray-400">OR</span>
      <hr class="flex-grow border-gray-600" />
    </div>

    <!-- Social Login Buttons -->
    <div class="flex justify-center space-x-4">
      <button
        class="flex items-center justify-center w-12 h-12 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition"
      >
        <i class="fab fa-apple"></i>
      </button>
      <button
        class="flex items-center justify-center w-12 h-12 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition"
      >
        <i class="fab fa-google"></i>
      </button>
      <button
        class="flex items-center justify-center w-12 h-12 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition"
      >
        <i class="fab fa-facebook"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
