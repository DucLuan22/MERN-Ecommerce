import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/shop/Home";
import Cart from "../pages/shop/Cart";
import ProductPage from "../pages/shop/ProductPage";
import PrivateRoute from "../components/PrivateRoutes";
const MainLayoutRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product/:product_id" element={<ProductPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainLayoutRoutes;
