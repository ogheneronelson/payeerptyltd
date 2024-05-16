import React from "react";
import Logo from "../logo/adminindex";
import "./style.css";

const AdminNav = () => {
  const currenturl = window.location.pathname;
  return (
    <div className="admin-navbar-cont">
      <div className="admin-navbar-cont-1">
        <Logo />
      </div>
      <div className="admin-navbar-cont-2" >
        {currenturl !== "/admin/register" && (
          <div className="admin-navbar-register">
            <a href="/admin/register">Register</a>
          </div>
        )}
        {currenturl !== "/admin/login" && (
          <div className="admin-navbar-login">
            <a href="/admin/login">Login</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNav;
