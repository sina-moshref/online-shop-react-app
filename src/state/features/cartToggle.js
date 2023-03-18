import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const cartToggle = createSlice({
  name: "cartToggle",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export default cartToggle.reducer;
export const { toggle } = cartToggle.actions;
