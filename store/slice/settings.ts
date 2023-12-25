import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { VIEW } from "@utils/types"

interface SettingsState {
	mainView: VIEW
	today: Date
	tasksArchived: boolean
}

const initialState: SettingsState = {
	mainView: VIEW.NONE,
	today: new Date(),
	tasksArchived: false,
}

export const settingSlice = createSlice({
	name: "Settings",
	initialState,
	reducers: {
		changeView(state, action: PayloadAction<VIEW>) {
			state.mainView = action.payload
		},
	},
})

export const { changeView } = settingSlice.actions

export default settingSlice.reducer
