interface ApiResponse<T> {
  success: any
  status: string
  message: string
  data: T
}

export type { ApiResponse }
