import React, { useState } from "react"
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd"

import store from "@store/index"
import { changeView } from "@store/slice/settings"
import { updateList } from "@store/slice/task-list"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { Task, VIEW } from "@utils/types"

import Button from "@components/Button"
import Item from "@components/TaskItem"

const TaskList = () => {
	const [showAdd, setShowAdd] = useState(false)
	const taskList = useAppSelector((state) => state.TaskReducer.taskList)
	const dispatch = useAppDispatch()

	store.subscribe(() => {
		if (typeof window !== "undefined") {
			window.localStorage.setItem(
				"task-list",
				JSON.stringify(store.getState().TaskReducer.taskList)
			)
			window.localStorage.setItem(
				"archived-tasks",
				JSON.stringify(Array.from(store.getState().TaskReducer.archivedTasks))
			)
			window.localStorage.setItem(
				"settings",
				JSON.stringify(store.getState().SettingsReducer)
			)
		}
	})

	const reorder = (list: Task[], startIndex: number, endIndex: number) => {
		const result = Array.from(list)
		const [removed] = result.splice(startIndex, 1)
		result.splice(endIndex, 0, removed)

		return result
	}

	function onDragEnd(result: DropResult) {
		// dropped outside the list
		if (!result.destination) {
			return
		}

		const items = reorder(
			taskList,
			result.source.index,
			result.destination.index
		)

		dispatch(updateList(items))
	}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId="droppable">
				{(provided, snapshot) => (
					<div
						{...provided.droppableProps}
						ref={provided.innerRef}
						className="flex-1 flex flex-col h-full items-center rounded-md"
					>
						{taskList.length === 0 ? (
							<span className="block w-full py-2 text-center rounded-md border-2 border-dashed border-neutral-400 dark:border-neutral-600 select-none">
								Nothing To Do! 🤪
							</span>
						) : (
							taskList.map((task, index) => {
								return <Item key={task.id} task={task} index={index} />
							})
						)}

						{provided.placeholder}
						<Button
							className="mt-auto w-full"
							onClick={() => {
								dispatch(changeView(VIEW.EDITOR))
							}}
							disabled={taskList.length >= 6}
						>
							Add a new Task!
						</Button>
					</div>
				)}
			</Droppable>
		</DragDropContext>
	)
}

export default TaskList
