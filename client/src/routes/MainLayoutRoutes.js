import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/shop/Home";
import Cart from "../pages/shop/Cart";
import ProductPage from "../pages/shop/ProductPage";
import PrivateRoute from "../components/PrivateRoutes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyToken } from "../features/auth/authSlice";
import Wishlist from "../pages/shop/Wishlist";
import { getProducts } from "../features/admin/productSlice";
const MainLayoutRoutes = () => {
  const token = localStorage.getItem("authToken");
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPrivateData = async () => {
      await dispatch(verifyToken()).unwrap();
    };
    if (token) {
      fetchPrivateData();
    }
    dispatch(getProducts());
  }, [dispatch, token]);

  return (
    <>
      {!isLoading && <Navbar />}
      {!token && <Navbar />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product/:product_id" element={<ProductPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainLayoutRoutes;
