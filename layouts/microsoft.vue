<template>
	<div class="flex min-h-screen bg-gray-100">
		<o-frame-left-side-bar />
		<div class="flex w-full">
			<slot />
		</div>
		<o-frame-right-side-bar v-if="isShowRightSideBar">
			<div class="p-4">
				<div class="text-lg">
					{{ getCurrentTask.title }}
				</div>
			</div>
		</o-frame-right-side-bar>
	</div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '~/stores/global'
import { useTaskStore } from '~/stores/tasks'

const globalStore = useGlobalStore()
const taskStore = useTaskStore()

const isShowRightSideBar = computed(() => globalStore.showRightSideBar)
const getCurrentTask = computed(() => taskStore.currentTask)

</script>

<style scoped></style>
