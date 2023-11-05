import React from "react"
import Image from "next/image"
import { basePath } from "config"

const Header = () => {
	return (
		<header className="h-[60px] bg-white dark:bg-neutral-800 absolute top-0 left-0 right-0 sm:relative p-4 border-b-2 border-slate-200 dark:border-neutral-700">
			<div className="flex justify-between text-blue-600">
				<h1 className="font-bold m-0 flex justify-start items-center gap-1">
					<Image
						src={`${basePath}/icon.png`}
						width={20}
						height={20}
						alt="tasklist logo"
					/>
					<span>TaskList</span>
				</h1>
			</div>
		</header>
	)
}

export default Header
