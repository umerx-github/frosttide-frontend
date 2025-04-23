import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EventIdState {
	value: number | undefined;
}
const initialState: EventIdState = {
	value: undefined,
};
export const eventIdSlice = createSlice({
	name: "eventId",
	initialState,
	reducers: {
		setId: (state, action: PayloadAction<number>) => {
			state.value = action.payload;
		},
	},
});

export const { setId } = eventIdSlice.actions;
export default eventIdSlice.reducer;
