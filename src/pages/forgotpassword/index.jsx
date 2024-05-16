import React, { useState, useEffect } from "react";
import "./style.css";
import i18next from "i18next";
import { Form, Input, Button, Switch } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { forgotPassword, reset } from "../../redux/slice/userSlice";
import { toast } from "react-toastify";
import DocumentTitle from "react-document-title";

const { Item } = Form;

const ForgotPassword = () => {
  const [form] = Form.useForm();
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isFetching, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      console.log(user);
      navigate("/reset-link-sent");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch, navigate]);

  const onFinish = (values) => {
    dispatch(forgotPassword(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <DocumentTitle title="Forgot Password | Payeer Pty Limited">
      <div className="forgot-password-main">
        <h3 className="forgot-password-heading">{i18next.t("tforgot92")}</h3>
        <div className="forgot-password-main-1">
          <div className="forgot-password-form">
            <Form
              form={form}
              name="forgot-password"
              wrapperCol={{
                span: 24,
              }}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Item
                label={i18next.t("tforgot93")}
                className="forgot-password-form-item"
                name="email"
                rules={[
                  {
                    type: "email",
                    message: [i18next.t("tforgot94")],
                  },
                  {
                    required: true,
                    message: [i18next.t("tforgot95")],
                  },
                ]}
                hasFeedback
              >
                <Input
                  className="forgot-password-form-input"
                  placeholder={i18next.t("tforgot96")}
                />
              </Item>
              <div className="switch-cont">
                <strong>{i18next.t("tforgot97")}</strong>
                <Item valuePropName="checked" hasFeedback>
                  <Switch
                    onChange={(value) => {
                      setChecked(value);
                    }}
                    className="register-switch"
                  />
                </Item>
              </div>
              <div>
                <p>{i18next.t("tforgot98")}</p>
              </div>
              <Item
                className="forgot-password-form-item"
                wrapperCol={{
                  span: 24,
                }}
              >
                <Button
                  disabled={
                    !checked ||
                    isFetching ||
                    !!form
                      .getFieldsError()
                      .filter(({ errors }) => errors.length).length
                  }
                  className="forgot-password-form-button"
                  htmlType="submit"
                >
                  {i18next.t("tforgot99")}
                </Button>
              </Item>
              <div className="forgot-password-cont">
                <a className="return-to-login" href="/login">
                  {i18next.t("tforgot101")}
                </a>
                <p>{i18next.t("tforgot102")}</p>
                <a href="/resend-confirmation-email">
                  {i18next.t("tforgot103")}
                </a>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </DocumentTitle>
  );
};

export default ForgotPassword;
