import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  return localStorage.getItem("authToken") ||
    localStorage.getItem("authAdminToken") ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" />
  );
};
export default PrivateRoute;
