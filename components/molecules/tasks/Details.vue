<template>
	<div class="bg-gray-900 text-white w-80 p-4 rounded-xl shadow-lg">
		<!-- Header -->
		<div class="flex justify-between items-center mb-4">
			<div class="flex items-center">
				<input type="checkbox" class="w-5 h-5 accent-blue-500" />
				<h2 class="ml-2 text-lg font-semibold">Test</h2>
			</div>
			<button class="text-gray-400 hover:text-yellow-400">
				<i class="fas fa-star"></i>
			</button>
		</div>

		<!-- Add Step -->
		<button class="text-blue-400 hover:text-blue-300 text-sm mb-4">+ Add step</button>

		<!-- Added to My Day -->
		<div class="flex items-center justify-between bg-gray-800 p-2 rounded-lg text-sm text-gray-300 mb-4">
			<div class="flex items-center">
				<i class="fas fa-sun mr-2"></i>
				<span>Added to My Day</span>
			</div>
			<button class="text-gray-400 hover:text-white">&times;</button>
		</div>

		<!-- Action Buttons -->
		<div class="space-y-2">
			<button class="flex items-center w-full p-3 bg-gray-800 rounded-lg hover:bg-gray-700"><i class="fas fa-bell mr-3"></i> Remind me</button>
			<button class="flex items-center w-full p-3 bg-gray-800 rounded-lg hover:bg-gray-700">
				<i class="fas fa-calendar-alt mr-3"></i> Add due date
			</button>
			<button class="flex items-center w-full p-3 bg-gray-800 rounded-lg hover:bg-gray-700"><i class="fas fa-redo mr-3"></i> Repeat</button>
		</div>

		<!-- File Upload -->
		<button class="flex items-center w-full p-3 bg-gray-800 rounded-lg hover:bg-gray-700 mt-4"><i class="fas fa-paperclip mr-3"></i> Add file</button>

		<!-- Note Section -->
		<textarea
			class="w-full bg-gray-800 text-white p-3 mt-4 rounded-lg placeholder-gray-400 focus:outline-none"
			rows="3"
			placeholder="Add note"
		></textarea>
	</div>
</template>

<script setup lang="ts"></script>
