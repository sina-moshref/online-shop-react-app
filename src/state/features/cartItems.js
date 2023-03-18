import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartItems = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.cartItems.push({
          id: action.payload.id,
          amount: 1,
          title: action.payload.title,
          price: action.payload.price,
        });
      } else {
        existingItem.amount++;
      }
    },
    increase: (state, action) => {
      let cartIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      state.cartItems[cartIndex].amount++;
    },
    decrease: (state, action) => {
      let cartIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      state.cartItems[cartIndex].amount--;
    },
    remove: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    addToCartInitial: (state, action) => {
      console.log(action.payload);
      state.cartItems = action.payload;
    },
  },
});

export default cartItems.reducer;
export const { addToCart, remove, increase, decrease, addToCartInitial } =
  cartItems.actions;
