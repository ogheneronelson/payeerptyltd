import React from "react";
import "./style.css";
import FundsNav from "../../components/fundsnav";
import { Outlet } from "react-router-dom";
import Topbar from "../../components/usertopbar/Topbar";
import UserFooter from "../../components/minorfooter";
import DocumentTitle from "react-document-title";
import { ToastContainer } from "react-toastify";

export const Funds = () => {
  return (
    <DocumentTitle title="Fund | Payeer Pty Limited">
      <div className="fund-container">
        <Topbar />
        <div className="fund-main-nav">
          <div className="fund-main-nav-1">
            <FundsNav />
          </div>
          <div className="fund-main-nav-2">
            <Outlet />
          </div>
        </div>
        <UserFooter />
        <ToastContainer />
      </div>
    </DocumentTitle>
  );
};
export default Funds;
