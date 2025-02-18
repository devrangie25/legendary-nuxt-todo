/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()
  // const apiHandler: any = $fetch.create({
  //   baseURL: config.MISSION_CONTROL_SERVICE_BASE_URL,
  // })
  try {
    // Call an external authentication API (replace with your actual API URL)
    const { email, password } = body
    if (!email || !password) {
      return {
        statusCode: 400,
        message: 'Email and password are required.',
      }
    }
    const response: any = await $fetch(`${config.APP_API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { email, password },
    })

    return {
      success: true,
      token: response.access_token,
    }
  } catch (error: any) {
    return {
      success: false,
      message: 'Invalid credentials or API error',
      error: error.data || error.message,
    }
  }
})
