import React, { useState } from "react";
import "./style.css";
import i18next from "i18next";
import { Form, Input, Button } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import DocumentTitle from "react-document-title";

const { Item } = Form;

const ResendConfirmation = () => {
  const [busy, setBusy] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setBusy(true);
    try {
      await axios.post(
        process.env.REACT_APP_BASE_URI + "/auth//resend-confirmation-email",
        values
      );
      setBusy(false);
      toast.success("Confirmation email sent!");
      form.resetFields();
    } catch (error) {
      if (error?.response?.data) {
        const { data } = error.response;
        if (!data.success) {
          toast.error(data.msg);
        }
        setBusy(false);

        return console.log(error.response.data);
      }
      setBusy(false);
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <DocumentTitle title="Resend Confirmation Link | Payeer Pty Limited">
      <div className="resend-confirmation-main">
        <h3 className="resend-confirmation-heading">
          {i18next.t("tresend124")}
        </h3>
        <div className="resend-confirmation-main-1">
          <div className="resend-confirmation-form">
            <Form
              name="resend-confirmation"
              form={form}
              wrapperCol={{
                span: 24,
              }}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Item
                label={i18next.t("tresend125")}
                className="resend-confirmation-form-item"
                name="email"
                rules={[
                  {
                    type: "email",
                    message: [i18next.t("tresend126")],
                  },
                  {
                    required: true,
                    message: [i18next.t("tresend127")],
                  },
                ]}
                hasFeedback
              >
                <Input
                  className="resend-confirmation-form-input"
                  placeholder={i18next.t("tresend128")}
                />
              </Item>
              <Item
                className="resend-confirmation-form-item"
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
                  className="resend-confirmation-form-button"
                  htmlType="submit"
                >
                  {busy && (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  )}
                  &nbsp; {i18next.t("tresend129")}
                </Button>
              </Item>
              <div className="resend-confirmation-cont">
                <a className="return-to-login" href="login">
                  {i18next.t("tresend130")}
                </a>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </DocumentTitle>
  );
};

export default ResendConfirmation;
