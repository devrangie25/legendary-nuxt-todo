<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
    <!-- Title -->
    <h1 class="text-6xl font-bold text-red-500 mb-4">404</h1>
    <!-- Subtitle -->
    <p class="text-xl font-medium mb-6">Oops! The page you're looking for doesn't exist.</p>
    <!-- Back to Home Button -->
    <NuxtLink
      to="/test-page"
      class="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
    >
      Go Back Home
    </NuxtLink>
  </div>
</template>
