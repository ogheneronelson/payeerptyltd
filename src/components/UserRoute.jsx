import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../redux/slice/userSlice";
import { fetchExchanges } from "../redux/slice/exchangeSlice";

const UserRoute = () => {
  const dispatch = useDispatch();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUser());
    dispatch(fetchExchanges());
  }, [dispatch]);

  return !isError ? <Outlet /> : <Navigate to="/login" />;
};

export default UserRoute;
