<template>
	<div class="bg-white rounded-2xl p-6 flex flex-col w-full">
		<div class="flex items-center justify-between mb-2">
			<div>
				<span :class="`flex text-xl font-normal text-gray-600 ${isChecked ? 'line-through' : ''}`">Client Review & Feedback</span>
				<span class="text-gray-400 font-light text-md">Crypto Wallet Redesign</span>
			</div>
			<div
				:class="`w-7 h-7 flex items-center justify-center ${isChecked ? 'bg-blue-500' : 'border-2'} rounded-full cursor-pointer`"
				@click="isChecked = !isChecked"
			>
				<CheckIcon v-if="isChecked" class="w-5 h-5 text-white font-semibold" />
			</div>
		</div>

		<hr class="border-t border-gray-300 mt-2" />

		<div class="flex items-center justify-between mt-2">
			<div class="flex items-center text-gray-400 text-sm">
				<span class="font-medium mr-2">Today</span>
				<span>10:00 PM - 11:45 PM</span>
			</div>
			<div class="flex -space-x-3">
				<img class="w-8 h-8 rounded-full border-2 border-white shadow" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 1" />
				<img class="w-8 h-8 rounded-full border-2 border-white shadow" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 2" />
				<img class="w-8 h-8 rounded-full border-2 border-white shadow" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 3" />
				<div class="w-8 h-8 flex items-center justify-center bg-blue-500 text-white text-xs font-light rounded-full border-2 border-white shadow">
					+{{ 4 }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { h } from 'vue'

const isChecked = ref(false)

// Checkmark Icon
const CheckIcon = () =>
	h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
		h('path', {
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
			strokeWidth: '2',
			d: 'M5 13l4 4L19 7',
		}),
	])
</script>
