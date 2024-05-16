import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../../redux/slice/adminSlice";
import { FaSignInAlt } from "react-icons/fa";
import Spinner from "react-bootstrap/Spinner";

const {Item } = Form

const Login = () => {
  const [form] = Form.useForm();
  
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isFetching, isError, isSuccess, message } = useSelector(
    (state) => state.admin
  );

  useEffect(() => {
    if (isError) {
      setErrorMessage(message);
      setError(true);
    }
    if (isSuccess ) {
      navigate("/admin/dashboard");
    }
    
    dispatch(reset());
  }, [ isError, isSuccess, message, dispatch, navigate]);

  const onFinish = (values) => {
    dispatch(login(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  setTimeout(() => {
    setError(false);
  }, 10000);

  return (
      <div className="admin-login-main">
        <h3 className="admin-login-heading">
          <FaSignInAlt />
          &nbsp;Admin Login
        </h3>

        <div className="admin-login-main-1">
          <div className="admin-login-form">
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
                className="admin-login-form-item"
                name="email"
                rules={[
                  {
                    type: "email",
                  },
                  {
                    required: true,
                    message: "Please enter a valid email",
                  },
                ]}
                hasFeedback
              >
                <Input className="admin-login-form-input" placeholder="Email" />
              </Item>
              <Item
                className="admin-login-form-item"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your password",
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  className="admin-login-form-input"
                  placeholder="Password"
                />
              </Item>

              <Item
                shouldUpdate
                className="admin-form-item"
                wrapperCol={{
                  span: 24,
                }}
              >
                {() => (
                  <Button
                    className="admin-login-button-1"
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
                    &nbsp; Login
                  </Button>
                )}
              </Item>
              <Item
                className="admin-login-form-item"
                wrapperCol={{
                  span: 24,
                }}
              >
                <Button className="admin-login-button-2">
                  <a href="/admin/register" className="form-button-link">
                    Don't Have An Account
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
  );
};

export default Login;
