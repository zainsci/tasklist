import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Task } from "@utils/types"

interface TaskList {
	taskList: Task[]
	currentTask: Task | null
}

function getLocalStorageState() {
	if (typeof window !== "undefined") {
		return JSON.parse(window.localStorage.getItem("task-list") || "[]")
	}

	return []
}

const initialState: TaskList = {
	taskList: getLocalStorageState(),
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
	},
})

export const { addTask, removeTask, toggleTaskStatus, updateList, showTask } =
	counterSlice.actions

export default counterSlice.reducer
