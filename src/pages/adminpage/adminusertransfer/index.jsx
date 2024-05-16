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
  const [transferData, setTransferData] = useState([]);
  const [transfer, setTransfer] = useState({});
  const [showEdit, setShowEdit] = useState(false);

  const { admin } = useSelector((state) => state.admin);

  const token = admin.token;
  const params = useParams();

  useEffect(() => {
    const fetcTransferData = async () => {
      setBusy(true);
      try {
        const res = await axios.get(
          process.env.REACT_APP_BASE_URI + `/admin/transfers/${params.userId}`,

          {
            headers: {
              Authorization: `Bearer ${token}`,
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
    fetcTransferData();
  }, [token, params.userId]);

  const handleEdit = async (id) => {
    setBusy(true);
    try {
      const res = await axios.get(
        process.env.REACT_APP_BASE_URI + `/admin/transfer/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBusy(false);
      setTransfer(res.data);
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
      amount: transfer?.amount,
      status: transfer?.status,
      walletAddress: transfer?.walletAddress,
    });
  }, [form, transfer]);

  const onFinish = async (values) => {
    const proceed = window.confirm(
      "Are you sure you want to update this data? Click OK to proceed"
    );

    if (proceed) {
      setBusy(true);
      try {
        await axios.patch(
          process.env.REACT_APP_BASE_URI + `/admin/transfer/${transfer?._id}`,
          values,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBusy(false);
        toast.success("Transfer data updated successfully");
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
          process.env.REACT_APP_BASE_URI + `/admin/transfer/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBusy(false);
        toast.success("Transfer data successfully deleted");
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

  if (busy) {
    return <Spin />;
  }

  return (
    <div className="transact-table admin-user-transfer">
      <h4>Transfer History</h4>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th className="invest-head">S/N</th>
            <th className="invest-head">Coin</th>
            <th className="invest-head">Amount</th>
            <th className="invest-head">WalletAddress</th>
            <th className="invest-head">Status</th>
            <th className="invest-head">Reference</th>
            <th className="invest-head">Date</th>
          </tr>
        </thead>
        <tbody>
          {transferData?.map((transfr, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="table-data-1">{transfr?.coin}</td>
              <td> ${transfr?.amount}</td>
              <td>{transfr?.walletAddress}</td>
              <td>{transfr?.status}</td>
              <td className="table-data">{transfr?.reference}</td>
              <td>
                {moment(transfr?.createdAt).format("YYYY/MM/DD HH:MM:SS")}
              </td>
              <td className="admin-transfer-button">
                <button onClick={() => handleEdit(transfr?._id)}>Edit</button>
                <button onClick={() => handleDelete(transfr?._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {showEdit && (
        <div className="admin-btc-cont">
          <Form
            form={form}
            name="btc"
            wrapperCol={{
              span: 24,
            }}
            layout="vertical"
            onFinish={onFinish}
          >
            <Item
              className="edit-form-item"
              label="Deposited Amount:"
              name="amount"
            >
              <InputNumber className="edit-form-input edit-form-amount" />
            </Item>
            <Item
              className="edit-form-item"
              name="walletAddress"
              label=" Wallet Address"
            >
              <Input className="edit-form-input" />
            </Item>
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
        </div>
      )}
    </div>
  );
};

export default UserWithdrawal;
