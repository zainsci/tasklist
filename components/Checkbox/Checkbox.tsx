import React from "react"

import { Square, CheckboxFill } from "@components/icons"

interface IProps {
	checked?: boolean
}

const Checkbox = ({ checked, ...rest }: IProps) => {
	return (
		<div className="p-0 flex justify-center items-center">
			<input
				type="checkbox"
				checked={checked}
				className="invisible w-0 h-0 overflow-hidden"
				onChange={() => {}}
				{...rest}
			/>
			{checked ? <CheckboxFill /> : <Square />}
		</div>
	)
}

export default Checkbox
