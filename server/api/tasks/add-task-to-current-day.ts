/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  try {
    const response: any = await $fetch(`${config.APP_API_URL}/api/tasks/add-to-current-day`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    return response
  } catch (error: any) {
    console.log('error', error)
    throw createError({ status: error.status, message: error.message })
  }
})
