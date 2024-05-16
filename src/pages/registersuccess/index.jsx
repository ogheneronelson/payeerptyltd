import React, { useEffect } from "react";
import "./style.css";
import i18next from "i18next";
import { reset } from "../../redux/slice/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import DocumentTitle from "react-document-title";

const RegisterSuccess = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset());
  }, [dispatch, user]);

  const email = user?.user?.email;
  const url = email.substring(
    email.lastIndexOf("@") + 1,
    email.lastIndexOf(".")
  );

  return !user.user.active ? (
    <DocumentTitle title="Registration Successful | Payeer Pty Limited">
      <div className="register-success-main">
        <div>
          <h3>{i18next.t("tsuccess113")}</h3>
          <p>
            {i18next.t("tsuccess114")} <strong>{email}</strong>{" "}
            {i18next.t("tsuccess115")}
          </p>
          <p>
            {i18next.t("tsuccess116")} <strong>{email}</strong>{" "}
            {i18next.t("tsuccess117")}{" "}
            <a href="/register">{i18next.t("tsuccess118")}</a>{" "}
            {i18next.t("tsuccess119")}
          </p>
          <p>{i18next.t("tsuccess120")}</p>
          <p>
            {i18next.t("tsuccess121")}{" "}
            <span className="url-span">
              {url} {i18next.t("tsuccess122")}
            </span>
            &nbsp; {i18next.t("tsuccess123")} (Confirm Your Account)
          </p>
        </div>
      </div>
    </DocumentTitle>
  ) : (
    <Navigate to="/login" />
  );
};

export default RegisterSuccess;
