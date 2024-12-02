import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  console.log("Login API: params -> ", body)

  // Example: simple validation for email and password
  const { email, password } = body
  if (!email || !password) {
    return {
      statusCode: 400,
      message: 'Email and password are required.',
    }
  }

  if (email === 'user@example.com' && password === 'password123') {
    return {
      statusCode: 200,
      message: 'Login successful',
    }
  }

  return {
    statusCode: 401,
    message: 'Invalid email or password.',
  }
})
