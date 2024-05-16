import React, { useState, useEffect } from "react";
import "./style.css";
import i18next from "i18next";
import { FaCopy } from "react-icons/fa";
import { toast } from "react-toastify";
import { Select, Form, InputNumber, Button } from "antd";
import { useLocation } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useGetCryptoByIdQuery } from "../../redux/service/cryptoApi";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";
import Spinner from "react-bootstrap/Spinner";
import DocumentTitle from "react-document-title";

const { Option } = Select;
const { Item } = Form;

const Deposit = () => {
  const [form] = Form.useForm();

  const [container, setContainer] = useState(false);
  const [wallet, setWallet] = useState(" ");
  const [walletImg, setWalletImg] = useState(" ");
  const [text, setText] = useState(" ");
  const [amount, setAmount] = useState();
  const [coinAmount, setCoinAmount] = useState();
  const [symb, setSymb] = useState();
  const [amountCurr, setAmountCurr] = useState();
  const [busy, setBusy] = useState(false);
  const [depositData, setDepositData] = useState([]);

  const { data: btcdata } = useGetCryptoByIdQuery("bitcoin");
  const { data: ethdata } = useGetCryptoByIdQuery("ethereum");
  const { data: bnbdata } = useGetCryptoByIdQuery("binancecoin");
  const { data: usdtdata } = useGetCryptoByIdQuery("tether");
  const { data: ltcdata } = useGetCryptoByIdQuery("litecoin");
  const { data: bchdata } = useGetCryptoByIdQuery("bitcoin-cash");

  const { user } = useSelector((state) => state.auth);
  const { exchangeData } = useSelector((state) => state.exchange);
  const { BTC, ETH, BNB, USDT, LTC, BCH } = user?.user;

  const userCurrency = user?.user?.currency;

  const curr = exchangeData?.rates[userCurrency];
  const location = useLocation();

  const balancebtc =
    Math.round((amount / btcdata?.market_data?.current_price?.usd) * 1000000) /
    1000000;

  const balanceeth =
    Math.round((amount / ethdata?.market_data?.current_price?.usd) * 1000000) /
    1000000;

  const balancebnb =
    Math.round((amount / bnbdata?.market_data?.current_price?.usd) * 1000000) /
    1000000;

  const balanceusdt =
    Math.round((amount / usdtdata?.market_data?.current_price?.usd) * 1000000) /
    1000000;

  const balanceltc =
    Math.round((amount / ltcdata?.market_data?.current_price?.usd) * 1000000) /
    1000000;

  const balancebch =
    Math.round((amount / bchdata?.market_data?.current_price?.usd) * 1000000) /
    1000000;

  const onSelect = (value) => {
    switch (value) {
      case "bitcoin":
        setContainer(true);
        setWallet(BTC?.walletAddress);
        setWalletImg(BTC?.walletImg);
        setText(BTC?.name);
        setCoinAmount(balancebtc);
        setAmountCurr(amount * curr);
        setSymb("BTC");
        break;

      case "ethereum":
        setContainer(true);
        setWallet(ETH?.walletAddress);
        setWalletImg(ETH?.walletImg);
        setText(ETH?.name);
        setCoinAmount(balanceeth);
        setAmountCurr(amount * curr);
        setSymb("ETH");
        break;
      case "binancecoin":
        setContainer(true);
        setWallet(BNB?.walletAddress);
        setWalletImg(BNB?.walletImg);
        setText(BNB?.name);
        setCoinAmount(balancebnb);
        setAmountCurr(amount * curr);
        setSymb("BNB");
        break;
      case "tether":
        setContainer(true);
        setWallet(USDT?.walletAddress);
        setWalletImg(USDT?.walletImg);
        setText(USDT?.name);
        setCoinAmount(balanceusdt);
        setAmountCurr(amount * curr);
        setSymb("USDT");
        break;
      case "litecoin":
        setContainer(true);
        setWallet(LTC?.walletAddress);
        setWalletImg(LTC?.walletImg);
        setText(LTC?.name);
        setCoinAmount(balanceltc);
        setAmountCurr(amount * curr);
        setSymb("LTC");
        break;
      case "bitcoincash":
        setContainer(true);
        setWallet(BCH?.walletAddress);
        setWalletImg(BCH?.walletImg);
        setText(BCH?.name);
        setCoinAmount(balancebch);
        setAmountCurr(amount * curr);
        setSymb("BCH");
        break;

      default:
        return null;
    }
  };

  useEffect(() => {
    if (location?.state?.from === "bitcoin") {
      setContainer(true);
      setWallet(BTC?.walletAddress);
      setWalletImg(BTC?.walletImg);
      setText(BTC?.name);
      setCoinAmount(balancebtc);
      setAmountCurr(amount * curr);
      setSymb("BTC");
    }
    if (location?.state?.from === "ethereum") {
      setContainer(true);
      setWallet(ETH?.walletAddress);
      setWalletImg(ETH?.walletImg);
      setText(ETH?.name);
      setCoinAmount(balanceeth);
      setAmountCurr(amount * curr);
      setSymb("ETH");
    }
    if (location?.state?.from === "binancecoin") {
      setContainer(true);
      setWallet(BNB?.walletAddress);
      setWalletImg(BNB?.walletImg);
      setText(BNB?.name);
      setCoinAmount(balancebnb);
      setAmountCurr(amount * curr);
      setSymb("BNB");
    }
    if (location?.state?.from === "tether") {
      setContainer(true);
      setWallet(USDT?.walletAddress);
      setWalletImg(USDT?.walletImg);
      setText(USDT?.name);
      setCoinAmount(balanceusdt);
      setAmountCurr(amount * curr);
      setSymb("USDT");
    }
    if (location?.state?.from === "Litecoin") {
      setContainer(true);
      setWallet(LTC?.walletAddress);
      setWalletImg(LTC?.walletImg);
      setText(LTC?.name);
      setCoinAmount(balanceltc);
      setAmountCurr(amount * curr);
      setSymb("LTC");
    }
    if (location?.state?.from === "bitcoincash") {
      setContainer(true);
      setWallet(BCH?.walletAddress);
      setWalletImg(BCH?.walletImg);
      setText(BCH?.name);
      setCoinAmount(balancebch);
      setAmountCurr(amount * curr);
      setSymb("BCH");
    }
  }, [
    location?.state?.from,
    balancebtc,
    balanceeth,
    balancebnb,
    balanceusdt,
    balanceltc,
    balancebch,
    BCH?.name,
    BCH?.walletAddress,
    BCH?.walletImg,
    BNB?.name,
    BNB?.walletAddress,
    BNB?.walletImg,
    BTC?.name,
    BTC?.walletAddress,
    BTC?.walletImg,
    ETH?.name,
    ETH?.walletAddress,
    ETH?.walletImg,
    LTC?.name,
    LTC?.walletAddress,
    LTC?.walletImg,
    USDT?.name,
    USDT?.walletAddress,
    USDT?.walletImg,
    amount,
    curr,
  ]);

  useEffect(() => {
    const fetchDepositData = async () => {
      setBusy(true);
      try {
        const res = await axios.get(
          process.env.REACT_APP_BASE_URI + `/auth/deposit/${user?.user?.id}`,

          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );
        setBusy(false);
        setDepositData(res.data);
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
    fetchDepositData();
  }, [user?.token, user?.user?.id]);

  const amountChange = (value) => {
    setAmount(value);
  };
  const handleCopy = () => {
    let copyText = document.getElementById("input");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    toast.success(`${copyText.value} `);
  };

  const onFinish = async (values) => {
    let newValues = {
      ...values,
      email: user?.user?.email,
      amountCurr: amountCurr,
    };
    setBusy(true);
    try {
      await axios.post(
        process.env.REACT_APP_BASE_URI + `/auth/deposit/${user?.user?.id}`,
        newValues,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      setBusy(false);
      toast.success(i18next.t("tdeposit25"));
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
    <DocumentTitle title="Deposit Funds | Payeer Pty Limited">
      <div className="deposit-main">
        <h3>{i18next.t("tdeposit26")}</h3>
        <Form
          form={form}
          initialValues={{
            coin: location?.state?.from
              ? location?.state?.from
              : i18next.t("tdeposit27"),
            plan: i18next.t("tdeposit28"),
          }}
          className="deposit-form"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Item
            className="amount-form-item"
            name="amount"
            rules={[
              {
                required: true,
                message: [i18next.t("tdeposit29")],
              },
            ]}
          >
            <InputNumber
              addonAfter="$"
              className="amount-form-input"
              placeholder={i18next.t("tdeposit30")}
              onChange={amountChange}
            />
          </Item>

          <div className="deposit-main-1">
            <Item
              className="deposit-form-item deposit-select-item"
              name="coin"
              rules={[
                {
                  required: true,
                  message: [i18next.t("tdeposit31")],
                },
              ]}
            >
              <Select
                className="deposit-select"
                optionFilterProp="children"
                onChange={onSelect}
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
          </div>
          {amount && container && (
            <div>
              <p className="deposit-short-note">
                {i18next.t("tdeposit32")} ${amount ? amount : null}{" "}
                {userCurrency !== "USD" &&
                  `which is ${amountCurr} ${userCurrency}`}{" "}
                {i18next.t("tdeposit33")} {coinAmount ? coinAmount : null}{" "}
                {symb} {i18next.t("tdeposit34")}
              </p>
            </div>
          )}

          {container ? (
            <div className="deposit-main-sub">
              <div className="deposit-main-sub-1">
                <p>{i18next.t("tdeposit35")}</p>
                <img
                  className="wallet-address-img"
                  src={walletImg}
                  alt="wallet OR code"
                />
              </div>
              <div className="deposit-main-sub-2">
                <p>{i18next.t("tdeposit36")}:</p>
                <div className="deposit-main-sub-2-1">
                  <div className="wallet-address-code">
                    <input
                      readOnly
                      type="text"
                      value={wallet}
                      id="input"
                      className="wallet-address-input"
                    />
                    <div className="wallet-copy-button" onClick={handleCopy}>
                      {i18next.t("tdeposit37")} <FaCopy />
                    </div>
                  </div>
                  <div className="wallet-address-note">
                    <h6>{i18next.t("tdeposit38")}</h6>
                    <ul>
                      <li>
                        {i18next.t("tdeposit39")} {text}{" "}
                        {i18next.t("tdeposit40")}
                      </li>
                      <li>{i18next.t("tdeposit41")}</li>
                      <li>
                        {i18next.t("tdeposit42")} {text}{" "}
                        {i18next.t("tdeposit43")}
                      </li>
                      <li>{i18next.t("tdeposit44")}</li>
                      <li>{i18next.t("tdeposit45")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          <Item
            className="deposit-form-item"
            name="plan"
            rules={[
              {
                required: true,
                message: [i18next.t("tdeposit46")],
              },
            ]}
          >
            <Select className="plan" optionFilterProp="children">
              <Option value="basic">{i18next.t("tndeposit1")}</Option>
              <Option value="standard">{i18next.t("tndeposit2")}</Option>
              <Option value="professional">{i18next.t("tndeposit3")}</Option>
            </Select>
          </Item>
          <Item
            shouldUpdate
            wrapperCol={{
              span: 24,
            }}
          >
            {() => (
              <Button
                className="deposit-button"
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
                &nbsp; {i18next.t("tdeposit50")}
              </Button>
            )}
          </Item>
        </Form>
        <div className="deposit-table">
          <h4>{i18next.t("tdeposit51")}</h4>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th className="invest-head">S/N</th>
                <th className="invest-head">{i18next.t("tdeposit52")}</th>
                <th className="invest-head">{i18next.t("tdeposit53")}</th>
                <th className="invest-head">{i18next.t("tdeposit54")}</th>
                <th className="invest-head">{i18next.t("tdeposit55")}</th>
                <th className="invest-head">{i18next.t("tdeposit56")}</th>
                <th className="invest-head">{i18next.t("tdeposit57")}</th>
                <th className="invest-head">{i18next.t("tdeposit58")}</th>
              </tr>
            </thead>
            <tbody>
              {depositData?.map((deposit, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="table-data-1">{deposit?.coin}</td>
                  <td>
                    {(deposit?.amount * curr).toFixed(2)} {userCurrency}{" "}
                  </td>
                  <td className="table-data-1">{deposit?.plan}</td>
                  <td>{deposit?.status}</td>
                  <td className="table-data">{deposit?.reference}</td>
                  <td>
                    {moment(deposit?.createdAt).format("YYYY/MM/DD HH:MM:SS")}
                  </td>
                  <td>{deposit?.maturitytime}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </DocumentTitle>
  );
};

export default Deposit;
