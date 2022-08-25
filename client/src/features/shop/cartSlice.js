import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../configs/axiosConfig";

export const addToCart = createAsyncThunk(
  "cart/add",
  async (payload, { rejectWithValue }) => {
    try {
      await Axios.put("api/store/addToCart/", payload.input);
      return payload.item;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  isLoading: true,
  cart: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setTotalAmount: (state) => {
      if (state.cart.length > 1) {
        state.totalAmount = state.cart.reduce(
          (prev, current) =>
            prev.quantity * prev.price + current.quantity * current.price
        );
      } else {
        state.totalAmount = state.cart[0].quantity * state.cart[0].price;
      }
    },
    setTotal: (state) => {
      if (state.cart.length > 1) {
        state.totalQuantity = state.cart.reduce(
          (prev, current) => prev.quantity + current.quantity
        );
      } else {
        state.totalQuantity = state.cart[0].quantity;
      }
    },
  },
  extraReducers: (build) => {
    build.addCase(addToCart.fulfilled, (state, action) => {
      state.isLoading = false;
      const index = state.cart.findIndex(
        (product) => product._id === action.payload._id
      );

      if (index !== -1) {
        state.cart[index].quantity += action.payload.quantity;
      }

      if (index === -1) {
        state.cart.push(action.payload);
      }
    });

    build.addCase(addToCart.pending, (state, action) => {
      state.isLoading = true;
    });

    build.addCase(addToCart.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});

export const { setCart, setTotal, setTotalAmount } = cartSlice.actions;
export default cartSlice.reducer;
