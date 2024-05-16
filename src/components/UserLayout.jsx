import React from "react";
import { Outlet } from "react-router-dom";
import UserNav from "./userheader";
import Language from "./language";
import { ToastContainer } from "react-toastify";

const UserLayout = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(250,250,250)",
      }}
      className="userlayout-cont"
    >
      <div className="usernav-layout">
        <div className="multi-language">
          <Language />
        </div>
        <UserNav />
        <Outlet />
        {/* <a
          href="https://wa.me/qr/HMQQJDHLXTU2E1"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a> */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserLayout;
