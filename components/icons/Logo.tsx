import * as React from "react"
import type { SVGProps } from "react"

interface IProps extends SVGProps<SVGSVGElement> {
	width?: string | number
	height?: string | number
}

const Logo = ({ width = 24, height = 24, ...props }: IProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		viewBox="0 0 48 48"
		fill="currentColor"
		{...props}
	>
		<path
			width={width}
			height={height}
			fillRule="evenodd"
			clipRule="evenodd"
			d="M32.1441 201.958C0 271.466 0 360.977 0 540C0 719.023 0 808.534 32.1441 878.042C66.8088 953.001 126.999 1013.19 201.958 1047.86C271.466 1080 360.977 1080 540 1080C719.023 1080 808.534 1080 878.042 1047.86C953.001 1013.19 1013.19 953.001 1047.86 878.042C1080 808.534 1080 719.023 1080 540C1080 360.977 1080 271.466 1047.86 201.958C1013.19 126.999 953.001 66.8088 878.042 32.1441C808.534 0 719.023 0 540 0C360.977 0 271.466 0 201.958 32.1441C126.999 66.8088 66.8088 126.999 32.1441 201.958ZM594.844 727.403L893.154 429.092L781.288 317.225L482.977 615.536L296.533 429.092L184.667 540.958L482.977 839.269L594.844 727.403Z"
		/>
	</svg>
)

export default Logo
