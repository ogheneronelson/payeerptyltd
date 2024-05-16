import React from "react";
import "./style.css";
import HelpNav from "../../components/helpnav";
import { Outlet } from "react-router-dom";
import Topbar from "../../components/usertopbar/Topbar";
import UserFooter from "../../components/minorfooter";
import DocumentTitle from "react-document-title";
import { ToastContainer } from "react-toastify";

export const Help = () => {
  return (
    <DocumentTitle title="Needs Help | Payeer Pty Limited">
      <div className="help-container">
        <Topbar />
        <div className="help-main-nav">
          <div className="help-main-nav-1">
            <HelpNav />
          </div>
          <div className="help-main-nav-2">
            <Outlet />
          </div>
        </div>
        <ToastContainer />
        <UserFooter />
      </div>
    </DocumentTitle>
  );
};
export default Help;
