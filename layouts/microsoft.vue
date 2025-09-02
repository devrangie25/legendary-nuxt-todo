<template>
  <div class="flex min-h-screen w-full bg-gray-100">
    <o-frame-left-side-bar />
    <div class="flex w-full md:w-[85vw]">
      <slot />
      <!-- Task Details Display-->
      <o-frame-right-side-bar v-if="isShowRightSideBar">
        <m-tasks-details />
      </o-frame-right-side-bar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '~/stores/global'

const globalStore = useGlobalStore()

const isShowRightSideBar = computed(() => globalStore.showRightSideBar)
</script>

<style scoped></style>
