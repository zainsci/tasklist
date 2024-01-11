import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { VIEW } from "@utils/types"

interface SettingsState {
	mainView: VIEW
	today: Date
	tasksArchived: boolean
	timer: number
}

function loadSettingFromLS() {
	if (typeof window !== "undefined")
		return JSON.parse(
			window.localStorage.getItem("settings") ??
				`{
      "mainView": "NONE",
      "today": "2023-12-25",
      "tasksArchived": false,
      "timer": 300
    }`
		)
}

const initialState: SettingsState = loadSettingFromLS() ?? {
	mainView: VIEW.NONE,
	today: new Date(),
	tasksArchived: false,
	timer: 5 * 60,
}

export const settingSlice = createSlice({
	name: "Settings",
	initialState,
	reducers: {
		changeView(state, action: PayloadAction<VIEW>) {
			state.mainView = action.payload
		},
		changeTimer(state, action: PayloadAction<number>) {
			state.timer = action.payload
		},
	},
})

export const { changeView, changeTimer } = settingSlice.actions

export default settingSlice.reducer
