<template>
  <div>Test Button</div>
</template>

<script setup lang="ts">
defineProps({
  text: { type: String, default: 'This is label' },
  for: { type: String, default: 'sample' },
  labelClass: { type: String, default: 'block text-sm font-medium text-gray-300 mb-1' },
})
</script>

<style scoped></style>
