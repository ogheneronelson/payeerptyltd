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

const UserDeposit = () => {
  const [form] = Form.useForm();

  const [busy, setBusy] = useState(true);
  const [depositData, setDepositData] = useState([]);
  const [depo, setDepo] = useState({});
  const [showEdit, setShowEdit] = useState(false);

  const { admin } = useSelector((state) => state.admin);

  const token = admin.token;
  const params = useParams();

  useEffect(() => {
    const fetchDepositData = async () => {
      setBusy(true);
      try {
        const res = await axios.get(
          process.env.REACT_APP_BASE_URI + `/admin/deposits/${params.userId}`,

          {
            headers: {
              Authorization: `Bearer ${token}`,
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
  }, [token, params.userId]);

  const handleEdit = async (id) => {
    console.log(id);
    setBusy(true);
    try {
      const res = await axios.get(
        process.env.REACT_APP_BASE_URI + `/admin/deposit/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBusy(false);
      setDepo(res.data);
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
      amount: depo[0]?.amount,
      status: depo[0]?.status,
    });
  }, [form, depo]);

  const onFinish = async (values) => {
    const proceed = window.confirm(
      "Are you sure you want to update this deposit information? Click OK to proceed"
    );

    if (proceed) {
      setBusy(true);
      try {
        await axios.patch(
          process.env.REACT_APP_BASE_URI + `/admin/deposits/${depo[0]?._id}`,
          values,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBusy(false);
        toast.success("Peposit data updated successfully");
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
          process.env.REACT_APP_BASE_URI + `/admin/deposits/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBusy(false);
        toast.success("Deposit data successfully deleted");
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
    <div className="deposit-table admin-user-deposit">
      <h4>Deposit History</h4>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th className="invest-head">S/N</th>
            <th className="invest-head">Coin</th>
            <th className="invest-head">Amount</th>
            <th className="invest-head">Plan</th>
            <th className="invest-head">Status</th>
            <th className="invest-head">Reference</th>
            <th className="invest-head">Date</th>
            <th className="invest-head">Maturity</th>
          </tr>
        </thead>
        <tbody>
          {depositData?.map((deposit, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="table-data-1">{deposit?.coin}</td>
              <td> ${deposit?.amount}</td>
              <td className="table-data-1">{deposit?.plan}</td>
              <td>{deposit?.status}</td>

              <td className="table-data">{deposit?.reference}</td>
              <td>
                {moment(deposit?.createdAt).format("YYYY/MM/DD HH:MM:SS")}
              </td>
              <td>
                {moment(deposit?.maturitytime).format("YYYY/MM/DD HH:MM:SS")}
              </td>
              <td className="admin-depo-button">
                <button onClick={() => handleEdit(deposit?._id)}>Edit</button>
                <button onClick={() => handleDelete(deposit?._id)}>
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

export default UserDeposit;
