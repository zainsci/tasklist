import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import Button from "./Button"

// https://stackoverflow.com/questions/51503754/typescript-type-beforeinstallpromptevent
interface BeforeInstallPromptEvent extends Event {
	readonly platforms: Array<string>

	readonly userChoice: Promise<{
		outcome: "accepted" | "dismissed"
		platform: string
	}>
	prompt(): Promise<void>
}

declare global {
	interface WindowEventMap {
		beforeinstallprompt: BeforeInstallPromptEvent
		transitionend: BeforeInstallPromptEvent
	}
}

const InstallPwa = () => {
	const [supportsPWA, setSupportsPWA] = useState(false)
	const [promptInstall, setPromptInstall] = useState<BeforeInstallPromptEvent>()

	useEffect(() => {
		const eventHandler = (e: BeforeInstallPromptEvent) => {
			e.preventDefault()
			setSupportsPWA(true)
			setPromptInstall(e)
		}

		window.addEventListener("beforeinstallprompt", eventHandler)
		window.addEventListener("appinstalled", () => setSupportsPWA(false))
		return () => window.removeEventListener("transitionend", eventHandler)
	}, [])

	function handleClick() {
		if (!promptInstall) {
			return
		}

		promptInstall.prompt()
		setSupportsPWA(false)
	}

	return (
		<AnimatePresence exitBeforeEnter={true} onExitComplete={() => null}>
			{supportsPWA && (
				<motion.div
					variants={{
						opened: { translateY: 0 },
						closed: { translateY: "500px" },
						onexit: { translateY: "500px" },
					}}
					animate="opened"
					initial="closed"
					exit="onexit"
					className="w-screen absolute bottom-32 p-5 z-50 flex justify-center items-center"
					id="pwa-install"
				>
					<div className="min-w-fit bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-700 flex flex-col p-4 rounded-md shadow-md dark:shadow-neutral-800 gap-4">
						<div className="text-center">
							Install this app on your device? 🤔
						</div>
						<div className="w-full flex gap-4">
							<Button
								aria-label="Install as PWA?"
								onClick={handleClick}
								className="flex-1"
							>
								Install
							</Button>
							<Button
								variant="danger"
								onClick={() => setSupportsPWA(false)}
								className="flex-1"
							>
								Don't
							</Button>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default InstallPwa
