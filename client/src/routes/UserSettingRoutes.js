import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateUserRoutes from "../components/PrivateRoutes/PrivateUserRoutes";
import Account from "../pages/profile/Account";
import OrderSuccess from "../pages/profile/OrderSuccess";

function UserSettingRoutes() {
  return (
    <>
      <Routes>
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}

export default UserSettingRoutes;
