import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicRoute = ({ children }) => {
  const isLoggedIn = useAuth();
  let location = useLocation();

  return !isLoggedIn ? (
    children
  ) : (
    <Navigate to="/inbox" state={{ from: location }} replace></Navigate>
  );
};

export default PublicRoute;
