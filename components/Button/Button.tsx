import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"

const buttonVariants = cva(
	[
		"inline-flex",
		"items-center",
		"justify-center",
		"rounded-md",
		"text-sm",
		"font-medium",
		"transition-colors",
		"focus-visible:outline-none",
		"focus-visible:ring-2",
		"focus-visible:ring-ring",
		"focus-visible:ring-offset-2",
		"disabled:opacity-50",
		"disabled:pointer-events-none",
		"ring-offset-background",
		"active:translate-y-[1px]",
	],
	{
		variants: {
			variant: {
				primary:
					"bg-neutral-800 dark:bg-neutral-200 text-white dark:text-black hover:bg-neutral-800/90 dark:hover:bg-neutral-200/90",
				secondary:
					"bg-slate-200 dark:bg-neutral-800 hover:bg-slate-200/90 dark:hover:bg-neutral-800/90",
				danger:
					"bg-red-500 dark:bg-red-800 text-white hover:bg-red-500/80 dark:hover:bg-red-800/80",
				outline:
					"border border-neutral-300 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-accent-foreground",
				link: "underline-offset-4 hover:underline text-primary",
			},
			size: {
				xs: "h-6 px-2  rounded-md text-xs font-bold",
				sm: "h-7 px-2 rounded-md text-xs",
				md: "h-8 py-2 px-4",
				lg: "h-10 px-7 rounded-md",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		return (
			<button
				className={clsx(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		)
	}
)
Button.displayName = "Button"

export default Button
export { buttonVariants }
