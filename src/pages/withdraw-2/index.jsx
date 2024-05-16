import React, { useState } from "react";
import "./style.css";
import i18next from "i18next";
import { Form, Input, Button } from "antd";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import DocumentTitle from "react-document-title";
import axios from "axios";
import { useIsMounted } from "../../components/isMountedHook";

const { Item } = Form;

const Withdrawal = () => {
  const [form] = Form.useForm();
  const [busy, setBusy] = useState(false);
  const isMounted = useIsMounted();

  const { user } = useSelector((state) => state.auth);

  //const navigate = useNavigate();
  const windowReload = () => window.location.reload();
  const onFinish = async (values) => {
    let newValues = { ...values, email: user?.user?.email };

    setBusy(true);
    try {
      await axios.post(
        process.env.REACT_APP_BASE_URI + `/auth/withdrawal-verification`,
        newValues,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      setBusy(false);
      toast.success(i18next.t("tnwithdrawal1"));
      windowReload();
      //navigate("/funds/withdraw", { replace: true });
    } catch (error) {
      if (error?.response?.data) {
        const { data } = error.response;
        if (!data.success) {
          toast.error(data.msg);
          setBusy(false);
        }
        if (isMounted) {
          setBusy(false);
        }
        return console.log(error.response.data);
      }

      console.log(error);
      setBusy(false);
      form.resetFields();
    }
    if (isMounted) {
      setBusy(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return user?.user?.withdrawalactive ? (
    <DocumentTitle title="Confirm Withdrawal | Payeer Pty Limited">
      <div className="confirm-withdrawal-main">
        <h3 className="confirm-withdrawal-heading">
          {i18next.t("tnconfirm1")}
        </h3>
        <p>
          {i18next.t("tnwithdraw1")} <b>{user?.user?.email}</b>.{" "}
          {i18next.t("tnwithdraw2")} <em>{i18next.t("tnwithdraw3")}.</em>
        </p>
        <p className="pspan">{i18next.t("tnconfirm3")}</p>
        <div className="confirm-withdrawal-main-1">
          <div className="confirm-withdrawal-form">
            <Form
              form={form}
              name="confirm-withdrawal"
              wrapperCol={{
                span: 24,
              }}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Item
                label="Enter Code"
                className="confirm-withdrawal-form-item"
                name="code"
                rules={[
                  {
                    pattern: /^(?:\d*)$/,
                    message: [i18next.t("tnconfirm4")],
                  },
                  {
                    min: 6,
                    max: 6,
                    message: [i18next.t("tnconfirm5")],
                  },
                  {
                    required: true,
                    message: [i18next.t("tnconfirm6")],
                  },
                ]}
                hasFeedback
              >
                <Input
                  className="confirm-withdrawal-form-input"
                  placeholder={i18next.t("tnconfirm7")}
                />
              </Item>
              <Item
                className="confirm-withdrawal-form-item"
                wrapperCol={{
                  span: 24,
                }}
              >
                <Button
                  disabled={
                    busy ||
                    !form.isFieldsTouched(true) ||
                    !!form
                      .getFieldsError()
                      .filter(({ errors }) => errors.length).length
                  }
                  className="confirm-withdrawal-form-button"
                  htmlType="submit"
                >
                  {i18next.t("tnconfirm7")}
                </Button>
              </Item>
            </Form>
          </div>
        </div>
      </div>
    </DocumentTitle>
  ) : (
    <Navigate to="/funds/withdraw" />
  );
};

export default Withdrawal;
