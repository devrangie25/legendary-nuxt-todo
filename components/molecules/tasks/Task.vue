<template>
	<div class="bg-gray-800 p-4 rounded-lg flex justify-between items-center" @click="showTaskDetails">
		<div class="flex space-x-2">
			<div
				:class="`w-5 h-5 mt-1 flex items-center justify-center ${isChecked ? 'bg-blue-500' : 'border-2'} rounded-full cursor-pointer`"
				@click="isChecked = !isChecked"
			>
				<a-icon v-if="isChecked" name="Check" :size="15" />
			</div>
			<div>
				<div class="text-lg">{{ task.title }}</div>
				<div class="flex space-x-1 items-center">
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
		<a-icon name="Star" class="cursor-pointer" />
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
