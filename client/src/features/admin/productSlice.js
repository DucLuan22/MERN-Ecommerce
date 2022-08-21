import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../../configs/axiosConfig";

export const addProduct = createAsyncThunk(
  "product/post",
  async (data, { rejectWithValue }) => {
    try {
      const postData = new FormData();
      postData.append("image", data.image);
      postData.append("price", data.price);
      postData.append("name", data.name);
      postData.append("stock", data.stock);
      postData.append("brand", data.brand);
      postData.append("category", data.category);

      const response = await Axios.post("/admin/product/add", postData);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getProducts = createAsyncThunk(
  "product/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await Axios.get("/admin/product/q");
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteProducts = createAsyncThunk(
  "product/delete",
  async (product_id, thunkAPI) => {
    try {
      const response = await Axios.delete(
        `/admin/product/delete/${product_id}`
      );
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateProducts = createAsyncThunk(
  "product/update",
  async (data, thunkAPI) => {
    try {
      const response = await Axios.put(
        `/admin/product/update/${data._id}`,
        data
      );
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
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
      state.products.push(action.payload);
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
    });

    build.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });

    build.addCase(deleteProducts.pending, (state, action) => {
      state.isLoading = true;
    });

    build.addCase(deleteProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
    });

    build.addCase(deleteProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });

    build.addCase(updateProducts.pending, (state, action) => {
      state.isLoading = true;
    });

    build.addCase(updateProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      const index = state.products.findIndex(
        (product) => product._id === action.payload._id
      );
      state.products[index] = {
        ...state.products[index],
        ...action.payload,
      };
    });
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
