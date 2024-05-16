import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/minorheader";
import Footer from "../components/minorfooter";

const MinorLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MinorLayout;
