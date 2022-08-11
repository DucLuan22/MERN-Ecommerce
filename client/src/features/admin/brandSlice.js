import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../configs/axiosConfig";

export const addBrand = createAsyncThunk(
  "brand/post",
  async (data, { rejectWithValue }) => {
    try {
      const response = await Axios.post("admin/brand/add", data);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getBrands = createAsyncThunk(
  "brand/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await Axios.get("/admin/brand/q");
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteBrand = createAsyncThunk(
  "brand/delete",
  async (brand_id, thunkAPI) => {
    try {
      const response = await Axios.delete(
        `/admin/brand/delete/${brand_id}`,
        brand_id
      );
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateBrand = createAsyncThunk(
  "brand/update",
  async (data, thunkAPI) => {
    try {
      const response = await Axios.put(`/admin/brand/update/${data._id}`, data);

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  isLoading: false,
  errorMessage: "",
  brands: [],
};

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(addBrand.fulfilled, (state, action) => {
      state.isLoading = false;
      state.brands.push(action.payload);
    });

    build.addCase(addBrand.pending, (state, action) => {
      state.isLoading = true;
    });

    build.addCase(addBrand.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });

    build.addCase(getBrands.fulfilled, (state, action) => {
      state.isLoading = false;
      state.brands = action.payload.data;
    });

    build.addCase(getBrands.pending, (state, action) => {
      state.isLoading = true;
    });

    build.addCase(getBrands.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });

    build.addCase(deleteBrand.pending, (state, action) => {
      state.isLoading = true;
    });

    build.addCase(deleteBrand.fulfilled, (state, action) => {
      state.isLoading = false;
      state.brands = state.brands.filter(
        (brand) => brand._id !== action.payload._id
      );
    });

    build.addCase(deleteBrand.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });

    build.addCase(updateBrand.pending, (state, action) => {
      state.isLoading = true;
    });

    build.addCase(updateBrand.fulfilled, (state, action) => {
      state.isLoading = false;
      const index = state.brands.findIndex(
        (brand) => brand._id === action.payload._id
      );
      state.brands[index] = {
        ...state.brands[index],
        ...action.payload,
      };
    });
  },
});

export default brandSlice.reducer;
