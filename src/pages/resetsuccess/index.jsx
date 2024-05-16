import React from "react";
import "./style.css";
import i18next from "i18next";
import DocumentTitle from "react-document-title";

const PasswordResetSuccess = () => {
  return (
    <DocumentTitle title="Password Reset Successful | Payeer Pty Limited">
      <div className="password-reset-success-main">
        <div>
          <h4>{i18next.t("tresetsuccess140")}</h4>
          <p>{i18next.t("tresetsuccess141")}</p>
          <strong>{i18next.t("tresetsuccess142")}</strong>
          <a href="/login">{i18next.t("tresetsuccess143")}</a>
        </div>
      </div>
    </DocumentTitle>
  );
};

export default PasswordResetSuccess;
