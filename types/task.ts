interface Task {
  id?: string
  title: string
  type?: string
  note?: string
  important?: boolean
  add_to_current_date?: boolean
  current_date?: string
  remind?: string
  repeat?: string
  due_date?: string
  completed?: boolean
  date_created?: string
  date_completed?: string
}

export type { Task }
