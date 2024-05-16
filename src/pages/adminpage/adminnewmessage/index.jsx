import React, { useState, useEffect } from "react";
import "./style.css";
import { Checkbox, Input, Form, Button } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";

const { Item } = Form;
const { TextArea } = Input;

const AdminNewMessage = () => {
  const [form] = Form.useForm();

  const [busy, setBusy] = useState(false);
  const [user, setUser] = useState([]);
  const [checked, setChecked] = useState(false);

  const { admin } = useSelector((state) => state.admin);

  const token = admin.token;
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setBusy(true);
      try {
        const res = await axios.get(
          process.env.REACT_APP_BASE_URI + `/admin/${params.userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBusy(false);
        setUser(res.data);
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
      setBusy(false);
    };
    fetchData();
  }, [token, params.userId]);

  const checkChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    form.setFieldsValue({
      to: user?.email,
    });
  }, [form, user?.email]);

  const onFinish = async (values) => {
    setBusy(true);
    try {
      await axios.post(
        process.env.REACT_APP_BASE_URI + `/admin/send-mail`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (checked === true) {
        const { to} = values;
        await axios.post(
          `https://api.ravenhub.io/company/ikdMqEY9xP/subscribers/${to}/events/oCACHxu1nh`,
          { priority: "Critical" },
          {
            headers: { "Content-type": "application/json" },
          }
        );
      }
      setBusy(false);
      toast.success("Message sent successfully");
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
    <div className="admin-sendmail-main">
      <h3>Message User</h3>
      <Form
        form={form}
        wrapperCol={{
          span: 24,
        }}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Item className="admin-sendmail-form-item" name="from" label="From">
          <Input className="admin-sendmail-form-input" placeholder="Sender's Email" />
        </Item>
        <Item className="admin-sendmail-form-item" name="to" label="To">
          <Input
            className="admin-sendmail-form-input"
            placeholder="Receiver's Email"
          />
        </Item>
        <Item className="admin-sendmail-form-item" name="subject" label="Subject">
          <Input className="admin-sendmail-form-input" placeholder="Mail Subject" />
        </Item>
        <Item
          className="admin-sendmail-form-item"
          name="message"
          label="Message Body"
          rules={[
            {
              type: "string",
            },
            {
              required: true,
              message: "Please enter your message",
            },
          ]}
        >
          <TextArea
            rows={10}
            placeholder="Message"
            className="admin-sendmail-form-input"
          />
        </Item>
        <Item>
          <Checkbox onChange={checkChange}>
            {checked === true ? "Send Notifiation" : "Don't Send Notification"}
          </Checkbox>
        </Item>
        <Item
          shouldUpdate
          className="admin-sendmail-button-item"
          wrapperCol={{
            span: 24,
          }}
        >
          {() => (
            <Button
              className="admin-sendmail-button"
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
              &nbsp; Send Message
            </Button>
          )}
        </Item>
      </Form>
    </div>
  );
};

export default AdminNewMessage;
