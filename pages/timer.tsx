import { useEffect, useRef, useState } from "react"

import { useAppDispatch, useAppSelector } from "@store/hooks"
import { changeTimer } from "@store/slice/settings"
import Container from "@components/Container"
import Button from "@components/Button"
import Modal from "@components/Modal"
import Input from "@components/Input/input"
import { Play, Replay, Settings, Stop } from "@components/icons"

export default function TimerPage() {
	const timer = useAppSelector((state) => state.SettingsReducer.timer)
	const dispatch = useAppDispatch()

	const [seconds, setSeconds] = useState(timer)
	const [currSeconds, setCurrSeconds] = useState(timer)
	const [isPlaying, setIsPlaying] = useState(false)
	const [customTime, setCustomTime] = useState(timer)
	const [customTimeModal, setCustomTimeModal] = useState(false)

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
					if (seconds <= 1) {
						setIsPlaying(false)
						clearInterval(tick.current as unknown as number)
					}

					return seconds - 1
				})
			}, 1000)
		} else {
			clearInterval(tick.current as unknown as number)
		}

		return () => clearInterval(tick.current as unknown as number)
	}, [isPlaying])

	function setTimer(mins: number) {
		setIsPlaying(false)
		dispatch(changeTimer(mins * 60))
		setSeconds(mins * 60)
		setCurrSeconds(mins * 60)
	}

	function restartTimer() {
		setIsPlaying(false)
		setSeconds(currSeconds)
	}

	function startTimer() {
		setIsPlaying(true)
	}

	function stopTimer() {
		setIsPlaying(false)
	}

	function setCutomTimer() {
		setTimer(customTime)
		setCustomTimeModal(false)
	}

	function secToMin(seconds: number) {
		return `${Math.floor(seconds / 60) <= 9 ? "0" : ""}${Math.floor(
			seconds / 60
		)}:${seconds % 60 <= 9 ? "0" : ""}${seconds % 60}`
	}

	return (
		<Container title="Timer">
			<div className="flex-1 flex w-full relative">
				<div className="w-full p-4">
					<div className="w-full flex justify-between items-center">
						<h3 className="h3">Timer</h3>
						<Button variant="secondary" className="w-fit px-1">
							<Settings height={16} />
						</Button>
					</div>

					<div className="flex gap-2 bg-neutral-300 dark:bg-neutral-700 rounded-md p-1 text-xs font-bold">
						<div className="hidden sm:flex gap-2 items-center">
							<Button
								variant="secondary"
								size="sm"
								onClick={isPlaying ? stopTimer : startTimer}
							>
								{isPlaying ? <Stop height={16} /> : <Play height={16} />}
							</Button>
							<Button variant="secondary" size="sm" onClick={restartTimer}>
								<Replay height={16} />
							</Button>
						</div>
						<ul className="flex-1 flex gap-2 sm:justify-end justify-between items-center">
							{[5, 10, 20, 30].map((time) => (
								<li key={time}>
									<Button
										variant="secondary"
										size="sm"
										className={`${
											currSeconds / 60 === time
												? "font-bold"
												: "font-medium text-neutral-500 dark:text-neutral-400"
										}`}
										onClick={() => {
											setTimer(time)
											setCustomTime(0)
										}}
									>
										{time} Min
									</Button>
								</li>
							))}
							<li>
								<Button
									variant="secondary"
									size="sm"
									className={`${
										customTime > 0
											? "font-bold"
											: "font-medium text-neutral-500 dark:text-neutral-400"
									}`}
									onClick={() => setCustomTimeModal(true)}
								>
									Custom
								</Button>
							</li>
							<Modal
								opened={customTimeModal}
								title="Time in Minutes!"
								onClose={() => setCustomTimeModal(false)}
								className="w-80"
							>
								<div className="flex flex-col gap-4">
									<Input
										id="custom-time"
										placeholder="Time in Minutes!"
										value={customTime}
										onChange={(e) => setCustomTime(Number(e.target.value))}
										type="number"
										min="0"
										className="w-auto"
									/>
									<Button onClick={setCutomTimer}>Submit</Button>
								</div>
							</Modal>
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
