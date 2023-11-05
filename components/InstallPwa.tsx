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
					className="w-full absolute bottom-32 p-5 z-50 flex justify-center items-center"
					id="pwa-install"
				>
					<div className="w-fit bg-white dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-600 flex flex-col p-4 rounded-md shadow-xl dark:shadow-neutral-700 gap-2">
						<div>Install this app on your device? 🤔</div>
						<div className="w-full flex gap-2">
							<Button aria-label="Install as PWA?" onClick={handleClick}>
								Install
							</Button>
							<Button intent="danger" onClick={() => setSupportsPWA(false)}>
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
