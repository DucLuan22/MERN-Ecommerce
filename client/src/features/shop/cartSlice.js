import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setTotal: (state) => {
      // state.total = state.cart.
    },
  },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
