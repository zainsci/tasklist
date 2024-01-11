import { useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"

import {
	Github,
	Info,
	Home,
	HomeFill,
	InfoFill,
	Sun,
	Moon,
	Timer,
	TimerFill,
	Archive,
	ArchiveFill,
	InstallMobile,
	InstallDesktop,
} from "@components/icons"

// https://stackoverflow.com/questions/51503754/typescript-type-beforeinstallpromptevent
interface BeforeInstallPromptEvent extends Event {
	readonly platforms: Array<string>

	readonly userChoice: Promise<{
		outcome: "accepted" | "dismissed"
		platform: string
	}>
	prompt(): Promise<void>
}

const navLinks = [
	{
		name: "home",
		href: "/",
		emptyIcon: <Home />,
		fillIcon: <HomeFill />,
	},
	{
		name: "timer",
		href: "/timer",
		emptyIcon: <Timer />,
		fillIcon: <TimerFill />,
	},
	{
		name: "archive",
		href: "/archive",
		emptyIcon: <Archive />,
		fillIcon: <ArchiveFill />,
	},
	{
		name: "about",
		href: "/about",
		emptyIcon: <Info />,
		fillIcon: <InfoFill />,
	},
]

export default function Navbar() {
	const [activePage, setActivePage] = useState("home")
	const [isMobile, setMobile] = useState(false)
	const [supportsPWA, setSupportsPWA] = useState(false)
	const [promptInstall, setPromptInstall] = useState<BeforeInstallPromptEvent>()
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		switch (window.location.pathname) {
			case "/":
				setActivePage("home")
				break
			case "/timer":
				setActivePage("timer")
				break
			case "/about":
				setActivePage("about")
				break
		}

		window.innerWidth < 640 ? setMobile(true) : setMobile(false)
	}, [])

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

	function installPWA() {
		if (!promptInstall) {
			return
		}

		promptInstall.prompt()
	}

	function toggleTheme() {
		if (theme === "dark") setTheme("light")
		if (theme === "light") setTheme("dark")
		else setTheme("light")
	}

	return (
		<nav className="h-[60px] sm:min-h-full sm:w-[60px] absolute sm:relative bottom-0 left-0 right-0">
			<ul className="sm:h-full flex justify-around sm:justify-start sm:flex-col w-full sm:w-auto bg-white dark:bg-neutral-900 p-2 gap-2 border-t-2 sm:border-r-2 sm:border-t-0 border-slate-200 dark:border-neutral-700">
				{navLinks.map((link) => (
					<li onClick={() => setActivePage(link.name)} key={link.name}>
						<Link href={link.href}>
							<a
								className="block p-2 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
								aria-label="Homepage"
							>
								{activePage === link.name ? link.fillIcon : link.emptyIcon}
							</a>
						</Link>
					</li>
				))}
				<li>
					<a
						className="block p-2 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/zainsci/tasklist"
						aria-label="GitHub repo"
					>
						<Github />
					</a>
				</li>

				{supportsPWA && (
					<li className="mt-auto hidden sm:block">
						<button
							className="block p-2 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
							onClick={installPWA}
						>
							{isMobile ? <InstallMobile /> : <InstallDesktop />}
						</button>
					</li>
				)}

				<li className={`hidden sm:block ${supportsPWA ? "" : "mt-auto"}`}>
					<button
						className="block p-2 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
						onClick={toggleTheme}
					>
						{theme === "dark" && <Sun />}
						{theme === "light" && <Moon />}
					</button>
				</li>
			</ul>
		</nav>
	)
}
