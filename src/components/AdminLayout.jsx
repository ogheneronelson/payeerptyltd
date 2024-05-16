import React from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "./adminheader";

const AdminLayout = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(250,250,250)",
      }}
      className="userlayout-cont"
    >
      <div className="admin-nav-layout">
        <AdminNav />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
