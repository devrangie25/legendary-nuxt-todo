<template>
  <div class="flex items-center justify-between rounded-lg bg-gray-800 p-4">
    <div class="mr-4 flex w-full space-x-4">
      <div>
        <div
          :class="`mt-[5px] flex h-5 w-5 items-center justify-center ${isChecked ? 'bg-blue-500' : 'border-2'} cursor-pointer rounded-full`"
          @click="isChecked = !isChecked"
        >
          <a-icon v-if="isChecked" name="Check" :size="15" />
        </div>
      </div>
      <div class="w-full" @click="showTaskDetails">
        <div class="text-md">{{ task.title }}</div>
        <div class="mt-[3px] flex items-center space-x-1">
          <!-- Type of Todo -->
          <div class="flex">
            <span class="text-sm font-light">
              {{ 'Tasks' }}
            </span>
          </div>
          <a-icon name="Dot" :size="15" />
          <!-- Due Date -->
          <div class="flex items-center">
            <a-icon name="Calendar" :size="15" />
            <span class="ml-1 text-sm font-light">
              {{ 'Mon, Apr 7' }}
            </span>
          </div>
          <a-icon name="Dot" :size="15" />
          <!-- Remind Date -->
          <div class="flex items-center">
            <a-icon name="Bell" :size="15" />
            <span class="ml-1 text-sm font-light">
              {{ 'Wed, Mar 12' }}
            </span>
          </div>
          <a-icon name="Dot" :size="15" />
          <!-- Repeat -->
          <div class="flex items-center">
            <a-icon name="Repeat" :size="15" />
          </div>
          <a-icon name="Dot" :size="15" />
          <!-- Notes -->
          <div class="flex items-center">
            <a-icon name="StickyNote" :size="15" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <a-icon name="Star" :class="`cursor-pointer ${task.important ? 'fill-slate-300' : ''}`" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Task } from '~/types/task'

const props = defineProps<{
  task: Task
}>()
const emit = defineEmits(['show-task-details'])

const isChecked = ref(true)

const showTaskDetails = () => {
  emit('show-task-details', props.task)
}
</script>

<style scoped></style>
