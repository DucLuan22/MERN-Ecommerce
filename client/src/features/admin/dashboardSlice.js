import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../configs/axiosConfig";

export const getTopSaleNumbers = createAsyncThunk(
  "dashboard/getTopSaleNumbers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await Axios.get(`/api/dashboard/getTopSaleNumbers`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  isTopSaleLoading: false,
  errorMessage: "",
  topSellingList: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getTopSaleNumbers.fulfilled, (state, action) => {
      state.isTopSaleLoading = false;
      state.topSellingList = action.payload.orderedList;
    });

    build.addCase(getTopSaleNumbers.pending, (state, action) => {
      state.isTopSaleLoading = true;
    });

    build.addCase(getTopSaleNumbers.rejected, (state, action) => {
      state.isTopSaleLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});

export default dashboardSlice.reducer;
