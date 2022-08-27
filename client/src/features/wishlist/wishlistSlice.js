import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../configs/axiosConfig";

const addToWishlist = createAsyncThunk(
  "wishlist/add",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await Axios.post("api/store/addWishlist", payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  isLoading: true,
  wishlist: [],
  errorMessage: "",
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(addToWishlist.fulfilled, (state, action) => {
      state.isLoading = false;
      state.wishlist = action.payload;
    });

    build.addCase(addToWishlist.pending, (state, action) => {
      state.isLoading = true;
    });
    build.addCase(addToWishlist.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});

export default wishlistSlice.reducer;
