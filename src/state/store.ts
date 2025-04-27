import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "./slices/accountsSlice";

const store = configureStore({
	reducer: {
		accounts: accountsReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type RootGetStateType = typeof store.getState;
export type AppStore = typeof store;

export default store;
