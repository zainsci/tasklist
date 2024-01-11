import { useAppDispatch, useAppSelector } from "@store/hooks"
import Button from "./Button"
import { Trash } from "./icons"
import { removeTask, showTask } from "@store/slice/task-list"
import { changeView } from "@store/slice/settings"
import { VIEW } from "@utils/types"
import parseMarkdown from "@utils/markdown"

export default function PreviewView() {
	const dispatch = useAppDispatch()
	const { currentTask: task } = useAppSelector((s) => s.TaskReducer)

	function deleteTask() {
		if (task !== null) {
			dispatch(removeTask(task.id))
			dispatch(changeView(VIEW.NONE))
		}
	}

	if (task) {
		return (
			<div className="flex flex-col h-full p-4">
				<div className="flex-1">
					<h1 className="h2">{task.title}</h1>
					<div className="flex gap-1 text-xs text-neutral-500 dark:text-neutral-400 mb-4">
						<span>
							{new Date(task.date).toLocaleString("en-GB", {
								day: "2-digit",
								month: "short",
								year: "numeric",
								hour: "numeric",
								minute: "numeric",
								second: "numeric",
								hour12: true,
							})}
						</span>
						・
						<span>
							{task.completed ? (
								<span className="font-bold text-green-600">Completed</span>
							) : (
								<span className="font-bold text-red-600">Not Completed</span>
							)}
						</span>
					</div>
					<p
						dangerouslySetInnerHTML={{
							__html: parseMarkdown(task.description),
						}}
					/>
				</div>
				<div className="flex w-full justify-end gap-4">
					<Button variant="danger" className="w-20" onClick={deleteTask}>
						<Trash />
					</Button>

					<Button
						variant="secondary"
						className="w-20"
						onClick={() => dispatch(changeView(VIEW.NONE))}
					>
						Close
					</Button>
				</div>
			</div>
		)
	}

	return <div></div>
}
