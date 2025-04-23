import { configureStore } from "@reduxjs/toolkit";
import eventIdReducer from "./slices/eventIdSlice";

const store = configureStore({
	reducer: {
		event: eventIdReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type RootGetStateType = typeof store.getState;
export type AppStore = typeof store;

export default store;
