import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../../configs/axiosConfig";
export const addProduct = createAsyncThunk(
  "product/post",
  async (data, { rejectWithValue }) => {
    const response = await Axios.post("/admin/product/add", data);
    console.log(response);
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(response);
    }
    return response;
  }
);

const initialState = {
  isLoading: false,
  errorMessage: "",
  currentProduct: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (build) => {
    build.addCase(addProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    build.addCase(addProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentProduct = action.payload;
    });
    build.addCase(addProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});

export default productSlice.reducer;
