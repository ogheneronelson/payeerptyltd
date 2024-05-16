import React, { useState, useEffect } from "react";
import "./style.css";
import i18next from "i18next";
import { Select, Form, Input, InputNumber, Button } from "antd";
import { useLocation } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useGetCryptoByIdQuery } from "../../redux/service/cryptoApi";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import moment from "moment";
import DocumentTitle from "react-document-title";

const { Option } = Select;
const { Item } = Form;

const Transact = () => {
  const [form] = Form.useForm();

  const [amount, setAmount] = useState();
  const [coinAmount, setCoinAmount] = useState();
  const [address, setAddress] = useState();
  const [symb, setSymb] = useState();
  const [busy, setBusy] = useState(false);
  const [transferData, setTransferData] = useState([]);

  const { data: btcdata } = useGetCryptoByIdQuery("bitcoin");
  const { data: ethdata } = useGetCryptoByIdQuery("ethereum");
  const { data: bnbdata } = useGetCryptoByIdQuery("binancecoin");
  const { data: usdtdata } = useGetCryptoByIdQuery("tether");
  const { data: ltcdata } = useGetCryptoByIdQuery("litecoin");
  const { data: bchdata } = useGetCryptoByIdQuery("bitcoin-cash");

  const { user } = useSelector((state) => state.auth);

  const location = useLocation();

  const { BTC, ETH, BNB, USDT, LTC, BCH } = user?.user;
  const transferProfit =
    BTC?.profit +
    USDT?.profit +
    ETH?.profit +
    BNB?.profit +
    LTC?.profit +
    BCH?.profit;

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
        setCoinAmount(balancebtc);
        setSymb("BTC");
        break;

      case "ethereum":
        setCoinAmount(balanceeth);
        setSymb("ETH");
        break;
      case "binancecoin":
        setCoinAmount(balancebnb);
        setSymb("BNB");
        break;
      case "tether":
        setCoinAmount(balanceusdt);
        setSymb("USDT");
        break;
      case "litecoin":
        setCoinAmount(balanceltc);
        setSymb("LTC");
        break;
      case "bitcoincash":
        setCoinAmount(balancebch);
        setSymb("BCH");
        break;

      default:
        return null;
    }
  };

  useEffect(() => {
    if (location?.state?.from === "bitcoin") {
      setCoinAmount(balancebtc);
      setSymb("BTC");
    }
    if (location?.state?.from === "tether") {
      setCoinAmount(balanceusdt);
      setSymb("USDT");
    }
    if (location?.state?.from === "binancecoin") {
      setCoinAmount(balancebnb);
      setSymb("BNB");
    }
    if (location?.state?.from === "tether") {
      setCoinAmount(balanceusdt);
      setSymb("USDT");
    }
    if (location?.state?.from === "Litecoin") {
      setCoinAmount(balanceltc);
      setSymb("LTC");
    }
    if (location?.state?.from === "bitcoincash") {
      setCoinAmount(balancebch);
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
  ]);

  useEffect(() => {
    const fetchTransferData = async () => {
      setBusy(true);
      try {
        const res = await axios.get(
          process.env.REACT_APP_BASE_URI + `/auth/transfers/${user?.user?.id}`,

          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );
        setBusy(false);
        setTransferData(res.data);
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
    fetchTransferData();
  }, [user?.token, user?.user?.id]);

  const walletChange = (e) => {
    setAddress(e.target.value);
  };

  const amountChange = (value) => {
    setAmount(value);
  };

  const onFinish = async (values) => {
    let newValues = { ...values, email: user?.user?.email };
    setBusy(true);
    try {
      await axios.post(
        process.env.REACT_APP_BASE_URI + `/auth/transfer/${user?.user?.id}`,
        newValues,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      setBusy(false);
      toast.success(i18next.t("ttransact67"));
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
    <DocumentTitle title="Transfer Funds | Payeer Pty Limited">
      <div className="transact-main">
        <h3>{i18next.t("ttransact68")}</h3>
        <Form
          form={form}
          initialValues={{
            coin: location?.state?.from
              ? location?.state?.from
              : i18next.t("ttransact69"),
          }}
          className="transact-form"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Item
            className="transact-amount-item"
            name="amount"
            rules={[
              {
                required: true,
                message: [i18next.t("ttransact70")],
              },
            ]}
          >
            <InputNumber
              className="transact-amount-input"
              placeholder={i18next.t("ttransact71")}
              onChange={amountChange}
              addonAfter="$"
            />
          </Item>
          <Item
            className="transact-form-item transact-select-item"
            name="coin"
            rules={[
              {
                required: true,
                message: [i18next.t("ttransact72")],
              },
            ]}
          >
            <Select
              className="transact-cryptocoin-select"
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
          <Item
            className="transact-form-item"
            name="walletAddress"
            rules={[
              {
                type: "string",
              },
              {
                required: true,
                message: [i18next.t("ttransact73")],
              },
            ]}
          >
            <Input
              className="transact-form-input"
              placeholder={i18next.t("ttransact74")}
              onChange={walletChange}
            />
          </Item>
          {amount && coinAmount && symb && address && (
            <div>
              <p className="deposit-short-note transact-note">
                {i18next.t("ttransact75")} ${amount ? amount : null}{" "}
                {i18next.t("ttransact76")} {coinAmount ? coinAmount : null}{" "}
                {symb} {i18next.t("ttransact77")} {address ? address : null}.
              </p>
            </div>
          )}
          {transferProfit < 500 && (
            <div>
              <p className="deposit-short-note">{i18next.t("ttransact79")}</p>
            </div>
          )}
          <Item
            shouldUpdate
            className="transact-button-item"
            wrapperCol={{
              span: 24,
            }}
          >
            {() => (
              <Button
                className="transact-button"
                htmlType="submit"
                disabled={
                  transferProfit < 500 ||
                  busy ||
                  !form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length)
                    .length
                }
              >
                {i18next.t("ttransact80")}
              </Button>
            )}
          </Item>
        </Form>

        <div className="transact-table">
          <h4>{i18next.t("ttransact91")}</h4>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th className="invest-head">S/N</th>
                <th className="invest-head">{i18next.t("ttransact82")}</th>
                <th className="invest-head">{i18next.t("ttransact83")}</th>
                <th className="invest-head">{i18next.t("ttransact84")}</th>
                <th className="invest-head">{i18next.t("ttransact85")}</th>
                <th className="invest-head">{i18next.t("ttransact86")}</th>
                <th className="invest-head">{i18next.t("ttransact87")}</th>
              </tr>
            </thead>
            <tbody>
              {transferData?.map((transfer, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="table-data-1">{transfer?.coin}</td>
                  <td> ${transfer?.amount} </td>
                  <td>{transfer?.walletAddress}</td>
                  <td>{transfer?.status}</td>
                  <td className="table-data">{transfer?.reference}</td>
                  <td>
                    {moment(transfer?.createdAt).format("YYYY-MM-DD HH:MM:SS")}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </DocumentTitle>
  );
};

export default Transact;
