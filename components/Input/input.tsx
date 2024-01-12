import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

const input = cva([
	"flex",
	"w-full",
	"px-3",
	"py-2",
	"text-sm",
	"rounded-md",
	"border-2",
	"border-neutral-300",
	"dark:border-neutral-600",
	"placeholder-gray-400",
	"focus-visible:ring-1",
	"focus-visible:ring-neutral-300",
	"dark:focus-visible:ring-neutral-600",
	"focus:outline-none",
	"disabled:opacity-40",
	"disabled:cursor-not-allowed",
])

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement>,
		VariantProps<typeof input> {}

const Input: React.FC<InputProps> = ({ className, size, ...props }) => (
	<input className={input({ className })} {...props} />
)

export default Input
