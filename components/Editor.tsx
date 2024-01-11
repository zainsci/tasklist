import { useAppDispatch, useAppSelector } from "@store/hooks"
import { addTask } from "@store/slice/task-list"
import { useEffect, useState } from "react"
import Button from "./Button"
import { changeView, settingSlice } from "@store/slice/settings"
import { VIEW } from "@utils/types"

export default function EditorView() {
	const taskList = useAppSelector((s) => s.TaskReducer.taskList)
	const dispatch = useAppDispatch()
	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const [validate, setValidate] = useState({
		title: false,
		description: false,
	})

	const [isMobile, setMobile] = useState(false)

	useEffect(() => {
		window.addEventListener(
			"resize",
			(e: UIEvent) => {
				if ((e.currentTarget as any).innerWidth <= 640) {
					setMobile(true)
				} else {
					setMobile(false)
				}
			},
			true
		)
	}, [])

	function handleSubmit() {
		function resetErrors() {
			setValidate({
				title: false,
				description: false,
			})
		}

		if (title === "") {
			setValidate({
				...validate,
				title: true,
			})
			return setTimeout(() => resetErrors(), 3000)
		}
		if (description === "") {
			setValidate({
				...validate,
				description: true,
			})
			return setTimeout(() => resetErrors(), 3000)
		}

		dispatch(
			addTask({
				id: Math.random().toString(36).substring(2, 6),
				title,
				description,
				completed: false,
				date: new Date(),
			})
		)

		setTitle("")
		setDescription("")
		if (taskList.length >= 5) {
			dispatch(changeView(VIEW.NONE))
		}
		if (isMobile) {
			dispatch(changeView(VIEW.NONE))
		}
	}

	return (
		<div className="flex flex-col gap-4 p-4">
			<input
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				type="text"
				name="title"
				placeholder="Task title here..."
				className={`block w-full px-3 py-2 sm:text-sm rounded-md border-2 border-neutral-300 dark:border-neutral-600 placeholder-gray-400 focus:ring-1 focus:ring-neutral-300 dark:focus:ring-neutral-600 focus:outline-none ${
					validate.title && "border-red-400 dark:border-red-600"
				}`}
			/>

			<textarea
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				name="description"
				id="description"
				placeholder="Task description here..."
				className={`block w-full px-3 py-2 sm:text-sm rounded-md border-2 border-neutral-300 dark:border-neutral-600 placeholder-gray-400 focus:ring-1 focus:ring-neutral-300 dark:focus:ring-neutral-600 focus:outline-none ${
					validate.description && "border-red-400 dark:border-red-600"
				} min-h-[120px]`}
			></textarea>

			<div className="flex gap-4">
				<Button onClick={handleSubmit} className="w-20">
					Submit
				</Button>
				<Button
					onClick={() => dispatch(changeView(VIEW.NONE))}
					className="w-20"
					variant="outline"
				>
					Close
				</Button>
			</div>
		</div>
	)
}
