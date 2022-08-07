import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const modelSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.open = true;
    },
    closeModal: (state) => {
      state.open = false;
    },
  },
});

export const { openModal, closeModal } = modelSlice.actions;
export default modelSlice.reducer;
