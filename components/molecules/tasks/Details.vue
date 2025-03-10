<template>
  <div class="p-2">
    <div
      class="mb-2 flex cursor-pointer items-center justify-between rounded bg-gray-400 p-4 hover:bg-gray-800 hover:text-white"
    >
      <div class="flex space-x-3">
        <div class="mt-[3px]">
          <div
            :class="`flex h-5 w-5 items-center justify-center ${isChecked ? 'bg-white' : 'border-2'} cursor-pointer rounded-full`"
            @click="isChecked = !isChecked"
          >
            <a-icon v-if="isChecked" name="Check" :size="15" class="text-gray-800" />
          </div>
        </div>
        <div>
          <div class="text-md">{{ getCurrentTask.title }}</div>
        </div>
      </div>
      <div>
        <a-icon name="Star" :size="20" class="cursor-pointer" />
      </div>
    </div>

    <div
      class="mb-2 flex cursor-pointer items-center justify-between rounded bg-gray-400 p-4 hover:bg-gray-800 hover:text-white"
      @click="addTaskToCurrentDay(getCurrentTask.id)"
    >
      <div class="flex items-center space-x-3">
        <a-icon name="Sun" :size="20" class="cursor-pointer" />
        <div>
          <div class="text-md">{{ getCurrentTask.add_to_current_date ? 'Added to My Day' : 'Add to My Day' }}</div>
        </div>
      </div>
    </div>

    <div class="mb-2 rounded bg-gray-400">
      <div class="flex cursor-pointer items-center space-x-3 rounded p-4 transition hover:bg-gray-800 hover:text-white">
        <a-icon name="AlarmClock" :size="20" class="cursor-pointer" />
        <span class="text-md">{{ 'Remind me' }}</span>
      </div>
      <div class="flex cursor-pointer items-center space-x-3 rounded p-4 transition hover:bg-gray-800 hover:text-white">
        <a-icon name="CalendarDays" :size="20" class="cursor-pointer" />
        <span class="text-md">{{ 'Remind me' }}</span>
      </div>
      <div class="flex cursor-pointer items-center space-x-3 rounded p-4 transition hover:bg-gray-800 hover:text-white">
        <a-icon name="CalendarSync" :size="20" class="cursor-pointer" />
        <span class="text-md">{{ 'Remind me' }}</span>
      </div>
    </div>
    <div
      class="mb-2 flex cursor-pointer items-center justify-between rounded bg-gray-400 p-4 hover:bg-gray-800 hover:text-white"
    >
      <textarea
        ref="textareaRef"
        class="w-full resize-none overflow-hidden border-none bg-gray-400 placeholder-black hover:bg-gray-800 hover:text-white hover:placeholder-white focus:outline-none focus:ring-0"
        placeholder="Notes"
        rows="1"
        @input="adjustHeight"
      ></textarea>
    </div>

    <pre class="text-xs">
			{{ getCurrentTask }}
		</pre
    >
  </div>
</template>

<script setup lang="ts">
import { useTaskv2Store } from '~/stores/tasksv2'

const taskStore = useTaskv2Store()

const getCurrentTask = computed(() => taskStore.currentTask)

const isChecked = ref(false)
const textareaRef = ref(null)

const adjustHeight = () => {
  if (textareaRef.value) {
    textareaRef.value.style.height = 'auto'
    textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`
  }
}

const addTaskToCurrentDay = (id: string) => {
  const add_to_current_date = getCurrentTask.value.add_to_current_date ? false : true
  taskStore.addTaskToCurrentDay(id, add_to_current_date)
}
</script>
