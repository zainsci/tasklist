import Container from "@components/Container"
import EditorView from "@components/Editor"
import PreviewView from "@components/Preview"
import TaskList from "@components/TaskList"
import { useAppSelector } from "@store/hooks"
import { VIEW } from "@utils/types"
import { useEffect, useState } from "react"

export default function Home() {
	const currentView = useAppSelector((state) => state.SettingsReducer.mainView)
	const [isMobile, setMobile] = useState(false)

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
			<div className="flex-1 flex w-full min-h-full">
				<div className="sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] flex-1 flex flex-col w-full border-r-2 border-slate-200 dark:border-neutral-700 bg-slate-100 dark:bg-neutral-800 p-4 overflow-y-auto">
					<h1 className="h2">Tasks</h1>
					<TaskList />
				</div>
				<div
					className={`min-w-[300px] flex-1 sm:flex flex-col gap-4 duration-1000 ${
						isMobile &&
						"absolute -right-full z-50 w-full h-[calc(100%-120px)] bg-white"
					} ${
						isMobile &&
						(currentView === VIEW.EDITOR || currentView === VIEW.PREVIEW)
							? "-translate-x-full "
							: ""
					} ${isMobile && currentView === VIEW.NONE ? "translate-x-full" : ""}`}
				>
					{currentView === VIEW.EDITOR && <EditorView />}
					{currentView === VIEW.PREVIEW && <PreviewView />}
					{currentView === VIEW.NONE && (
						<div className="w-full h-full flex justify-center items-center select-none">
							<div className="h1 text-neutral-500">TaskList</div>
						</div>
					)}
				</div>
			</div>
		</Container>
	)
}
