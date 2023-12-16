import Button from "@components/Button"
import Container from "@components/Container"
import { Play, Replay, Settings, Stop } from "@components/icons"
import { useEffect, useRef, useState } from "react"

export default function TimerPage() {
	const [seconds, setSeconds] = useState(5)
	const [isPlaying, setIsPlaying] = useState(false)
	const [currTimer, setCurrTimer] = useState(5)

	const firstStart = useRef(true)
	const tick = useRef<ReturnType<typeof setInterval> | null>(null)

	useEffect(() => {
		if (firstStart.current) {
			firstStart.current = !firstStart.current
			return
		}

		if (isPlaying) {
			tick.current = setInterval(() => {
				setSeconds((seconds) => {
					console.log(seconds)
					if (seconds <= 1) {
						setIsPlaying(false)
						clearInterval(tick.current)
					}

					return seconds - 1
				})
			}, 1000)
		} else {
			clearInterval(tick.current)
		}

		return () => clearInterval(tick.current)
	}, [isPlaying])

	function setTimer(mins: number) {
		setIsPlaying(false)
		setSeconds(mins * 60)
		setCurrTimer(mins * 60)
	}

	function restartTimer() {
		setIsPlaying(false)
		setSeconds(currTimer)
	}

	function secToMin(seconds: number) {
		return `${Math.floor(seconds / 60) <= 9 ? "0" : ""}${Math.floor(
			seconds / 60
		)}:${seconds % 60 <= 9 ? "0" : ""}${seconds % 60}`
	}

	function startTimer() {
		setIsPlaying(true)
	}
	function stopTimer() {
		setIsPlaying(false)
	}

	return (
		<Container>
			<div className="flex-1 flex w-full">
				<div className="w-full p-4">
					<div className="w-full flex justify-between items-center">
						<h3 className="h3">Timer</h3>
						<Button intent="primary" variant="ghost" className="w-fit px-1">
							<Settings height={16} />
						</Button>
					</div>

					<div className="flex gap-2 bg-neutral-300 dark:bg-neutral-700 rounded-md p-1 text-xs font-bold">
						<div className="hidden sm:flex gap-2 items-center">
							<button
								className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-md select-none cursor-pointer active:translate-y-[1px]"
								onClick={isPlaying ? stopTimer : startTimer}
							>
								{isPlaying ? <Stop height={16} /> : <Play height={16} />}
							</button>
							<button
								className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-md select-none cursor-pointer active:translate-y-[1px]"
								onClick={restartTimer}
							>
								<Replay height={16} />
							</button>
						</div>
						<ul className="flex-1 flex gap-2 sm:justify-end justify-between items-center">
							{[5, 10, 20, 30].map((time) => (
								<li
									className={`px-3 py-2 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-md select-none cursor-pointer active:translate-y-[1px] ${
										currTimer / 60 === time
											? "font-bold"
											: "font-medium text-neutral-500 dark:text-neutral-400"
									}`}
									onClick={() => setTimer(time)}
								>
									{time} Min
								</li>
							))}
						</ul>
					</div>
					<div className="mt-6">
						<div className="text-8xl sm:text-9xl font-bold text-center">
							{secToMin(seconds)}
						</div>
						<div className="w-full flex sm:hidden gap-2 items-center justify-center mt-8">
							<button
								className="px-6 py-2 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-md select-none cursor-pointer active:translate-y-[1px]"
								onClick={isPlaying ? stopTimer : startTimer}
							>
								{isPlaying ? <Stop height={32} /> : <Play height={32} />}
							</button>
							<button
								className="px-6 py-2 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-md select-none cursor-pointer active:translate-y-[1px]"
								onClick={restartTimer}
							>
								<Replay height={32} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}
