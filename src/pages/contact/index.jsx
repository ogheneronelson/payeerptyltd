import React, { useState } from "react";
import "./style.css";
import i18next from "i18next";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { Form, Input, Button } from "antd";
import Address from "../../components/Address";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import DocumentTitle from "react-document-title";
import Reusebg from "../../components/reuse";

const Contact = () => {
  const [form] = Form.useForm();

  const [busy, setBusy] = useState(false);

  const onFinish = async (values) => {
    setBusy(true);
    try {
      await axios.post(
        process.env.REACT_APP_BASE_URI + `/auth/messages`,
        values
      );
      setBusy(false);
      toast.success("Message Sent");
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
    <DocumentTitle title="Contact Us | Payeer Pty Limited">
      <div className="contact-main">
        <Reusebg>
          <div className="reuse-container">
            <h1 className="reuse-heading">{i18next.t("thome4")}</h1>
            <p className="reuse-text">
              Home <span> {">"} Contact Us </span>
            </p>
          </div>
        </Reusebg>
        <div className="contact-container-main">
          <h2>{i18next.t("thome4")}</h2>
          <div className="contact-sub">
            <div className="contact-sub-1">
              <h2>{i18next.t("tcontact1")}</h2>
              <Form
                form={form}
                name="messages"
                wrapperCol={{
                  span: 24,
                }}
                layout="vertical"
                autoComplete="on"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <div className="contact-sub-1-1">
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: [i18next.t("tcontact2")],
                      },
                      { whitespace: true },
                      { type: "string" },
                    ]}
                    className="message-form-cont"
                  >
                    <Input
                      className="message-input message-div-input"
                      placeholder={i18next.t("tcontact3")}
                    />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: [i18next.t("tcontact4")],
                      },
                      {
                        required: true,
                        message: [i18next.t("tcontact5")],
                      },
                    ]}
                    hasFeedback
                  >
                    <Input
                      className="message-input message-div-input"
                      placeholder={i18next.t("tcontact6")}
                    />
                  </Form.Item>
                </div>
                <Form.Item
                  name="subject"
                  rules={[
                    {
                      required: true,
                      message: [i18next.t("tcontact7")],
                    },
                    { whitespace: true },
                    { type: "string" },
                  ]}
                  hasFeedback
                >
                  <Input
                    className="message-input"
                    placeholder={i18next.t("tcontact8")}
                  />
                </Form.Item>
                <Form.Item
                  name="message"
                  rules={[
                    {
                      required: true,
                      message: [i18next.t("tcontact9")],
                    },
                    { whitespace: true },
                    { type: "string" },
                  ]}
                  hasFeedback
                >
                  <Input.TextArea
                    className="message-input"
                    rows={4}
                    placeholder={i18next.t("tcontact10")}
                  />
                </Form.Item>

                <Form.Item
                  shouldUpdate
                  wrapperCol={{
                    span: 8,
                  }}
                >
                  {() => (
                    <Button
                      className="message-button"
                      htmlType="submit"
                      disabled={
                        busy ||
                        !form.isFieldsTouched(true) ||
                        !!form
                          .getFieldsError()
                          .filter(({ errors }) => errors.length).length
                      }
                    >
                      {i18next.t("tcontact11")}
                    </Button>
                  )}
                </Form.Item>
              </Form>
            </div>
            <div className="contact-sub-2">
              <div>
                <h3>
                  <HomeWorkOutlinedIcon /> {i18next.t("tcontact12")}
                </h3>
                <p>
                  203 Fake St. Mountain View, San Francisco, California, USA.
                </p>
              </div>
              <div>
                <h3>
                  <HomeWorkOutlinedIcon /> {i18next.t("tcontact13")}
                </h3>
                <p>
                  28 rue des Nations Unies, Saint-denis, 92000 Île-de-France,
                  France
                </p>
              </div>
              <div>
                <h3>
                  <MarkEmailReadOutlinedIcon /> {i18next.t("tcontact14")}
                </h3>
                <p>support@payeerptyltd.org</p>
              </div>
              <div>
                <h3>
                  <PhoneOutlinedIcon /> {i18next.t("tcontact15")}
                </h3>
                <p>++1-392-3929-210 ({i18next.t("tcontact16")})</p>
              </div>
            </div>
          </div>

          <div>
            <Address />
          </div>
          <div>
            <ul>
              <li>{i18next.t("tcontact17")}</li>

              <li>{i18next.t("tcontact18")}</li>
              <li>{i18next.t("tcontact19")}</li>
              <li>{i18next.t("tcontact20")}</li>
            </ul>
          </div>
        </div>
        <ToastContainer />
      </div>
    </DocumentTitle>
  );
};

export default Contact;
