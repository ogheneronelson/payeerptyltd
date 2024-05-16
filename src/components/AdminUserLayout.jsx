import React from "react";
import { Outlet } from "react-router-dom";
import AdminUserNav from "./adminuserheader";
import { ToastContainer } from "react-toastify";

const AdminUserLayout = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(250,250,250)",
      }}
      className="userlayout-cont"
    >
      <div className="adminuser-nav-layout">
        <AdminUserNav />
        <div className="admin-outlet-cont">
          <Outlet />
          <ToastContainer/>
        </div>
      </div>
    </div>
  );
};

export default AdminUserLayout;
