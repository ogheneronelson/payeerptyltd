import React, { useState, useEffect } from "react";
import "./style.css";
import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../../redux/slice/adminSlice";
import { FaUser } from "react-icons/fa";
import Spinner from "react-bootstrap/Spinner";

const { Item } = Form;

const Register = () => {
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
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/admin/login");
    }
    dispatch(reset());
  }, [isError, isSuccess, message, dispatch, navigate]);

  setTimeout(() => {
    setError(false);
  }, 10000);

  const onFinish = (values) => {
    dispatch(register(values));
  };
  const onFinishFailed = (errorData) => {
    console.log(errorData);
  };

  return (
    <div className="admin-register-main">
      <h3 className="admin-register-heading">
        <FaUser />
        &nbsp;Create An Account
      </h3>
      <div className="admin-register-main-1">
        <div className="admin-register-form">
          <Form
            form={form}
            name="admin-register"
            wrapperCol={{
              span: 24,
            }}
            layout="vertical"
            autoComplete="off"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <div className="admin-register-form-1">
              <div className="admin-register-form-1-1">
                <Item
                  className="admin-register-form-item name-form-item"
                  label="Firstname"
                  name="firstname"
                  rules={[
                    {
                      required: true,
                      message: "Enter your firstname!",
                    },
                    { whitespace: true },
                    { min: 2 },
                    { type: "string" },
                  ]}
                  hasFeedback
                >
                  <Input
                    className="admin-register-form-input name-form-input"
                    placeholder="Firstname"
                  />
                </Item>
              </div>
              <div className="admin-register-form-1-2">
                <Item
                  className="admin-register-form-item name-form-item"
                  label="Lastname"
                  name="lastname"
                  rules={[
                    {
                      required: true,
                      message: "Enter your lastname!",
                    },
                    { whitespace: true },
                    { min: 2 },
                    { type: "string" },
                  ]}
                  hasFeedback
                >
                  <Input
                    className="admin-register-form-input name-form-input"
                    placeholder="Lastname"
                  />
                </Item>
              </div>
            </div>

            <Item
              className="admin-register-form-item"
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Enter your username!",
                },
                { whitespace: true },
                { min: 5 },
                { type: "string" },
              ]}
              hasFeedback
            >
              <Input className="admin-register-form-input" placeholder="Username" />
            </Item>
            <Item
              className="admin-register-form-item"
              label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  message: "This is not valid email! address",
                },
                {
                  required: true,
                  message: "Enter your email! address!",
                },
              ]}
              hasFeedback
            >
              <Input className="admin-register-form-input" placeholder="Email" />
            </Item>
            <Item
              className="admin-register-form-item"
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Enter your password!",
                },
                { min: 8, message: "Password must be 8 characters or more" },
                {
                  pattern: new RegExp(
                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
                  ),
                  message:
                    "Password must contain at least a lowercase letter, an uppercase letter, a number, and special character(@$!%*?&)",
                },
              ]}
              hasFeedback
            >
              <Input.Password
                className="admin-register-form-input"
                placeholder="Password"
              />
            </Item>
            <Item
              className="admin-register-form-item"
              label="Confirm Password"
              name="password2"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Enter confirmation password to proceed!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Passwords did not match!")
                    );
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password
                className="admin-register-form-input"
                placeholder="Confirm Password"
              />
            </Item>
            <Item
              shouldUpdate
              className="admin-register-form-item"
              wrapperCol={{
                span: 24,
              }}
            >
              {() => (
                <Button
                  className="admin-register-button-1"
                  htmlType="submit"
                  disabled={
                    isFetching ||
                    !!form
                      .getFieldsError()
                      .filter(({ errors }) => errors.length).length
                  }
                >
                  {" "}
                  {isFetching && (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  )}{" "}
                  &nbsp; Register
                </Button>
              )}
            </Item>
            <Item
              className="admin-register-form-item"
              wrapperCol={{
                span: 24,
              }}
            >
              <Button className="admin-register-button-2">
                <a href="/login" className="admin-register-link">
                  Already Have An Account
                </a>
              </Button>
            </Item>
          </Form>
        </div>
      </div>
      {error && (
        <div className="admin-register-error-cont">
          <p className="admin-register-error-message">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Register;
