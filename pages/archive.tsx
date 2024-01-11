import Container from "@components/Container"
import { useAppSelector } from "@store/hooks"
import { useContext } from "react"

export default function ArchivePage() {
	const archivedTasks = useAppSelector(
		(state) => state.TaskReducer.archivedTasks
	)
	console.log("archivedTasks", archivedTasks)

	return (
		<Container title="Archive">
			<div className="flex-1">
				<ul className="p-6 grid grid-cols-3 gap-4">
					{[...archivedTasks].map(([key, task]) => (
						<li className="px-4 py-3 flex flex-col bg-neutral-200 dark:bg-neutral-800 rounded-md cursor-pointer select-none">
							<h3 className="text-xl">{task.title}</h3>
							<p className="text-sm">{task.title.slice(0, 25)}</p>
						</li>
					))}
				</ul>
			</div>
		</Container>
	)
}
