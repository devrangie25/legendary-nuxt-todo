/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineEventHandler } from 'h3'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  try {
    const response = await $fetch(`${config.APP_API_URL}/api/tasks`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    return response
  } catch (error: any) {
    throw createError({ status: error.status, message: error.message })
  }
})
