import { configureStore } from "@reduxjs/toolkit";
import cartItems from "../features/cartItems";
import cartToggle from "../features/cartToggle";
import items from "../features/items";

const store = configureStore({
  reducer: {
    cartToggle: cartToggle,
    items: items,
    cartItems: cartItems,
  },
});

export default store;
