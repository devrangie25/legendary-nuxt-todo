<template>
	<div class="flex min-h-screen bg-gray-100">
		<div class="md:w-80 w-20 bg-white sm:flex hidden flex-col space-y-4 pt-6 px-2">
			<!-- Profile Section -->
			<div class="flex items-center justify-center md:justify-start gap-3 md:px-4">
				<img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="Avatar" class="md:w-16 md:h-16 h-10 w-10 rounded-full" />
				<div class="md:block hidden">
					<h3 class="text-lg font-semibold">Dev Rangie</h3>
					<p class="text-sm text-gray-400">devrangie25@gmail.com</p>
				</div>
			</div>

			<!-- Search Bar -->
			<div class="md:block hidden mt-3 mb-2 px-4">
				<input type="text" placeholder="Search" class="w-full p-2 rounded outline outline-1" />
			</div>

			<!-- Navigations -->
			<div class="md:block hidden relative h-full">
				<ul class="space-y-2">
					<li class="flex py-3 px-4 rounded hover:bg-gray-400 cursor-pointer"><a-icon name="Sun" class="mr-2" />My Day</li>
					<li class="flex py-3 px-4 rounded hover:bg-gray-400 cursor-pointer"><a-icon name="Star" class="mr-2" />Important</li>
					<li class="flex py-3 px-4 rounded hover:bg-gray-400 cursor-pointer"><a-icon name="CalendarCheck" class="mr-2" />Planned</li>
					<li class="flex py-3 px-4 rounded hover:bg-gray-400 cursor-pointer"><a-icon name="Home" class="mr-2" />Tasks</li>
				</ul>
				<hr class="my-2" />
				<div class="absolute flex bottom-2 left-0 w-full rounded hover:bg-gray-400 px-4 py-3 cursor-pointer">
					<a-icon name="Plus" class="mr-2" />New List
				</div>
			</div>

			<div class="block md:hidden relative h-full">
				<ul class="space-y-2">
					<li class="flex justify-center py-3 rounded hover:bg-gray-400 cursor-pointer"><a-icon name="Sun" /></li>
					<li class="flex justify-center py-3 rounded hover:bg-gray-400 cursor-pointer"><a-icon name="Star" /></li>
					<li class="flex justify-center py-3 rounded hover:bg-gray-400 cursor-pointer"><a-icon name="CalendarCheck" /></li>
					<li class="flex justify-center py-3 rounded hover:bg-gray-400 cursor-pointer"><a-icon name="Home" /></li>
				</ul>
				<hr class="my-2" />
				<div class="absolute flex justify-center bottom-2 left-0 w-full rounded hover:bg-gray-400 py-3 cursor-pointer">
					<a-icon name="Plus" />
				</div>
			</div>
		</div>

		<div class="flex w-full">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
console.log('Check microsoft layout')
</script>

<style scoped></style>
