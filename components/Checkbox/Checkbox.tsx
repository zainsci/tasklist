import React from "react"

import { Square, CheckboxFill } from "@components/icons"

interface IProps {
  checked?: boolean
  color?: "red" | "green" | "blue"
}

const Checkbox = ({ checked, color = "blue", ...rest }: IProps) => {
  function getClassNames() {
    const classNames = ["p-0", "flex", "justify-center", "items-center"]
    const selectedColor = {
      red: "text-red-500",
      green: "text-green-500",
      blue: "text-blue-500",
    }

    classNames.push(selectedColor[color] || selectedColor.blue)

    return classNames.join(" ")
  }
  return (
    <div className={getClassNames()}>
      <input
        type="checkbox"
        checked={checked}
        className="invisible w-0 h-0 overflow-hidden"
        {...rest}
      />
      {checked ? <CheckboxFill /> : <Square />}
    </div>
  )
}

export default Checkbox
