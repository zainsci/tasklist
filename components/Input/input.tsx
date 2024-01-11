import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

const input = cva(
	[
		"block",
		"rounded-md",
		"border-2",
		"border-neutral-300",
		"dark:border-neutral-600",
		"placeholder-gray-400",
		"focus:ring-1",
		"focus:ring-neutral-300",
		"dark:focus:ring-neutral-600",
		"focus:outline-none",
		"disabled:opacity-40",
	],
	{
		variants: {
			size: {
				small: ["text-sm", "w-40", "px-2", "py-1"],
				medium: ["text-sm", "w-80", "px-4", "py-2"],
				large: ["text-lg", "w-full", "px-6", "py-3"],
			},
		},
		defaultVariants: {
			size: "medium",
		},
	}
)

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement>,
		VariantProps<typeof input> {
	invalid?: boolean
}

const Input: React.FC<InputProps> = ({
	className,
	size,
	invalid,
	...props
}) => <input className={input({ className, size })} {...props} />

export default Input
