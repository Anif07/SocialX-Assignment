import { createSlice } from "@reduxjs/toolkit";

const FunctionalitySlice = createSlice({
  name: "FunctionalitySlice",
  initialState: {
    startIndex: 1,
  },
  reducers: {
    count: (state, action) => {
      state.startIndex = state.startIndex + 1;
    },
  },
});
export const { count } = FunctionalitySlice.actions;
export default FunctionalitySlice.reducer;
