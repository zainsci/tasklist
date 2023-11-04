import React from "react"
import { Draggable } from "react-beautiful-dnd"

import { Task, VIEW } from "@utils/types"
import { useAppDispatch } from "@store/hooks"
import { showTask, toggleTaskStatus } from "@store/slice/task-list"
import Checkbox from "@components/Checkbox"
import { changeView } from "@store/slice/settings"

interface Props {
	task: Task
	index: number
}

const Item = ({ task, index }: Props) => {
	const dispatch = useAppDispatch()

	function handleCheck(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
		e.stopPropagation()

		dispatch(toggleTaskStatus(task.id))
	}

	function previewTask(id: string) {
		dispatch(showTask(id))
		dispatch(changeView(VIEW.PREVIEW))
	}

	return (
		<div className="w-full">
			<Draggable key={task.id} draggableId={task.id} index={index}>
				{(provided, snapshot) => (
					<div
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						className={`w-full flex my-1 justify-center items-center rounded-md px-4 py-2 text-[0.8125rem] leading-5 bg-white dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-700`}
						onClick={() => previewTask(task.id)}
					>
						<span
							className={`r-2 flex items-center font-semibold ${
								task.completed && "line-through"
							}`}
						>
							{task.title}
						</span>
						<span onClick={handleCheck} className="ml-auto cursor-pointer">
							<Checkbox checked={task.completed} />
						</span>
					</div>
				)}
			</Draggable>
		</div>
	)
}

export default Item
