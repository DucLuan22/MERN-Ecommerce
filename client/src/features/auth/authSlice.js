import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Action } from "history";

export const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await Axios.post("/api/auth/register", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  isLoading: true,
  errorMessage: "",
  isLogin: false,
  loggedUser: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (build) => {
    build.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.loggedUser = action.payload;
    });

    build.addCase(register.pending, (state, action) => {
      state.isLoading = true;
    });

    build.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.loggedUser = action.payload;
    });
  },
});
