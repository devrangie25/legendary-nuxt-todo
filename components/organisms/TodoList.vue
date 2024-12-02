<template>
  <div class="w-full max-w-3xl bg-white p-4 mt-4 space-y-4">
    <m-todo-card v-for="todo in props.todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  todos: Array<any>
}>()
</script>

<style scoped></style>
