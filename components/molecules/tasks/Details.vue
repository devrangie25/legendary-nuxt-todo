<template>
	<div class="p-2">
		<pre>
			{{ getCurrentTask }}
		</pre>
		<div class="bg-gray-400 hover:bg-gray-800 hover:text-white p-4 rounded justify-between flex items-center cursor-pointer mb-2">
			<div class="flex space-x-3">
				<div class="mt-[3px]">
					<div
						:class="`w-5 h-5 flex items-center justify-center ${isChecked ? 'bg-white' : 'border-2'} rounded-full cursor-pointer`"
						@click="isChecked = !isChecked"
					>
						<a-icon v-if="isChecked" name="Check" :size="15" />
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

		<div class="bg-gray-400 hover:bg-gray-800 hover:text-white p-4 rounded flex justify-between items-center cursor-pointer mb-2">
			<div class="flex items-center space-x-3">
				<a-icon name="Sun" :size="20" class="cursor-pointer" />
				<div>
					<div class="text-md">{{ getCurrentTask.addToCurrentDate ? 'Added to my Day' : 'Add to My Day' }}</div>
				</div>
			</div>
		</div>

		<div class="bg-gray-400 rounded mb-2">
			<div class="hover:bg-gray-800 hover:text-white flex items-center space-x-3 p-4 rounded cursor-pointer transition">
				<a-icon name="AlarmClock" :size="20" class="cursor-pointer" />
				<span class="text-md">{{ 'Remind me' }}</span>
			</div>
			<div class="hover:bg-gray-800 hover:text-white flex items-center space-x-3 p-4 rounded cursor-pointer transition">
				<a-icon name="CalendarDays" :size="20" class="cursor-pointer" />
				<span class="text-md">{{ 'Remind me' }}</span>
			</div>
			<div class="hover:bg-gray-800 hover:text-white flex items-center space-x-3 p-4 rounded cursor-pointer transition">
				<a-icon name="CalendarSync" :size="20" class="cursor-pointer" />
				<span class="text-md">{{ 'Remind me' }}</span>
			</div>
		</div>
		<div class="bg-gray-400 hover:bg-gray-800 hover:text-white p-4 rounded flex justify-between items-center mb-2 cursor-pointer">
			<textarea
				ref="textareaRef"
				class="placeholder-black hover:placeholder-white bg-gray-400 hover:bg-gray-800 hover:text-white resize-none w-full border-none overflow-hidden focus:ring-0 focus:outline-none"
				placeholder="Notes"
				rows="1"
				@input="adjustHeight"
			></textarea>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useTaskStore } from '~/stores/tasks'

const taskStore = useTaskStore()

const getCurrentTask = computed(() => taskStore.currentTask)

const isChecked = ref(false)
const textareaRef = ref(null)

const adjustHeight = () => {
	if (textareaRef.value) {
		textareaRef.value.style.height = 'auto'
		textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`
	}
}
</script>
