import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


const UserDetails = () => {
  const { user } = useSelector((state) => state.auth);
  return user?.token? <Outlet /> : <Navigate to="/login" />;
};

export default UserDetails;
