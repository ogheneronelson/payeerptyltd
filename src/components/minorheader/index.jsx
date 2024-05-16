import React from "react";
import "./style.css";
// import i18next from "i18next";
import Logo from "../logo";

const MinorHeader = () => {
  // const currenturl = window.location.pathname;

  return (
    <div className="main-minornavbar">
      <div className="main-minornavbar-1">
        <Logo />
      </div>

      {/* <div className="main-minornavbar-2">
        {currenturl !== "/register" &&
          currenturl !== "/forgot-password" &&
          currenturl !== "/resend-confirmation-email" && (
            <div className="minornavbar-register">
              <a href="/register">{i18next.t("thome8")}</a>
            </div>
          )}
        {currenturl !== "/login" && (
          <div className="minornavbar-login">
            <a href="/login">{i18next.t("thome9")}</a>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default MinorHeader;
