import React from "react"
import classNames from "classnames"

import Header from "@components/Header"
import Footer from "@components/Footer"
import InstallPwa from "./InstallPwa"
import Navbar from "./Navbar"

interface Props {
	children?: React.ReactNode
	className?: string
}

const Container = ({ children, className }: Props) => {
	return (
		<div className="w-full min-h-screen overflow-hidden relative flex flex-col bg-center sm:w-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
			<Header />
			<InstallPwa />

			<main
				className={classNames(
					className,
					"flex flex-col-reverse sm:flex-row flex-1 h-full overflow-hidden"
				)}
			>
				<Navbar />

				{children}

				<div className="hidden sm:flex flex-col w-16 max-w-16 px-2 py-4 gap-2 border-l-2 border-slate-200 dark:border-neutral-700" />
			</main>

			{/* <Footer /> */}
		</div>
	)
}

export default Container
