import React from "react";

import { Dashboard } from "../pages/admin/Dashboard";
import { Route, Routes } from "react-router-dom";
export const AdminLayout = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};
export default AdminLayout;
