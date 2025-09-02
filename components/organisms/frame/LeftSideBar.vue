<template>
  <div class="hidden w-20 flex-col space-y-4 bg-white px-2 pt-6 sm:flex md:w-[15vw]">
    <!-- Profile Section -->
    <div class="flex items-center justify-center gap-3 xl:justify-start xl:px-4">
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="Avatar"
        class="h-10 w-10 rounded-full md:h-16 md:w-16"
      />
      <div class="hidden xl:block">
        <h3 class="text-lg font-semibold">Dev Rangie</h3>
        <p class="text-sm text-gray-400">devrangie25@gmail.com</p>
      </div>
    </div>

    <!-- Search Bar -->
    <div class="mb-2 mt-3 hidden px-4 lg:block">
      <input
        type="text"
        placeholder="Search"
        class="w-full rounded p-2 outline outline-1 transition focus:outline-gray-500"
      />
    </div>

    <!-- Navigations -->
    <div class="relative hidden h-full lg:block">
      <ul class="space-y-2">
        <NuxtLink v-for="item in menuItems" :key="item.name" :to="item.route">
          <li
            class="flex cursor-pointer items-center rounded px-4 py-3 transition duration-200"
            :class="{
              'bg-gray-800 text-white': route.path === item.route,
              'hover:bg-gray-200': route.path !== item.route,
            }"
            @click="handleRoutechange(item)"
          >
            <a-icon :name="item.icon" class="mr-2" />
            {{ item.name }}
          </li>
        </NuxtLink>
      </ul>
      <hr class="my-2" />
      <div
        class="absolute bottom-2 left-0 flex w-full cursor-pointer rounded px-4 py-3 transition duration-200 hover:bg-gray-200"
      >
        <a-icon name="Plus" class="mr-2" />New List
      </div>
    </div>

    <!-- Mobile View -->
    <div class="relative block h-full lg:hidden">
      <ul class="space-y-2">
        <NuxtLink v-for="item in menuItems" :key="item.name" :to="item.route">
          <li
            class="flex cursor-pointer justify-center rounded py-3 transition duration-200"
            :class="{
              'bg-gray-800 text-white': route.path === item.route,
              'hover:bg-gray-200': route.path !== item.route,
            }"
          >
            <a-icon :name="item.icon" />
          </li>
        </NuxtLink>
      </ul>
      <hr class="my-2" />
      <div
        class="absolute bottom-2 left-0 flex w-full cursor-pointer justify-center rounded py-3 transition duration-200 hover:bg-gray-200"
      >
        <a-icon name="Plus" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTaskv2Store } from '~/stores/tasksv2'
import { useGlobalStore } from '~/stores/global'

const globalStore = useGlobalStore()
const route = useRoute()
const taskStore = useTaskv2Store()

const menuItems = [
  { name: 'My Day', icon: 'Sun', value: 'my-day', route: '/admin/microsoft-todo/my-day' },
  { name: 'Important', icon: 'Star', value: 'important', route: '/admin/microsoft-todo/important' },
  { name: 'Planned', icon: 'CalendarCheck', value: 'planned', route: '/admin/microsoft-todo/planned' },
  { name: 'Tasks', icon: 'Home', value: 'tasks', route: '/admin/microsoft-todo/tasks' },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleRoutechange = (item: any) => {
  globalStore.setShowRightSideBar(false)
  taskStore.setTaskFilter(item.value.toLowerCase())
}
</script>

<style scoped>
a {
  text-decoration: none;
  display: block;
}
</style>
