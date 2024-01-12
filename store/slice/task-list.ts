import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Task } from "@utils/types"

interface TaskListState {
	taskList: Task[]
	archivedTasks: Map<string, Task>
	currentTask: Task | null
}

function getTasksFromLS() {
	if (typeof window !== "undefined") {
		return JSON.parse(window.localStorage.getItem("task-list") || "[]")
	}

	return []
}

function getArchivedTasksFromLS() {
	let archivedTasks = new Map()
	if (typeof window !== "undefined") {
		archivedTasks = new Map(
			JSON.parse(window.localStorage.getItem("archived-tasks") || "[]")
		)
	}

	return archivedTasks
}

const initialState: TaskListState = {
	taskList: getTasksFromLS(),
	archivedTasks: getArchivedTasksFromLS(),
	currentTask: null,
}

export const counterSlice = createSlice({
	name: "TaskList",
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<Task>) => {
			state.taskList.push(action.payload)
		},
		removeTask: (state, action: PayloadAction<string>) => {
			const newList = state.taskList.filter(
				(task) => task.id !== action.payload
			)
			state.taskList = newList
		},
		toggleTaskStatus: (state, action: PayloadAction<string>) => {
			const newList = state.taskList.map((task) => {
				if (task.id === action.payload) {
					task.completed = !task.completed
				}

				return task
			})

			state.taskList = newList
		},
		updateList: (state, action: PayloadAction<Task[]>) => {
			state.taskList = action.payload
		},
		showTask(state, action: PayloadAction<string>) {
			const filterTask = state.taskList.filter(
				(item) => item.id === action.payload
			)
			if (filterTask.length > 0) state.currentTask = filterTask[0]
		},

		updateArchivedTasks: (
			state,
			action: PayloadAction<{
				tasks: Task[]
				archive: Set<Task>
			}>
		) => {
			const newArchive = state.archivedTasks

			state.taskList = action.payload.tasks
			action.payload.archive.forEach((task) => {
				if (!newArchive.has(task.id)) newArchive.set(task.id, task)
			})

			state.archivedTasks = newArchive
		},
	},
})

export const {
	addTask,
	removeTask,
	toggleTaskStatus,
	updateList,
	showTask,
	updateArchivedTasks,
} = counterSlice.actions

export default counterSlice.reducer
