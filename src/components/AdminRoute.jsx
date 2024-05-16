import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = () => {
  const { isError } = useSelector((state) => state.admin);

  return !isError ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default AdminRoute;
