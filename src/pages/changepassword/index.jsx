import React, { useState } from "react";
import "./style.css";
import i18next from "i18next";
import { useSelector } from "react-redux";
import { Form, Input, Button } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import DocumentTitle from "react-document-title";
import Topbar from "../../components/usertopbar/Topbar";
import { RiLockPasswordLine } from "react-icons/ri";
import UserFooter from "../../components/minorfooter";

const { Item } = Form;

const ChangePassword = () => {
  const [form] = Form.useForm();

  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState(false);
  const [response, setResponse] = useState("");
  const [error, setError] = useState(false);
  const [errorResponse, setErrorResponse] = useState("");

  const { user } = useSelector((state) => state.auth);

  const onFinish = async (values) => {
    let newValues = { ...values, email: user?.user?.email };

    setBusy(true);
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_BASE_URI + `/auth/update-password`,
        newValues,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      setBusy(false);
      setError(false);
      toast.success(data.msg);
      setResponse(data.msg);
      setSuccess(true);
      form.resetFields();
    } catch (error) {
      if (error?.response?.data) {
        const { data } = error.response;
        if (!data.success) {
          toast.error(data.msg);
          setSuccess(true);
          setError(true);
          setErrorResponse(data.msg);
        }
        setBusy(false);
        return console.log(error.response.data);
      }
      console.log(error);
      setBusy(false);
    }
    setBusy(false);
  };

  setTimeout(() => {
    setError(false);
  }, 10000);

  setTimeout(() => {
    setSuccess(false);
  }, 10000);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <DocumentTitle title="Reset Password | Payeer Pty Limited">
      <div style={{ width: "100%" }}>
        <Topbar />
        <div className="changepassword-cont">
          <h3>
            <RiLockPasswordLine /> {i18next.t("tuser37")}
          </h3>
          {success && (
            <div>
              <p className="account-success">{response}</p>
            </div>
          )}
          {error && (
            <div>
              <p className="account-error">{errorResponse}</p>
            </div>
          )}
          <div className="changepassword-cont-1">
            <Form
              form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              wrapperCol={{
                span: 24,
              }}
              layout="vertical"
              className="passwordchange-form"
            >
              <Item
                className="account-form-item"
                label={i18next.t("tuser38")}
                name="oldPassword"
                rules={[
                  {
                    required: true,
                    message: [i18next.t("tuser39")],
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  className="account-form-input"
                  placeholder={i18next.t("tuser40")}
                />
              </Item>
              <Item
                className="account-form-item"
                label={i18next.t("tuser41")}
                name="newPassword"
                rules={[
                  {
                    required: true,
                    message: [i18next.t("tuser42")],
                  },
                  {
                    min: 8,
                    message: [i18next.t("tuser43")],
                  },
                  {
                    pattern: new RegExp(
                      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
                    ),
                    message: [i18next.t("tuser44")],
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  className="account-form-input"
                  placeholder={i18next.t("tuser45")}
                />
              </Item>
              <Item
                className="account-form-item"
                label={i18next.t("tuser46")}
                name="confirmNewPassword"
                dependencies={["newPassword"]}
                rules={[
                  {
                    required: true,
                    message: [i18next.t("tuser47")],
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error([i18next.t("tuser48")]));
                    },
                  }),
                ]}
                hasFeedback
              >
                <Input.Password
                  className="account-form-input"
                  placeholder={i18next.t("tuser49")}
                />
              </Item>
              <Item
                shouldUpdate
                className="account-form-item"
                wrapperCol={{
                  span: 24,
                }}
              >
                {() => (
                  <Button
                    className="account-button"
                    htmlType="submit"
                    disabled={
                      busy ||
                      !form.isFieldsTouched(true) ||
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
                  >
                    {i18next.t("tuser50")}
                  </Button>
                )}
              </Item>
            </Form>
          </div>
        </div>
        <UserFooter />
      </div>
    </DocumentTitle>
  );
};

export default ChangePassword;
