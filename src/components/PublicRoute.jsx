import React from "react";
import { Outlet } from "react-router-dom";
import Language from "./language";


const PublicRoute = () => {
  return (
    <>
     {/* <a
        href="https://wa.me/qr/HMQQJDHLXTU2E1"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a> */}
      <div className="multi-language">
        <Language />
      </div>
      <Outlet />
    </>
  );
};

export default PublicRoute;

