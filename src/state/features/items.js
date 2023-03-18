import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const items = createSlice({
  name: "items",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.items = action.payload;
    },
  },
});

export default items.reducer;
export const { setData } = items.actions;
