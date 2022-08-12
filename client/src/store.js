import { configureStore } from "@reduxjs/toolkit";
import SidebarReducer from "./features/admin/adminSidebarSlice";
import ModalReducer from "./features/admin/adminModalSlide";
import ProductReducer from "./features/admin/productSlice";
<<<<<<< HEAD
import BrandReducer from "./features/admin/brandSlice";
import categoryReducer from "./features/admin/categorySlice";
=======

>>>>>>> parent of 0fdc197 (add update products and crud for brand model)
export const store = configureStore({
  reducer: {
    sidebar: SidebarReducer,
    modal: ModalReducer,
    product: ProductReducer,
<<<<<<< HEAD
    brand: BrandReducer,
    category: categoryReducer,
=======
>>>>>>> parent of 0fdc197 (add update products and crud for brand model)
  },
});
