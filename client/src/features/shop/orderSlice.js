import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../configs/axiosConfig";

export const checkout = createAsyncThunk(
  "order/createOrder",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await Axios.post("api/store/checkout/", payload);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  orders: [],
  isLoading: true,
  errorMessage: "",
};
const orderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: (build) => {
    build.addCase(checkout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orders.push(action.payload);
    });

    build.addCase(checkout.pending, (state, action) => {
      state.isLoading = true;
    });

    build.addCase(checkout.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});

export default orderSlice.reducer;
