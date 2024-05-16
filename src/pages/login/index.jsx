import React, { useState, useEffect } from "react";
import "./style.css";
import i18next from "i18next";
import { Form, Input, Button } from "antd";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../../redux/slice/userSlice";
import Spinner from "react-bootstrap/Spinner";
import DocumentTitle from "react-document-title";
import { useIsMounted } from "../../components/isMountedHook";

const { Item } = Form;

const Login = () => {
  const [form] = Form.useForm();
  const isMounted = useIsMounted();

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isFetching, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const onFinish = async (values) => {
    dispatch(login(values));
  };
  const onFinishFailed = (error) => {
    console.log("Failed:", error);
  };

  useEffect(() => {
    if (isError) {
      setErrorMessage(message);
      setError(true);
    }
    if (isSuccess) {
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [isError, isSuccess, message, dispatch, navigate]);

  setTimeout(() => {
    if (isMounted) setError(false);
  }, 15000);

  return (
    <DocumentTitle title="Login Your Account | Payeer Pty Limited">
      <div className="login-main">
        <h3 className="login-heading">
          <FaSignInAlt />
          &nbsp;{i18next.t("tnlogin1")}
        </h3>

        <div className="login-main-1">
          <div className="login-form">
            <Form
              form={form}
              name="login"
              wrapperCol={{
                span: 24,
              }}
              layout="vertical"
              autoComplete="on"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="login-form"
            >
              <Item
                className="login-form-item"
                name="email"
                rules={[
                  {
                    type: "email",
                  },
                  {
                    required: true,
                    message: [i18next.t("tlogin63")],
                  },
                ]}
                hasFeedback
              >
                <Input
                  className="login-form-input"
                  placeholder={i18next.t("tlogin64")}
                />
              </Item>
              <Item
                className="login-form-item"
                name="password"
                rules={[
                  {
                    required: true,
                    message: [i18next.t("tlogin65")],
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  className="login-form-input"
                  placeholder={i18next.t("tlogin66")}
                />
              </Item>

              <Item
                shouldUpdate
                className="form-item"
                wrapperCol={{
                  span: 24,
                }}
              >
                {() => (
                  <Button
                    className="login-button-1"
                    htmlType="submit"
                    disabled={
                      isFetching ||
                      !form.isFieldsTouched(true) ||
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
                  >
                    {isFetching && (
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    )}{" "}
                    &nbsp; {i18next.t("tlogin67")}
                  </Button>
                )}
              </Item>
              <div className="login-form-cont">
                <a href="/forgot-password" className="reset-email-link">
                  {i18next.t("tlogin68")}
                </a>
              </div>
              <Item
                className="login-form-item"
                wrapperCol={{
                  span: 24,
                }}
              >
                <Button className="login-button-2">
                  <a href="/register" className="form-button-link">
                    {i18next.t("tlogin69")}
                  </a>
                </Button>
              </Item>
            </Form>
          </div>
        </div>
        {error && (
          <div className="register-error-cont">
            <p className="register-error-message">{errorMessage}</p>
          </div>
        )}
      </div>
    </DocumentTitle>
  );
};

export default Login;
