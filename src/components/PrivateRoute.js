import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useAuth();
  let location = useLocation();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
