import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccountAlpacaTable } from "../../interfaces/AccountAlpacaTable";

const initialState: AccountAlpacaTable[] = [
	{
		id: 12345,
		platformAccountId: "testPlatformAccountId",
		platformAPIKey: "testPlatformAPIKey",
	},
];

export const accountsSlice = createSlice({
	name: "accounts",
	initialState,
	reducers: {
		addAccount: (state, action: PayloadAction<AccountAlpacaTable>) => {
			state.push(action.payload);
		},
		removeAccount: (state, action: PayloadAction<number>) => {
			return state.filter((account) => account.id !== action.payload);
		},
		refreshAccounts: (_, action: PayloadAction<AccountAlpacaTable[]>) => {
			console.log("Refreshing accounts");
			return action.payload;
		},
	},
});

export const { addAccount, removeAccount } = accountsSlice.actions;
export default accountsSlice.reducer;
