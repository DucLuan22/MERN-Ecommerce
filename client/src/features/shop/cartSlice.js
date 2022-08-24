import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [{}],
  total: 0,
};

const cartSlice = createSlice({
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setTotal:(state)=>{
    
    }
  },
});
