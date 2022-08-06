import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./features/admin/adminSidebarSlice";

export const store = configureStore({
  reducer: {
    sidebar: adminReducer,
  },
});
