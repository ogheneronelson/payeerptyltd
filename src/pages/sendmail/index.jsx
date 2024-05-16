import React, { useState } from "react";
import "./style.css";
import i18next from "i18next";
import { Select, Input, Form, Button } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import DocumentTitle from "react-document-title";

const { Option } = Select;
const { Item } = Form;
const { TextArea } = Input;

const SendMail = () => {
  const [form] = Form.useForm();

  const [busy, setBusy] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const onFinish = async (values) => {
    let newValues = { ...values, email: user?.user?.email };
    setBusy(true);
    try {
      await axios.post(
        process.env.REACT_APP_BASE_URI + `/auth/send-message`,
        newValues,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      setBusy(false);
      toast.success(i18next.t("tsendmail1"));
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
    <DocumentTitle title="Email Us | Payeer Pty Limited">
      <div className="sendmail-main">
        <h3>{i18next.t("tsendmail2")}</h3>
        <Form
          form={form}
          initialValues={{
            title: i18next.t("tsendmail3"),
          }}
          wrapperCol={{
            span: 24,
          }}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Item
            className="sendmail-select-item"
            name="title"
            rules={[
              {
                required: true,
                message: [i18next.t("tsendmail4")],
              },
            ]}
          >
            <Select className="sendmail-select" optionFilterProp="children">
              <Option value="deposite">{i18next.t("tsendmail5")}</Option>
              <Option value="withdrawal">{i18next.t("tsendmail6")}</Option>
              <Option value="transfer">{i18next.t("tsendmail7")}</Option>
              <Option value="account">{i18next.t("tsendmail8")}</Option>
              <Option value="other">{i18next.t("tsendmail9")}</Option>
            </Select>
          </Item>
          <Item
            className="sendmail-form-item"
            name="message"
            label={i18next.t("tsendmail10")}
            rules={[
              {
                type: "string",
              },
              {
                required: true,
                message: [i18next.t("tsendmail11")],
              },
            ]}
          >
            <TextArea
              rows={10}
              placeholder={i18next.t("tsendmail12")}
              className="sendmail-form-input"
            />
          </Item>

          <Item
            shouldUpdate
            className="sendmail-button-item"
            wrapperCol={{
              span: 24,
            }}
          >
            {() => (
              <Button
                className="sendmail-button"
                htmlType="submit"
                disabled={
                  busy ||
                  !form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length)
                    .length
                }
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
                &nbsp; {i18next.t("tsendmail13")}
              </Button>
            )}
          </Item>
        </Form>
      </div>
    </DocumentTitle>
  );
};

export default SendMail;
