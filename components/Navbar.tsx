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
} from "@components/icons"

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
		name: "about",
		href: "/about",
		emptyIcon: <Info />,
		fillIcon: <InfoFill />,
	},
]

export default function Navbar() {
	const [activePage, setActivePage] = useState("home")
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
	}, [])

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

				<li className="mt-auto hidden sm:block">
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
