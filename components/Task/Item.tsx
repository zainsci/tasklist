import React, { useState } from "react"
import { Draggable } from "react-beautiful-dnd"

import { Task } from "@utils/types"
import { useAppDispatch } from "@store/hooks"
import { toggleTaskStatus } from "@store/slice/task-list"
import Checkbox from "@components/Checkbox"
import Detail from "./Details"

interface Props {
	task: Task
	index: number
}

const Item = ({ task, index }: Props) => {
	const dispatch = useAppDispatch()
	const [showDetail, setShowDetail] = useState(false)

	function handleCheck(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
		e.stopPropagation()

		dispatch(toggleTaskStatus(task.id))
	}

	function getBgColor() {
		return ""
		const colors = [
			"bg-red-300 hover:bg-red-200 ring-red-300 hover:ring-red-200",
			"bg-orange-300 hover:bg-orange-200 ring-orange-300 hover:ring-orange-200",
			"bg-yellow-300 hover:bg-yellow-200 ring-yellow-300 hover:ring-yellow-200",
			"bg-green-300 hover:bg-green-200 ring-green-300 hover:ring-green-200",
			"bg-cyan-300 hover:bg-cyan-200 ring-cyan-300 hover:ring-cyan-200",
			"bg-blue-300 hover:bg-blue-200 ring-blue-300 hover:ring-blue-200",
		]
		return colors[index]
	}

	return (
		<div className="w-full">
			<Detail
				task={task}
				showDetail={showDetail}
				setShowDetail={setShowDetail}
			/>

			<Draggable key={task.id} draggableId={task.id} index={index}>
				{(provided, snapshot) => (
					<div
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						className={`w-full flex my-1 justify-center items-center rounded-md px-4 py-2 text-[0.8125rem] leading-5 ring-2 bg-white ring-blue-400 ${getBgColor()}`}
						onClick={() => setShowDetail(!showDetail)}
					>
						{/* <span className="">
              <Menu />
            </span>
             */}
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
