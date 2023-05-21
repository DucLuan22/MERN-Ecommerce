import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/shop/Home";
import Cart from "../pages/shop/Cart";
import ProductPage from "../pages/shop/ProductPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyToken } from "../features/auth/authSlice";
import Wishlist from "../pages/shop/Wishlist";
import { getProducts } from "../features/admin/productSlice";
import CheckOut from "../pages/shop/CheckOut";
import Browse from "../pages/shop/Browse";
import PrivateUserRoutes from "../components/PrivateRoutes/PrivateUserRoutes";
import History from "../pages/shop/History";
import OrderSuccess from "../pages/profile/OrderSuccess";
const MainLayoutRoutes = () => {
  const token = localStorage.getItem("authToken");
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    const fetchPrivateData = async () => {
      await dispatch(verifyToken()).unwrap();
    };
    if (token) {
      fetchPrivateData();
    }
  }, [dispatch, token]);

  return (
    <>
      {isLogin && <Navbar />}
      {!token && <Navbar />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product/:product_id" element={<ProductPage />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/orderSuccess" element={<OrderSuccess />} />
        <Route element={<PrivateUserRoutes />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/history" element={<History />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainLayoutRoutes;
