<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
    <!-- Title -->
    <h1 class="text-4xl font-bold text-red-500 mb-4">An Error Occurred</h1>
    <!-- Error Details -->
    <p class="text-lg mb-6">{{ error?.statusCode }} - {{ error?.statusMessage }}</p>
    <!-- Back to Home Link -->
    <NuxtLink to="/" class="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">
      Go back to Home
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps(['error'])
</script>
