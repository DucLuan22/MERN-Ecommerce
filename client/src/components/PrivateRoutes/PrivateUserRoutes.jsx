import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const PrivateUserRoutes = () => {
  const { isLogin } = useSelector((state) => state.auth);
  if (!isLogin || !localStorage.getItem("authToken")) {
    return <Navigate replace to="/auth/login" />;
  }
  return <Outlet />;
};
export default PrivateUserRoutes;
