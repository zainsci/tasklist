import React from "react"
import Logo from "./icons/Logo"

const Header = () => {
	return (
		<header className="h-[60px] bg-white dark:bg-neutral-800 absolute top-0 left-0 right-0 sm:relative p-4 border-b-2 border-slate-200 dark:border-neutral-700">
			<div className="flex justify-between">
				<h1 className="font-bold m-0 flex justify-start items-center gap-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M0.595261 3.73996C0 5.02715 0 6.68476 0 10C0 13.3152 0 14.9729 0.595261 16.26C1.2372 17.6482 2.35183 18.7628 3.73996 19.4047C5.02714 20 6.68475 20 9.99997 20H10H10C13.3152 20 14.9729 20 16.26 19.4047C17.6482 18.7628 18.7628 17.6482 19.4047 16.26C20 14.9729 20 13.3152 20 10V10V9.99997C20 6.68475 20 5.02714 19.4047 3.73996C18.7628 2.35183 17.6482 1.2372 16.26 0.595261C14.9729 0 13.3152 0 10 0C6.68476 0 5.02715 0 3.73996 0.595261C2.35183 1.2372 1.2372 2.35183 0.595261 3.73996ZM11.0156 13.4704L16.5399 7.94615L14.4683 5.87455L8.94402 11.3988L5.49135 7.94615L3.41975 10.0177L8.94402 15.542L11.0156 13.4704Z"
							fill="currentColor"
						/>
					</svg>
					<span>TaskList</span>
				</h1>
			</div>
		</header>
	)
}

export default Header
