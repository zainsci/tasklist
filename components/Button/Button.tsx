import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

const button = cva(
	[
		"h-8",
		"rounded-md",
		"text-center",
		"font-bold",
		"text-sm",
		"active:translate-y-[1px]",
		"w-full",
		"shadow-sm",
		"border-2",
		"flex",
		"justify-center",
		"items-center",
		"hover:opacity-90",
		"disabled:opacity-40",
	],
	{
		variants: {
			intent: {
				primary: [
					"text-white",
					"bg-neutral-900",
					"border-neutral-900",
					"dark:bg-neutral-200",
					"dark:border-neutral-200",
					"dark:text-neutral-900",
				],
				secondary: ["text-white", "bg-green-500", "border-green-500"],
				danger: ["text-white", "bg-red-500", "border-red-500"],
			},
			size: {
				small: ["text-sm"],
				medium: ["text-sm"],
			},
			variant: {
				outline: ["bg-opacity-0"],
				filled: ["text-white"],
				ghost: [
					"bg-opacity-20",
					"border-opacity-20",
					"dark:bg-opacity-20",
					"dark:border-opacity-20",
				],
			},
		},
		compoundVariants: [
			{
				intent: ["primary", "secondary", "danger"],
				variant: "filled",
			},
			{
				intent: ["primary", "secondary", "danger"],
				variant: "outline",
			},
			{
				intent: "primary",
				variant: "ghost",
				className: ["text-neutral-800", "dark:text-neutral-300"],
			},
			{
				intent: "secondary",
				variant: "ghost",
				className: ["text-green-700", "dark:text-green-400"],
			},
			{
				intent: "danger",
				variant: "ghost",
				className: ["text-red-700", "dark:text-red-400"],
			},
		],
		defaultVariants: {
			intent: "primary",
			size: "medium",
			variant: "filled",
		},
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof button> {}

const Button: React.FC<ButtonProps> = ({
	className,
	intent,
	variant,
	size,
	...props
}) => (
	<button className={button({ intent, size, variant, className })} {...props} />
)

export default Button
