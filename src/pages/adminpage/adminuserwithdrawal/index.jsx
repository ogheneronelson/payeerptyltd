import React, { useState, useEffect } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Spin from "../../../components/Spinner";
import Table from "react-bootstrap/Table";
import { Form, Input, InputNumber, Button } from "antd";
import Spinner from "react-bootstrap/Spinner";

const { Item } = Form;

const UserWithdrawal = () => {
  const [form] = Form.useForm();

  const [busy, setBusy] = useState(true);
  const [withdrawalData, setWithdrawalData] = useState([]);
  const [withdraw, setWithdraw] = useState({});
  const [showEdit, setShowEdit] = useState(false);

  const { admin } = useSelector((state) => state.admin);

  const token = admin.token;
  const params = useParams();

  useEffect(() => {
    const fetchWthdrawalData = async () => {
      setBusy(true);
      try {
        const res = await axios.get(
          process.env.REACT_APP_BASE_URI +
            `/admin/withdrawals/${params.userId}`,

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBusy(false);
        setWithdrawalData(res.data);
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
    fetchWthdrawalData();
  }, [token, params.userId]);

  const handleEdit = async (id) => {
    setBusy(true);
    try {
      const res = await axios.get(
        process.env.REACT_APP_BASE_URI + `/admin/withdrawal/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBusy(false);
      setWithdraw(res.data);
      setShowEdit(true);
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

  useEffect(() => {
    form.setFieldsValue({
      amount: withdraw?.amount,
      status: withdraw?.status,
      walletAddress: withdraw?.walletAddress,
    });
  }, [form, withdraw]);

  const onFinish = async (values) => {
    const proceed = window.confirm(
      "Are you sure you want to update this withrawal data? Click OK to proceed"
    );

    if (proceed) {
      setBusy(true);
      try {
        await axios.patch(
          process.env.REACT_APP_BASE_URI + `/admin/withdrawal/${withdraw?._id}`,
          values,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBusy(false);
        toast.success("Withdrawal data updated successfully");
        setShowEdit(false);
      } catch (error) {
        if (error?.response?.data) {
          const { data } = error.response;
          if (!data.success) {
            toast.error(data.msg);
          }
          setBusy(false);
          return console.log(error.response.data);
        }
        console.log(error);
        setBusy(false);
      }
      setBusy(false);
    } else {
      return null;
    }
  };

  const handleDelete = async (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this data? Once deleted, data will be lost"
    );
    if (proceed) {
      setBusy(true);
      try {
        await axios.delete(
          process.env.REACT_APP_BASE_URI + `/admin/withdrawal/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBusy(false);
        toast.success("Withdrawal data successfully deleted");
        setShowEdit(false);
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
    } else {
      return null;
    }
  };

  // const handleCodeSend = async () => {
  //   const proceed = window.confirm(
  //     "Are you sure you want to send this user withdrawal code? Click OK to proceed"
  //   );
  //   if (proceed) {
  //     console.log(user.email);
  //     setBusy(true);
  //     try {
  //       await axios.post(
  //         process.env.REACT_APP_BASE_URI + `/admin/withdrawal-verification`,
  //         { email: user.email },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       setBusy(false);
  //       toast.success("Withdrawal code sent successfully");
  //       setShowEdit(false);
  //     } catch (error) {
  //       if (error?.response?.data) {
  //         const { data } = error.response;
  //         if (!data.success) {
  //           toast.error(data.msg);
  //         }
  //         setBusy(false);
  //         return console.log(error.response.data);
  //       }
  //       console.log(error);
  //       setBusy(false);
  //     }
  //     setBusy(false);
  //   } else {
  //     return null;
  //   }
  // };

  if (busy) {
    return <Spin />;
  }

  return (
    <div className="withdraw-table admin-user-withdraw">
      <h4>Withdrawal History</h4>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th className="invest-head">S/N</th>
            <th className="invest-head">Type</th>
            <th className="invest-head">Coin</th>
            <th className="invest-head">Amount</th>
            <th className="invest-head">WalletAddress</th>
            <th className="invest-head">Status</th>
            <th className="invest-head">Reference</th>
            <th className="invest-head">Date</th>
          </tr>
        </thead>
        <tbody>
          {withdrawalData?.map((withdr, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{withdr?.type}</td>
              <td className="table-data-1">{withdr?.coin}</td>
              <td> ${withdr?.amount}</td>
              <td>{withdr?.walletAddress}</td>
              <td>{withdr?.status}</td>

              <td className="table-data">{withdr?.reference}</td>
              <td>{moment(withdr?.createdAt).format("YYYY/MM/DD HH:MM:SS")}</td>
              <td className="admin-withdraw-button">
                <button onClick={() => handleEdit(withdr?._id)}>Edit</button>
                <button onClick={() => handleDelete(withdr?._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {showEdit && (
        <div className="admin-btc-cont">
          {/* <div className="button-code-cont">
            <button className="button-code" onClick={handleCodeSend}>
              Send Code
            </button>
            {otp?.code && (
              <p>
                Sent OTP: <strong>{otp?.code}</strong>
              </p>
            )}
          </div> */}
          {withdrawalData?.map((withdr, index) => (
            <div key={index}>
              {withdr?.type === "bank" && (
                <div>
                  {withdr?.country && (
                    <p>
                      <strong>Country: </strong>
                      {withdr?.country}
                    </p>
                  )}
                 
            
                      {withdr?.bankName && (
                        <p>
                          <strong>Bank Name: </strong>
                          {withdr?.bankName}
                        </p>
                      )}
                      {withdr?.bankAddress && (
                        <p>
                          <strong>Bank Address: </strong>
                          {withdr?.bankAddress}
                        </p>
                      )}
                      {withdr?.accountName &&(
                        <p>
                          <strong>Account Name: </strong>
                          {withdr?.accountName}
                        </p>
                      )}
                      {withdr?.accountNumber &&(
                        <p>
                          <strong>Account Number: </strong>
                          {withdr?.accountNumber}
                        </p>
                      )}
                      {withdr?.accountType && (
                        <p>
                          <strong>Account Type: </strong>
                          {withdr?.accountType}
                        </p>
                      )}
                 
                  {withdr?.mobileNetwork &&(
                    <p>
                      <strong>Mobile Network: </strong>
                      {withdr?.mobileNetwork}
                    </p>
                  )}
                  {withdr?.mobileNumber && (
                    <p>
                      <strong>Mobile Number: </strong>
                      {withdr?.mobileNumber}
                    </p>
                  )}
                  {withdr?.comment && (
                    <p>
                      <strong>Comment: </strong>
                      {withdr?.comment}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}

          {withdrawalData?.map((withdr, index) => (
            <Form
              form={form}
              name="btc"
              wrapperCol={{
                span: 24,
              }}
              layout="vertical"
              onFinish={onFinish}
              key={index}
            >
              <Item
                className="edit-form-item"
                label="Deposited Amount:"
                name="amount"
              >
                <InputNumber className="edit-form-input edit-form-amount" />
              </Item>
              {withdr.type === "crypto" && (
                <Item
                  className="edit-form-item"
                  name="walletAddress"
                  label=" Wallet Address"
                >
                  <Input className="edit-form-input" />
                </Item>
              )}
              <Item
                className="edit-form-item"
                name="status"
                label=" Deposit Status"
              >
                <Input className="edit-form-input" />
              </Item>

              <Item
                shouldUpdate
                className="edit-form-item"
                wrapperCol={{
                  span: 24,
                }}
              >
                {() => (
                  <Button
                    className="edit-form-input edit-form-button"
                    htmlType="submit"
                    disabled={
                      busy ||
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
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
                    )}{" "}
                    &nbsp; Submit
                  </Button>
                )}
              </Item>
            </Form>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserWithdrawal;
