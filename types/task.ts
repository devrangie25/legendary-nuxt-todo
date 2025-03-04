interface Task {
  id?: string
  title?: string
  type?: string
  note?: string
  important?: boolean
  addToCurrentDate?: boolean
  currentDate?: string
  remind?: string
  repeat?: string
  dueDate?: string
  completed?: boolean
  dateCreated?: string
  dateCompleted?: string
}

export type { Task }
