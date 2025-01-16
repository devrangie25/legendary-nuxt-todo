<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-6 sm:px-0">
    <div class="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
      <slot />
      <div v-if="isActionButtons" class="mt-4 flex justify-end gap-x-2">
        <button class="bg-gray-300 rounded shadow-md px-4 py-2" @click="closeModal">Cancel</button>
        <button class="bg-blue-500 text-white px-4 py-2 rounded shadow-md" @click="closeModal">Save</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['isOpen', 'isActionButtons'])
const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>

<style scoped>
/* Optional styles if needed */
</style>
