import React, { useState, useEffect } from "react";
import "./style.css";
import i18next from "i18next";
import { Form, Input, Button, Switch, Select } from "antd";
import { FaUser } from "react-icons/fa";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { register, reset } from "../../redux/slice/userSlice";
import Spinner from "react-bootstrap/Spinner";
import DocumentTitle from "react-document-title";

const { Item } = Form;
const { Option } = Select;

const Register = () => {
  const [form] = Form.useForm();

  const [phone, setPhone] = useState({});
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [requiredMark, setRequiredMarkType] = useState("optional");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { username } = queryString.parse(location.search);

  const { user, isFetching, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      setErrorMessage(message);
      setError(true);
    }
    if (isSuccess) {
      navigate("/registration-successful");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch, navigate]);

  const onFinish = (values) => {
    dispatch(register(values));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  setTimeout(() => {
    setError(false);
  }, 10000);

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  return (
    <DocumentTitle title="Register With Us | Payeer Pty Limited">
      <div className="register-main">
        <h3 className="register-heading">
          <FaUser />
          &nbsp; {i18next.t("tnregister1")}
        </h3>
        <div className="register-main-1">
          <div className="register-form">
            <Form
              form={form}
              name="register"
              initialValues={{
                requiredMarkValue: requiredMark,
                referral: username ? username : "",
                currency: [i18next.t("tncurr2")],
              }}
              onValuesChange={onRequiredTypeChange}
              requiredMark={requiredMark}
              wrapperCol={{
                span: 24,
              }}
              layout="vertical"
              autoComplete="off"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <div className="register-form-1">
                <div className="register-form-1-1">
                  <Item
                    className="register-form-item name-form-item"
                    label={i18next.t("tregister31")}
                    name="firstname"
                    rules={[
                      {
                        required: true,
                        message: [i18next.t("tregister32")],
                      },
                      { whitespace: true },
                      { type: "string" },
                    ]}
                    hasFeedback
                  >
                    <Input
                      className="register-form-input name-form-input"
                      placeholder={i18next.t("tregister31")}
                    />
                  </Item>
                </div>
                <div className="register-form-1-2">
                  <Item
                    className="register-form-item name-form-item"
                    label={i18next.t("tregister33")}
                    name="lastname"
                    rules={[
                      {
                        required: true,
                        message: [i18next.t("tregister34")],
                      },
                      { whitespace: true },
                      { type: "string" },
                    ]}
                    hasFeedback
                  >
                    <Input
                      className="register-form-input name-form-input"
                      placeholder={i18next.t("tregister33")}
                    />
                  </Item>
                </div>
              </div>

              <Item
                className="register-form-item"
                label={i18next.t("tregister35")}
                name="username"
                rules={[
                  {
                    required: true,
                    message: [i18next.t("tregister36")],
                  },
                  { whitespace: true },
                  { type: "string" },
                ]}
                hasFeedback
              >
                <Input
                  className="register-form-input"
                  placeholder={i18next.t("tregister35")}
                />
              </Item>
              <Item
                className="register-form-item"
                label={i18next.t("tregister37")}
                name="email"
                rules={[
                  {
                    type: "email",
                    message: [i18next.t("tregister38")],
                  },
                  {
                    required: true,
                    message: [i18next.t("tregister39")],
                  },
                ]}
                hasFeedback
              >
                <Input
                  className="register-form-input"
                  placeholder={i18next.t("tregister37")}
                />
              </Item>
              <Item
                label={i18next.t("tncurr1")}
                className="register-form-item"
                name="currency"
                rules={[
                  {
                    required: true,
                    message: [i18next.t("tncurr2")],
                  },
                ]}
              >
                <Select
                  className="register-form-currency"
                  optionFilterProp="children"
                >
                  <Option value="USD">USD</Option>
                  <Option value="EUR">EUR</Option>
                  <Option value="GBP">GBP</Option>
                  <Option value="ZAR">ZAR</Option>
                  <Option value="UGX">UGX</Option>
                </Select>
              </Item>
              <Item
                className="register-form-item"
                label={i18next.t("tregister40")}
                name="occupation"
                rules={[
                  {
                    required: true,
                    message: [i18next.t("tregister41")],
                  },
                  { whitespace: true },
                  { type: "string" },
                ]}
                hasFeedback
              >
                <Input
                  className="register-form-input"
                  placeholder={i18next.t("tregister40")}
                />
              </Item>
              <Item
                className="register-form-item"
                label={i18next.t("tregister42")}
                name="country"
                rules={[
                  {
                    required: true,
                    message: [i18next.t("tregister43")],
                  },
                ]}
                hasFeedback
              >
                <CountryDropdown
                  className="register-form-country"
                  value={country}
                  onChange={(val) => setCountry(val)}
                />
              </Item>
              <Item
                className="register-form-item"
                label={i18next.t("tregister44")}
                name="region"
                rules={[
                  {
                    required: true,
                    message: [i18next.t("tregister45")],
                  },
                ]}
                hasFeedback
              >
                <RegionDropdown
                  className="register-form-region"
                  country={country}
                  value={region}
                  onChange={(val) => setRegion(val)}
                />
              </Item>
              <Item
                className="register-form-item-phone"
                label={i18next.t("tregister46")}
                name="phone"
                rules={[
                  {
                    required: true,
                    message: [i18next.t("tregister47")],
                  },
                ]}
                hasFeedback
              >
                <PhoneInput
                  country={"us"}
                  className="register-form-phone"
                  value={phone}
                  onChange={(phone) => setPhone({ phone })}
                />
              </Item>
              <Item
                className="register-form-item"
                label={i18next.t("tregister48")}
                name="password"
                rules={[
                  {
                    required: true,
                    message: [i18next.t("tregister49")],
                  },
                  { min: 8, message: [i18next.t("tregister50")] },
                  {
                    pattern: new RegExp(
                      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
                    ),
                    message: [[i18next.t("tregister51")]],
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  className="register-form-input"
                  placeholder={i18next.t("tregister48")}
                />
              </Item>
              <Item
                className="register-form-item"
                label={i18next.t("tregister52")}
                name="password2"
                dependencies={["password"]}
                rules={[
                  {
                    required: true,
                    message: [i18next.t("tregister53")],
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error([i18next.t("tregister54")])
                      );
                    },
                  }),
                ]}
                hasFeedback
              >
                <Input.Password
                  className="register-form-input"
                  placeholder={i18next.t("tregister52")}
                />
              </Item>
              <Item className="register-form-item" name="referral" hasFeedback>
                <Input
                  className="register-form-input"
                  placeholder={i18next.t("tregister57")}
                />
              </Item>
              <div className="switch-cont">
                <strong>
                  {i18next.t("tregister58")}{" "}
                  <a href="/terms-and-conditions">{i18next.t("tregister59")}</a>
                </strong>
                <Item valuePropName="checked" hasFeedback>
                  <Switch
                    onChange={(value) => {
                      setChecked(value);
                    }}
                    className="register-switch"
                  />
                </Item>
              </div>
              <Item
                shouldUpdate
                className="register-form-item"
                wrapperCol={{
                  span: 24,
                }}
              >
                {() => (
                  <Button
                    className="register-button-1"
                    htmlType="submit"
                    disabled={
                      !checked ||
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
                    &nbsp; {i18next.t("tregister60")}
                  </Button>
                )}
              </Item>
              <Item
                className="register-form-item"
                wrapperCol={{
                  span: 24,
                }}
              >
                <Button className="register-button-2">
                  <a href="/login" className="register-link">
                    {i18next.t("tregister61")}
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
    </DocumentTitle>
  );
};

export default Register;
