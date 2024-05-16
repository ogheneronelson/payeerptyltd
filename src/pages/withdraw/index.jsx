import React, { useState, useEffect } from "react";
import "./style.css";
import i18next from "i18next";
import { Select, Form, Input, InputNumber, Button } from "antd";
import { CountryDropdown } from "react-country-region-selector";
import { useLocation, Navigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import moment from "moment";
//import Spinner from "react-bootstrap/Spinner";
import DocumentTitle from "react-document-title";
import { SiCashapp } from "react-icons/si";
import { SiBitcoinsv } from "react-icons/si";
import { useIsMounted } from "../../components/isMountedHook";

const { Option } = Select;
const { Item } = Form;

const Withdraw = () => {
  const [form] = Form.useForm();
  const isMounted = useIsMounted();

  const [amount, setAmount] = useState();
  // const [busy, setBusy] = useState(false);
  const [isCrypto, setIsCrypto] = useState(false);
  const [isBank, setIsBank] = useState(false);
  const [busy, setBusy] = useState(false);
  const [country, setCountry] = useState("");

  const [withdrawalData, setWithdrawalData] = useState([]);

  const { user } = useSelector((state) => state.auth);
  const { exchangeData } = useSelector((state) => state.exchange);

  const userCurrency = user?.user?.currency;
  const curr = exchangeData?.rates[userCurrency];

  const capitalizeFirstLetter = (name) => {
    return name[0].toUpperCase() + name.slice(1);
  };

  const location = useLocation();
  //const navigate = useNavigate();

  const { BTC, ETH, BNB, USDT, LTC, BCH, withdrawalactive } = user?.user;
  const withdrawProfit =
    BTC?.profit +
    USDT?.profit +
    ETH?.profit +
    BNB?.profit +
    LTC?.profit +
    BCH?.profit +
    BTC?.bonus +
    ETH?.bonus +
    BNB?.bonus +
    USDT?.bonus +
    LTC?.bonus +
    BCH?.bonus;

  const onMethodSelect = (value) => {
    switch (value) {
      case "crypto":
        setIsCrypto(true);
        setIsBank(false);

        break;

      case "bank":
        setIsBank(true);
        setIsCrypto(false);

        break;
      default:
        return null;
    }
  };

  useEffect(() => {
    const fetchWithdrawalData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_BASE_URI +
            `/auth/withdrawals/${user?.user?.id}`,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );

        if (isMounted.current) {
          setWithdrawalData(res.data);
        }
      } catch (error) {
        if (error?.response?.data) {
          const { data } = error.response;
          if (!data.success) {
            toast.error(data.msg);
          }

          return console.log(error.response.data);
        }
      }
    };
    fetchWithdrawalData();
  }, [user?.token, user?.user?.id, isMounted]);

  const amountChange = (value) => {
    setAmount(value);
  };

  const windowReload = () => window.location.reload();

  const onFinish = async (values) => {
    if (values.country === "Uganda") {
      let newValues = {
        country,
        mobileNetwork: values.mobileNetwork,
        mobileNumber: values.mobileNumber,
        comment: values.comment,
        email: user?.user?.email,
        type: values.type,
        amount: values.amount,
        amountCurr: (
          (values.amount / exchangeData?.rates?.UGX) *
          exchangeData?.rates[userCurrency]
        ).toFixed(2),
      };
      setBusy(true);
      try {
        await axios.post(
          process.env.REACT_APP_BASE_URI + `/auth/withdrawal`,
          newValues,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );
        setBusy(false);
        form.resetFields();
        toast.success(i18next.t("twithdraw88"));
        windowReload();
        //navigate("/funds/complete-withdrawal", { replace: false });
        // redirect("/funds/complete-withdrawal");
      } catch (error) {
        if (error?.response?.data) {
          const { data } = error.response;
          if (!data.success) {
            toast.error(data.msg);
          }
          setBusy(false);

          return console.log(error.response.data);
        }
        if (isMounted) {
          setBusy(false);
        }
      }
    } else {
      let newValues = {
        ...values,
        email: user?.user?.email,
        amountCurr: (values.amount * curr).toFixed(2),
      };
      console.log(newValues.amountCurr);
      setBusy(true);
      try {
        await axios.post(
          process.env.REACT_APP_BASE_URI + `/auth/withdrawal`,
          newValues,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );
        setBusy(false);
        form.resetFields();
        toast.success(i18next.t("twithdraw88"));
        windowReload();
        // navigate("/funds/complete-withdrawal", { replace: false });
        //redirect("/funds/complete-withdrawal");
      } catch (error) {
        if (error?.response?.data) {
          const { data } = error.response;
          if (!data.success) {
            toast.error(data.msg);
          }
          setBusy(false);
          return console.log(error.response.data);
        }
        if (isMounted) {
          setBusy(false);
        }
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return !withdrawalactive ? (
    <DocumentTitle title="Withdraw Funds | Binance FX Trading">
      <div className="withdraw-main">
        <Form
          form={form}
          initialValues={{
            coin: location?.state?.from
              ? location?.state?.from
              : i18next.t("twithdraw90"),
            type: [i18next.t("tncurr27")],
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div className="withdraw-main-1">
            <Item
              className="withdraw-form-item withdraw-select-item"
              name="type"
            >
              <Select
                className="withdraw-form-input"
                optionFilterProp="children"
                onChange={onMethodSelect}
              >
                <Option value="crypto">
                  <SiBitcoinsv />
                  Cryptocurrency
                </Option>
                <Option value="bank">
                  <SiCashapp />
                  Bank Transfer
                </Option>
              </Select>
            </Item>
          </div>
          {isCrypto && (
            <div className="withdraw-main-1">
              <div className="withdraw-main-1-1">
                <Item
                  className="withdraw-amount-form-item withdraw-form-item"
                  name="amount"
                  rules={[
                    {
                      required: true,
                      message: [i18next.t("twithdraw91")],
                    },
                  ]}
                >
                  <InputNumber
                    min={1000}
                    addonAfter="$"
                    className="withdraw-amount-form-input"
                    placeholder={i18next.t("twithdraw92")}
                    onChange={amountChange}
                  />
                </Item>
                <Item
                  className="withdraw-form-item withdraw-select-item"
                  name="coin"
                  rules={[
                    {
                      required: true,
                      message: [i18next.t("twithdraw93")],
                    },
                  ]}
                >
                  <Select
                    className="withdraw-form-input"
                    optionFilterProp="children"
                  >
                    <Option value="bitcoin">
                      <img
                        src="https://i.imgur.com/Lh9hdU2.png"
                        alt="bitcoin"
                        className="crypto-coin-logo"
                      />
                      Bitcoin
                    </Option>
                    <Option value="ethereum">
                      <img
                        src="https://i.imgur.com/VSGKPLd.png"
                        alt="etheruem"
                        className="crypto-coin-logo"
                      />
                      Etheruem
                    </Option>
                    <Option value="binancecoin">
                      <img
                        src="https://i.imgur.com/zxO0qlv.png"
                        alt="binance coin"
                        className="crypto-coin-logo"
                      />
                      Binance coin
                    </Option>
                    <Option value="tether">
                      <img
                        src="https://i.imgur.com/Sjieype.png"
                        alt="tether"
                        className="crypto-coin-logo"
                      />
                      Tether
                    </Option>
                    <Option value="litecoin">
                      <img
                        src="https://i.imgur.com/RsAjmtR.png"
                        alt="litecoin"
                        className="crypto-coin-logo"
                      />
                      Litecoin
                    </Option>
                    <Option value="bitcoincash">
                      <img
                        src="https://i.imgur.com/QrVLidk.png"
                        alt="bitcoin cash"
                        className="crypto-coin-logo"
                      />
                      Bitcoin cash
                    </Option>
                  </Select>
                </Item>
                <Item
                  className="withdraw-form-item"
                  name="walletAddress"
                  rules={[
                    {
                      type: "string",
                    },
                    {
                      required: true,
                      message: [i18next.t("twithdraw94")],
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    className="withdraw-form-input"
                    placeholder={i18next.t("twithdraw95")}
                  />
                </Item>
                <Item className="withdraw-form-item" name="comment">
                  <Input
                    className="withdraw-form-input"
                    placeholder={i18next.t("twithdraw96")}
                  />
                </Item>
              </div>
            </div>
          )}
          {isBank && (
            <div className="withdraw-main-1">
              <div className="withdraw-main-1-1">
                <Item
                  className="withdraw-form-item"
                  name="country"
                  rules={[
                    {
                      required: true,
                      message: [i18next.t("tncurr5")],
                    },
                  ]}
                  hasFeedback
                >
                  <CountryDropdown
                    className="withdraw-form-input"
                    value={country}
                    onChange={(val) => setCountry(val)}
                  />
                </Item>
                {country === "Uganda" && (
                  <>
                    <Item
                      className="withdraw-amount-form-item withdraw-form-item"
                      name="amount"
                      rules={[
                        {
                          required: true,
                          message: [i18next.t("twithdraw91")],
                        },
                      ]}
                    >
                      <InputNumber
                        addonAfter="$"
                        className="withdraw-amount-form-input"
                        placeholder={i18next.t("twithdraw92")}
                        onChange={amountChange}
                      />
                    </Item>
                    <Item
                      className="withdraw-form-item"
                      name="mobileNetwork"
                      rules={[
                        {
                          type: "string",
                        },
                        {
                          required: true,
                          message: "Enter your moblie network provider",
                        },
                      ]}
                      hasFeedback
                    >
                      <Input
                        className="withdraw-form-input"
                        placeholder="Mobile Network"
                      />
                    </Item>{" "}
                    <Item
                      className="withdraw-form-item"
                      name="mobileNumber"
                      rules={[
                        {
                          type: "string",
                        },
                        {
                          required: true,
                          message: "Enter ypur mobile number",
                        },
                      ]}
                      hasFeedback
                    >
                      <Input
                        className="withdraw-form-input"
                        placeholder="Mobile Number"
                      />
                    </Item>{" "}
                  </>
                )}

                {country !== "Uganda" && (
                  <>
                    <Item
                      className="withdraw-amount-form-item withdraw-form-item"
                      name="amount"
                      rules={[
                        {
                          required: true,
                          message: [i18next.t("twithdraw91")],
                        },
                      ]}
                    >
                      <InputNumber
                        min={1000}
                        addonAfter="$"
                        className="withdraw-amount-form-input"
                        placeholder={i18next.t("twithdraw92")}
                        onChange={amountChange}
                      />
                    </Item>
                    <Item
                      className="withdraw-form-item"
                      name="bankName"
                      rules={[
                        {
                          type: "string",
                        },
                        {
                          required: true,
                          message: [i18next.t("tncurr6")],
                        },
                      ]}
                      hasFeedback
                    >
                      <Input
                        className="withdraw-form-input"
                        placeholder={i18next.t("tncurr7")}
                      />
                    </Item>{" "}
                    <Item
                      className="withdraw-form-item"
                      name="bankAddress"
                      rules={[
                        {
                          type: "string",
                        },
                        {
                          required: true,
                          message: [i18next.t("tncurr10")],
                        },
                      ]}
                      hasFeedback
                    >
                      <Input
                        className="withdraw-form-input"
                        placeholder={i18next.t("tncurr11")}
                      />
                    </Item>{" "}
                    <Item
                      className="withdraw-form-item"
                      name="accountName"
                      rules={[
                        {
                          type: "string",
                        },
                        {
                          required: true,
                          message: [i18next.t("tncurr12")],
                        },
                      ]}
                      hasFeedback
                    >
                      <Input
                        className="withdraw-form-input"
                        placeholder={i18next.t("tncurr13")}
                      />
                    </Item>
                    <Item
                      className="withdraw-form-item"
                      name="accountNumber"
                      rules={[
                        {
                          type: "string",
                        },
                        {
                          required: true,
                          message: [i18next.t("tncurr14")],
                        },
                      ]}
                      hasFeedback
                    >
                      <Input
                        className="withdraw-form-input"
                        placeholder={i18next.t("tncurr15")}
                      />
                    </Item>{" "}
                    <Item
                      className="withdraw-form-item"
                      name="accountType"
                      rules={[
                        {
                          type: "string",
                        },
                        {
                          required: true,
                          message: [i18next.t("tncurr16")],
                        },
                      ]}
                      hasFeedback
                    >
                      <Input
                        className="withdraw-form-input"
                        placeholder={i18next.t("tncurr17")}
                      />
                    </Item>{" "}
                  </>
                )}
                <Item className="withdraw-form-item" name="comment">
                  <Input
                    className="withdraw-form-input"
                    placeholder={i18next.t("twithdraw96")}
                  />
                </Item>
              </div>
              <p>
                <strong>{i18next.t("tncurr20")} </strong>
                {i18next.t("tncurr21")}
              </p>
            </div>
          )}
          <div className="withdraw-main-new">
            {withdrawProfit < 1000 && (
              <div>
                <p className="deposit-short-note">
                  {i18next.t("twithdraw101")}
                </p>
              </div>
            )}
            {amount && (
              <div>
                <p>
                  <strong>{i18next.t("tncurr22")}</strong> I{" "}
                  {capitalizeFirstLetter(user?.user?.firstname)}{" "}
                  {capitalizeFirstLetter(user?.user?.lastname)}{" "}
                  {i18next.t("tncurr23")}{" "}
                  {country === "Uganda" ? amount : (amount * curr).toFixed(2)}{" "}
                  {country === "Uganda" ? "UGX" : userCurrency}.{" "}
                  {i18next.t("tncurr24")}.
                </p>
              </div>
            )}
            <Item
              shouldUpdate
              className="withraw-button-item"
              wrapperCol={{
                span: 6,
              }}
            >
              {() => (
                <Button
                  className="withdraw-button"
                  htmlType="submit"
                  disabled={
                    busy ||
                    withdrawProfit < 500 ||
                    amount > withdrawProfit ||
                    !!form
                      .getFieldsError()
                      .filter(({ errors }) => errors.length).length
                  }
                >
                  {i18next.t("twithdraw102")}
                </Button>
              )}
            </Item>
          </div>
        </Form>
        <div className="withdraw-table">
          <h4>{i18next.t("twithdraw103")}</h4>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th className="invest-head">S/N</th>
                <th className="invest-head">{i18next.t("tncurr25")}</th>
                <th className="invest-head">{i18next.t("twithdraw104")}</th>

                <th className="invest-head">{i18next.t("twithdraw105")}</th>

                <th className="invest-head">{i18next.t("tncurr26")}</th>

                <th className="invest-head">{i18next.t("twithdraw107")}</th>
                <th className="invest-head">{i18next.t("twithdraw108")}</th>
                <th className="invest-head">{i18next.t("twithdraw109")}</th>
              </tr>
            </thead>
            <tbody>
              {withdrawalData?.map((withdrawal, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="table-data-1">{withdrawal?.type}</td>

                  <td className="table-data-1">{withdrawal?.coin}</td>

                  <td>
                    {(withdrawal?.amount * curr).toFixed(2)} {userCurrency}{" "}
                  </td>
                  <td>
                    {withdrawal?.walletAddress ||
                      withdrawal?.accountNumber ||
                      withdrawal?.mobileNumber}
                  </td>
                  <td>{withdrawal?.status}</td>
                  <td className="table-data">{withdrawal?.reference}</td>
                  <td>
                    {moment(withdrawal?.createdAt).format(
                      "YYYY-MM-DD HH:MM:SS"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </DocumentTitle>
  ) : (
    <Navigate to="/funds/complete-withdrawal" />
  );
};

export default Withdraw;
