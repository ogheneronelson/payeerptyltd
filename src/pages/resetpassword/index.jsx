import React, { useState, useEffect } from "react";
import "./style.css";
import i18next from "i18next";
import { Form, Input, Button } from "antd";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DocumentTitle from "react-document-title";

const { Item } = Form;

const ResetPassword = () => {
  const [form] = Form.useForm();
  const [invalidUser, setInvalidUser] = useState("");
  const [busy, setBusy] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const { token, id } = queryString.parse(location.search);

  const verifyToken = async () => {
    try {
      const data = await axios(
        process.env.REACT_APP_BASE_URI +
          `/auth/verify-token?token=${token}&id=${id}`
      );
      setBusy(false);
      console.log(data);
    } catch (error) {
      if (error?.response?.data) {
        const { data } = error.response;
        if (!data.success) {
          return setInvalidUser(data.msg);
        }

        return console.log(error.response.data);
      }
      console.log(error);
    }
  };

  useEffect(() => {
    verifyToken();
  });

  const onFinish = async (values) => {
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_BASE_URI +
          `/auth/reset-password?token=${token}&id=${id}`,
        values
      );
      console.log(data);
      navigate("/reset-success");
    } catch (error) {
      if (error?.response?.data) {
        const { data } = error.response;
        if (!data.success) {
          toast.error(data.msg);
        }

        return console.log(error.response.data);
      }
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (invalidUser) {
    return (
      <div className="invalid-container">
        <h4>{invalidUser}</h4>
      </div>
    );
  }

  return (
    <DocumentTitle title="Reset Password | Payeer Pty Limited">
      <div className="reset-password-main">
        <h1 className="reset-password-heading"> {i18next.t("treset131")}</h1>
        <div className="reset-password-main-1">
          <div className="reset-password-form">
            <Form
              form={form}
              name="resetpassword"
              wrapperCol={{
                span: 24,
              }}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Item
                className="-reset-password-form-item"
                name="password"
                rules={[
                  {
                    required: true,
                    message: [i18next.t("treset132")],
                  },
                  { min: 8, message: [i18next.t("treset133")] },
                  {
                    pattern: new RegExp(
                      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
                    ),
                    message: [i18next.t("treset134")],
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  className="reset-password-form-input"
                  placeholder={i18next.t("treset135")}
                />
              </Item>
              <Item
                className="-reset-password-form-item"
                name="confirmpassword"
                rules={[
                  {
                    required: true,
                    message: [i18next.t("treset136")],
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error([i18next.t("treset137")])
                      );
                    },
                  }),
                ]}
                hasFeedback
              >
                <Input.Password
                  className="reset-password-form-input"
                  placeholder={i18next.t("treset138")}
                />
              </Item>
              <Item
                className="reset-password-form-item"
                wrapperCol={{
                  span: 24,
                }}
              >
                <Button
                  disabled={
                    busy ||
                    !!form
                      .getFieldsError()
                      .filter(({ errors }) => errors.length).length
                  }
                  className="reset-password-form-button"
                  htmlType="submit"
                >
                  {i18next.t("treset139")}
                </Button>
              </Item>
            </Form>
          </div>
        </div>
      </div>
    </DocumentTitle>
  );
};

export default ResetPassword;
