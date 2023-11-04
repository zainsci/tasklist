import { useEffect, useState } from "react"
import Link from "next/link"

import {
	Github,
	Info,
	Home,
	HomeFill,
	InfoFill,
	Plus,
	Sun,
	Moon,
} from "@components/icons"
import Button from "./Button"
import { useTheme } from "next-themes"

export default function Navbar() {
	const [activePage, setActivePage] = useState("home")
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		switch (window.location.pathname) {
			case "/tasklist":
				setActivePage("home")
				break
			case "/tasklist/about":
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
		<ul className="h-[60px] flex justify-around sm:justify-start sm:flex-col w-full sm:w-auto bg-white dark:bg-neutral-900 p-2 gap-2 border-t-2 sm:border-r-2 sm:border-t-0 border-slate-200 dark:border-neutral-700">
			<li>
				<Link href="/">
					<a
						className="block p-2 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
						aria-label="Homepage"
					>
						{activePage === "home" ? <HomeFill /> : <Home />}
					</a>
				</Link>
			</li>
			<li>
				<Link href="/about">
					<a
						className="block p-2 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
						aria-label="About page"
					>
						{activePage === "about" ? <InfoFill /> : <Info />}
					</a>
				</Link>
			</li>
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
	)
}
