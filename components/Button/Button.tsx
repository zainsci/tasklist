import React from "react"

interface IProps extends React.ComponentProps<"button"> {
  children: React.ReactNode
  color?: "blue" | "red" | "green"
  variant?: "filled" | "outline" | "light"
  className?: string
}

const Button = ({
  children,
  color = "blue",
  variant = "filled",
  className = "",
  ...rest
}: IProps) => {
  function getClassNames() {
    const colorGroup = {
      red: {
        color: "text-red-500",
        bg: "bg-red-500",
        border: "border-red-500",
      },
      green: {
        color: "text-green-500",
        bg: "bg-green-500",
        border: "border-green-500",
      },
      blue: {
        color: "text-blue-500",
        bg: "bg-blue-500",
        border: "border-blue-500",
      },
    }
    const classNames = [
      "h-9",
      "rounded-md",
      "text-center",
      "font-bold",
      "text-sm",
      "active:translate-y-[1px]",
      "w-full",
      "shadow-sm",
    ]

    const selectedColor = colorGroup[color] || colorGroup.blue

    switch (variant) {
      case "filled":
        classNames.push(
          "text-white",
          "border",
          selectedColor.border,
          selectedColor.bg
        )
        break
      case "outline":
        classNames.push(
          "bg-opacity-0",
          "border",
          selectedColor.border,
          selectedColor.color
        )
        break
      case "light":
        classNames.push(
          "bg-opacity-10",
          "border-0",
          selectedColor.bg,
          selectedColor.color
        )
        break
    }

    classNames.push(className)

    return classNames.join(" ")
  }

  return (
    <button className={getClassNames()} {...rest}>
      {children}
    </button>
  )
}

export default Button
