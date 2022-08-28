import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../configs/axiosConfig";

export const addToWishlist = createAsyncThunk(
  "wishlist/add",
  async (payload, { rejectWithValue }) => {
    try {
      await Axios.post("api/store/addToWishlist", payload.data);
      return payload.item;
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
  reducers: {
    setWishlist: (state, action) => {
      state.isLoading = false;
      state.wishlist = action.payload;
    },
  },
  extraReducers: (build) => {
    build.addCase(addToWishlist.fulfilled, (state, action) => {
      state.isLoading = false;
      const index = state.wishlist.findIndex(
        (product) => product._id === action.payload._id
      );

      if (index !== -1) {
        state.wishlist = state.wishlist.filter(
          (product) => product._id !== action.payload._id
        );
      }

      if (index === -1) {
        state.wishlist.push(action.payload);
      }
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
export const { setWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
