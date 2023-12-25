import { useEffect, useState } from "react"

import { useAppDispatch, useAppSelector } from "@store/hooks"
import { updateArchivedTasks } from "@store/slice/task-list"
import { Task, VIEW } from "@utils/types"
import Container from "@components/Container"
import EditorView from "@components/Editor"
import PreviewView from "@components/Preview"
import TaskList from "@components/TaskList"

export default function Home() {
	const [isMobile, setMobile] = useState(false)
	const {
		TaskReducer: { taskList, archivedTasks },
		SettingsReducer: { tasksArchived, mainView },
	} = useAppSelector((state) => state)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (!tasksArchived) {
			const yesterdaysCompletedTasks: Set<Task> = new Set()
			const leftOutTasks: Task[] = []

			taskList.forEach((task) => {
				if (
					new Date(task.date).getDate() <= new Date().getDate() - 1 &&
					task.completed
				)
					yesterdaysCompletedTasks.add(task)
				else leftOutTasks.push(task)

				// console.log(task.title)
				// leftOutTasks = taskList.filter(task => )
			})
			dispatch(
				updateArchivedTasks({
					tasks: leftOutTasks,
					archive: yesterdaysCompletedTasks,
				})
			)

			console.log("yesterdaysCompletedTasks", yesterdaysCompletedTasks)
			console.log("leftOutTasks", leftOutTasks)
		}
	}, [])

	useEffect(() => {
		window.addEventListener(
			"resize",
			(e: UIEvent) => {
				if ((e.currentTarget as any).innerWidth < 640) {
					setMobile(true)
				} else {
					setMobile(false)
				}
			},
			true
		)
	}, [])

	return (
		<Container>
			<div className="flex-1 flex w-full">
				<div className="sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] flex-1 flex flex-col w-full border-r-2 border-slate-200 dark:border-neutral-700 bg-slate-100 dark:bg-neutral-800 p-4">
					<h1 className="h2">Tasks</h1>
					<TaskList />
				</div>
				<div
					className={`min-w-[300px] flex-1 sm:flex flex-col gap-4 duration-1000 ${
						isMobile &&
						"absolute -right-full z-50 w-full h-[calc(100%-120px)] bg-white"
					} ${
						isMobile && (mainView === VIEW.EDITOR || mainView === VIEW.PREVIEW)
							? "-translate-x-full "
							: ""
					} ${isMobile && mainView === VIEW.NONE ? "translate-x-full" : ""}`}
				>
					{mainView === VIEW.EDITOR && <EditorView />}
					{mainView === VIEW.PREVIEW && <PreviewView />}
					{mainView === VIEW.NONE && (
						<div className="w-full h-full flex justify-center items-center select-none">
							<div className="h1 text-neutral-500">TaskList</div>
						</div>
					)}
				</div>
			</div>
		</Container>
	)
}
