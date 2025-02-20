<template>
	<div class="relative bg-gray-500 text-white w-full p-6 bg-gradient-to-b from-gray-800 to-transparent">
		<!-- Header -->
		<div class="p-4">
			<h1 class="text-2xl font-semibold">My Day</h1>
			<p class="text-gray-400">Thursday, February 20</p>
		</div>

		<!-- Tasks Container -->
		<div class="flex-1 overflow-y-auto p-4 space-y-2">
			<div v-for="(task, index) in tasks" :key="index" class="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
				<div class="flex space-x-2">
					<div
						:class="`w-5 h-5 mt-1 flex items-center justify-center ${isChecked ? 'bg-blue-500' : 'border-2'} rounded-full cursor-pointer`"
						@click="isChecked = !isChecked"
					>
						<a-icon v-if="isChecked" name="Check" :size="15" />
					</div>
					<div>
						<div class="text-lg">{{ task }}</div>
						<div class="flex space-x-2">
							<div class="text-sm font-light">{{ 'Tasks' }}</div>
							<div class="text-sm font-light">{{ 'Tomorrow' }}</div>
							<div class="text-sm font-light">{{ 'Task' }}</div>
						</div>
					</div>
				</div>
				<!-- <button class="text-gray-400 hover:text-white">⭐</button> -->
				<a-icon name="Star" class="cursor-pointer" />
			</div>
		</div>

		<div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:w-[60%] w-[80%] bg-gray-800 p-4 rounded-lg">
			<div class="relative">
				<input type="text" placeholder="Add a task" class="w-full bg-transparent text-white outline-none ml-8" />
				<a-icon name="Plus" class="absolute left-0 top-1/2 transform -translate-y-1/2" />
				<a-icon name="Plus" class="absolute right-0 top-1/2 transform -translate-y-1/2" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'microsoft',
})

const isChecked = ref(true)

const tasks = [
	// 'Swimming with Friends',
	// 'Go on a date',
	// 'Take a Bath',
	// 'Go see a doctor',
	// 'Read a book',
	// 'Work on a project',
	// 'Go for a run',
	// 'Watch a movie',
	// 'Call mom',
	// 'Buy groceries',
	// 'Clean the house',
	// 'Cook dinner',
	// 'Meditate',
	// 'Write a journal',
	// 'Learn a new skill',
	// 'Do laundry',
	// 'Organize desk',
	// 'Plan next week',
	// 'Listen to music',
	// 'Go hiking',
	// 'Visit a museum',
	'Try a new recipe',
	'Meet a friend for coffee',
	'Fix the bike',
	'Practice coding',
	'Take a nap',
	'Stretch and exercise',
	'Reply to emails',
	'Declutter room',
	'Review budget',
]
</script>
