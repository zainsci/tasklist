import { configureStore } from "@reduxjs/toolkit"

import TaskReducer from "@store/slice/task-list"
import SettingsReducer from "@store/slice/settings"

const store = configureStore({
	reducer: {
		TaskReducer,
		SettingsReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
