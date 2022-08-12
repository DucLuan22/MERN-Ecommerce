import { configureStore } from "@reduxjs/toolkit";
import SidebarReducer from "./features/admin/adminSidebarSlice";
import ModalReducer from "./features/admin/adminModalSlide";
import ProductReducer from "./features/admin/productSlice";

import BrandReducer from "./features/admin/brandSlice";
import categoryReducer from "./features/admin/categorySlice";

export const store = configureStore({
  reducer: {
    sidebar: SidebarReducer,
    modal: ModalReducer,
    product: ProductReducer,
    brand: BrandReducer,
    category: categoryReducer,
  },
});
