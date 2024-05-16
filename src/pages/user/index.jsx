import React, { useEffect } from "react";
import "./style.css";
import i18next from "i18next";
import Topbar from "../../components/usertopbar/Topbar";
import UserFooter from "../../components/minorfooter";
import { Form, Input, Select, Button } from "antd";
import { useSelector } from "react-redux";
import DocumentTitle from "react-document-title";
import axios from "axios";
import { toast } from "react-toastify";
// import Spin from "../../components/Spinner";

const { Option } = Select;
const { Item } = Form;

const User = () => {
  const [form] = Form.useForm();
  // const [busy, setBusy] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const username = user?.user?.username;
  const firstname = user?.user?.firstname;
  const lastname = user?.user?.lastname;
  const email = user?.user?.email;
  const phone = "+" + user?.user?.phone;
  const country = user?.user?.country;
  const region = user?.user?.region;
  const occupation = user?.user?.occupation;
  const referral = user?.user?.referral;
  const currency = user?.user?.currency;

  useEffect(() => {
    form.setFieldsValue({
      username: username,
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      country: country,
      region: region,
      occupation: occupation,
      referral: referral,
      currency: currency,
    });
  }, [
    form,
    username,
    firstname,
    lastname,
    email,
    phone,
    country,
    region,
    occupation,
    referral,
    currency,
  ]);

  const token = user?.token;
  const windowReload = () => window.location.reload();

  const onFinish = async (values) => {
    try {
      await axios.patch(
        process.env.REACT_APP_BASE_URI + `/auth/${user?.user?.id}`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      windowReload();
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
  // if (busy) {
  //   return <Spin />;
  // }
  return (
    <DocumentTitle title="User Information | Payeer Pty Limited">
      <div className="user-main">
        <Topbar />
        <div className="user-main-1">
          <h2>{i18next.t("tuser26")}</h2>
          <div className="user-main-1-0">
            <div className="user-main-1-1">
              <Form
                form={form}
                wrapperCol={{
                  span: 24,
                }}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Item
                  className="account-form-item"
                  name="username"
                  label={i18next.t("tuser28")}
                >
                  <Input className="account-form-input" readOnly={true} />
                </Item>
                <Item
                  className="account-form-item"
                  name="firstname"
                  label={i18next.t("tuser29")}
                >
                  <Input className="account-form-input" readOnly={true} />
                </Item>
                <Item
                  className="account-form-item"
                  name="lastname"
                  label={i18next.t("tuser30")}
                >
                  <Input className="account-form-input" readOnly={true} />
                </Item>
                <Item
                  className="account-form-item"
                  name="email"
                  label={i18next.t("tuser31")}
                >
                  <Input className="account-form-input" readOnly={true} />
                </Item>
                <Item
                  className="account-form-item"
                  name="phone"
                  label={i18next.t("tuser32")}
                >
                  <Input className="account-form-input" readOnly={true} />
                </Item>
                <Item
                  className="account-form-item"
                  name="country"
                  label={i18next.t("tuser33")}
                >
                  <Input className="account-form-input" readOnly={true} />
                </Item>
                <Item
                  className="account-form-item"
                  name="region"
                  label={i18next.t("tuser34")}
                >
                  <Input className="account-form-input" readOnly={true} />
                </Item>
                <Item
                  className="account-form-item"
                  name="occupation"
                  label={i18next.t("tuser35")}
                >
                  <Input className="account-form-input" readOnly={true} />
                </Item>
                <Item
                  className="account-form-item"
                  name="referral"
                  label={i18next.t("tuser36")}
                >
                  <Input className="account-form-input" readOnly={true} />
                </Item>
                <div className="change-curr">
                  <h4>{i18next.t("tncurr3")}</h4>
                  <Item
                    label="Currency"
                    className="account-form-item"
                    name="currency"
                    rules={[
                      {
                        required: true,
                        message: [i18next.t("tncurr3")],
                      },
                    ]}
                  >
                    <Select optionFilterProp="children">
                      <Option value="USD">USD</Option>
                      <Option value="EUR">EUR</Option>
                      <Option value="GBP">GBP</Option>
                      <Option value="ZAR">ZAR</Option>
                      <Option value="UGX">UGX</Option>
                    </Select>
                  </Item>
                </div>
                <Item
                  shouldUpdate
                  className="account-form-item change-curr-item"
                  wrapperCol={{
                    span: 24,
                  }}
                >
                  {() => (
                    <Button
                      className="change-curr-button"
                      htmlType="submit"
                      disabled={
                        !!form
                          .getFieldsError()
                          .filter(({ errors }) => errors.length).length
                      }
                    >
                      {i18next.t("tncurr4")}
                    </Button>
                  )}
                </Item>
              </Form>
            </div>
          </div>
        </div>

        <UserFooter />
      </div>
    </DocumentTitle>
  );
};

export default User;
