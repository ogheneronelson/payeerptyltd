import React from "react";
import "./style.css";
import i18next from "i18next";
import DocumentTitle from "react-document-title";
import { useSelector } from "react-redux";

const PasswordLinkSent = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <DocumentTitle title="Reset Link Sent | Payeer Pty Limited">
      <div className="password-link-main">
        <div>
          <h3> {i18next.t("tlink104")}</h3>
          <p>
            {i18next.t("tlink105")} ({user?.user?.email}){" "}
            {i18next.t("tlink106")}
          </p>
          <p>
            {i18next.t("tlink107")} {user?.user?.email} {i18next.t("tlink108")}{" "}
            <a href="forgot-password">{i18next.t("tlink109")}</a>{" "}
            {i18next.t("tlink110")}
          </p>
          <p>{i18next.t("tlink111")}</p>
          <p>{i18next.t("tlink112")}(Reset your password)</p>
        </div>
      </div>
    </DocumentTitle>
  );
};

export default PasswordLinkSent;
