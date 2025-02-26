interface Task {
	id?: string
	title?: string
	note?: string
	addToCurrentDate?: boolean
	remind?: string
	repeat?: string
	dueDate?: string
	completed?: boolean
	dateCreated?: string
	dateCompleted?: string
}

export type { Task }
