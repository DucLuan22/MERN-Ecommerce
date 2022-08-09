import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../../configs/axiosConfig";

export const addProduct = createAsyncThunk(
  "product/post",
  async (data, { rejectWithValue }) => {
    try {
      const response = await Axios.post("/admin/product/add", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getProducts = createAsyncThunk(
  "product/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await Axios.get("/admin/product/q");
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  isLoading: false,
  errorMessage: "",
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (build) => {
    build.addCase(addProduct.pending, (state, action) => {
      state.isLoading = true;
    });

    build.addCase(addProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = [...state.products, action.payload];
    });

    build.addCase(addProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });

    build.addCase(getProducts.pending, (state, action) => {
      state.isLoading = true;
    });

    build.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload.data;
      return state;
    });

    build.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
