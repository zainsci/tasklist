import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { VIEW } from "@utils/types"

const initialState = {
	mainView: VIEW.NONE,
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
