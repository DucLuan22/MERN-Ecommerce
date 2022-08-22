import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

import { Spinner } from "flowbite-react";
const PrivateRoute = () => {
  const { isLogin, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return (
      <Spinner
        color="info"
        aria-label="Info spinner example"
        className="mt-20"
      />
    );
  }
  if (!isLogin || !localStorage.getItem("authToken")) {
    return <Navigate replace to="/auth/login" />;
  }
  return <Outlet />;
};
export default PrivateRoute;
